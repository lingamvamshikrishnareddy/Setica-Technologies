// src/lib/firebase/firestore.ts

import { initializeApp, getApps } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc, 
  increment, 
  serverTimestamp 
} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

// Collection names
const WAITLIST_COLLECTION = 'waitlist';
const STATS_COLLECTION = 'stats';
const STATS_DOC_ID = 'counters';

/**
 * Add email to waitlist
 * @param email - User's email address
 * @throws Error if email already exists
 */
export async function addToWaitlist(email: string): Promise<void> {
  try {
    // Check if email already exists
    const q = query(
      collection(db, WAITLIST_COLLECTION),
      where('email', '==', email.toLowerCase())
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      throw new Error('Email already exists in waitlist');
    }

    // Add to waitlist
    await addDoc(collection(db, WAITLIST_COLLECTION), {
      email: email.toLowerCase(),
      createdAt: serverTimestamp(),
      status: 'pending'
    });

    // Increment waitlist counter
    const statsRef = doc(db, STATS_COLLECTION, STATS_DOC_ID);
    await setDoc(
      statsRef,
      {
        waitlistCount: increment(1),
        lastUpdated: serverTimestamp()
      },
      { merge: true }
    );

    console.log('Successfully added to waitlist:', email);
  } catch (error: any) {
    console.error('Error adding to waitlist:', error);
    throw error;
  }
}

/**
 * Get total waitlist count
 * @returns Number of people on waitlist
 */
export async function getWaitlistCount(): Promise<number> {
  try {
    const statsRef = doc(db, STATS_COLLECTION, STATS_DOC_ID);
    const statsDoc = await getDoc(statsRef);

    if (statsDoc.exists()) {
      return statsDoc.data().waitlistCount || 0;
    }

    // If stats document doesn't exist, count manually
    const querySnapshot = await getDocs(collection(db, WAITLIST_COLLECTION));
    const count = querySnapshot.size;

    // Initialize stats document
    await setDoc(statsRef, {
      waitlistCount: count,
      interestCount: 0,
      lastUpdated: serverTimestamp()
    });

    return count;
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    return 0;
  }
}

/**
 * Get interest count (people who clicked "I'm Interested")
 * @returns Number of interested users
 */
export async function getInterestCount(): Promise<number> {
  try {
    const statsRef = doc(db, STATS_COLLECTION, STATS_DOC_ID);
    const statsDoc = await getDoc(statsRef);

    if (statsDoc.exists()) {
      return statsDoc.data().interestCount || 0;
    }

    // Initialize if doesn't exist
    await setDoc(statsRef, {
      waitlistCount: 0,
      interestCount: 0,
      lastUpdated: serverTimestamp()
    });

    return 0;
  } catch (error) {
    console.error('Error getting interest count:', error);
    return 0;
  }
}

/**
 * Increment interest count
 */
export async function incrementInterestCount(): Promise<void> {
  try {
    const statsRef = doc(db, STATS_COLLECTION, STATS_DOC_ID);
    await setDoc(
      statsRef,
      {
        interestCount: increment(1),
        lastUpdated: serverTimestamp()
      },
      { merge: true }
    );

    console.log('Interest count incremented');
  } catch (error) {
    console.error('Error incrementing interest count:', error);
    throw error;
  }
}

/**
 * Check if email exists in waitlist
 * @param email - Email to check
 * @returns boolean indicating if email exists
 */
export async function emailExistsInWaitlist(email: string): Promise<boolean> {
  try {
    const q = query(
      collection(db, WAITLIST_COLLECTION),
      where('email', '==', email.toLowerCase())
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking email existence:', error);
    return false;
  }
}

/**
 * Get all waitlist emails (admin function)
 * @returns Array of waitlist entries
 */
export async function getAllWaitlistEmails(): Promise<any[]> {
  try {
    const querySnapshot = await getDocs(collection(db, WAITLIST_COLLECTION));
    const emails = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return emails;
  } catch (error) {
    console.error('Error getting all waitlist emails:', error);
    return [];
  }
}

export { db };