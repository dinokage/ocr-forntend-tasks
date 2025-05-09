// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="p-6">
        <nav className="mb-6">
          <a href="/upload" className="text-sky-600 underline mr-4">Go to Upload Page</a>
          <a href="/payment" className="text-sky-600 underline">Go to Payment Form</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
