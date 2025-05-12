// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="p-6">
        <nav className="mb-6 space-x-4">
        <Link href="/login" className="text-sky-600 underline">Go to login Page</Link>
        <Link href="/subscription" className="text-sky-600 underline">Go to Subscription Page</Link>
        <Link href="/payment" className="text-sky-600 underline">Go to Payment Form</Link>
          <Link href="/upload" className="text-sky-600 underline">Go to Upload Page</Link>
          <Link href="/ocr" className="text-sky-600 underline">Go to Ocr Page</Link>
          
        </nav>
        {children}
      </body>
    </html>
  );
}
