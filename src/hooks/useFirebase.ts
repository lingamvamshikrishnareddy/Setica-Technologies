'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface WaitlistData {
  name: string;
  email: string;
  company?: string;
  interest: string;
  timestamp: Date;
}

export function useFirebase() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addToWaitlist = async (data: WaitlistData) => {
    setLoading(true);
    setError(null);

    try {
      const waitlistRef = collection(db, 'waitlist');
      
      await addDoc(waitlistRef, {
        ...data,
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString(),
      });

      setLoading(false);
      return true;
    } catch (err: any) {
      console.error('Error adding to waitlist:', err);
      setError(err.message || 'Failed to join waitlist. Please try again.');
      setLoading(false);
      return false;
    }
  };

  return {
    addToWaitlist,
    loading,
    error,
  };
}