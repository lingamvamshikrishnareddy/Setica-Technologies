'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">
      <h1 className="text-6xl font-bold mb-4">500</h1>
      <h2 className="text-2xl font-semibold mb-6">Something went wrong</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        We encountered an unexpected error. Please try again later.
      </p>
      <div className="flex gap-4">
        <Button variant="primary" onClick={reset}>
          Try Again
        </Button>
        <Link href="/">
          <Button variant="outline">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
