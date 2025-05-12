'use client';

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();
  const [isSubscribedPopupVisible, setSubscribedPopupVisible] = useState(false);

  const handleSubscribe = (plan: string) => {
    if (plan === 'Basic') {
      router.push('/request');
    } else {
      router.push('/payment');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#dbfafc] p-4">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {/* Basic Plan */}
        <div className="relative w-full max-w-sm overflow-hidden rounded-lg rounded-b-3xl bg-white shadow-lg md:w-80">
          <div className="p-8 pb-24">
            <h2 className="mb-1 text-center text-4xl font-light text-[#4d4d4d]">Basic</h2>
            <div className="mb-6 flex justify-center">
              <div className="h-px w-48 bg-[#b3b3b3]"></div>
            </div>
            <div className="mb-8 text-center">
              <span className="text-6xl font-bold text-[#4d4d4d]">Free</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />3 Uploads</li>
              <li className="flex items-center gap-3"><X className="h-6 w-6 text-[#ff3b3b]" />Edit Responses</li>
              <li className="flex items-center gap-3"><X className="h-6 w-6 text-[#ff3b3b]" />Bulk Upload</li>
              <li className="flex items-center gap-3"><X className="h-6 w-6 text-[#ff3b3b]" />Mobile App Support</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Email Support</li>
            </ul>
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="flex items-center justify-center">
              <img src="/pricing1.png" alt="decorative wave" className="w-full -mt-4" />
              <button
                onClick={() => handleSubscribe('Basic')}
                className="absolute text-lg font-medium text-white z-10"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg md:w-80 md:scale-110 md:shadow-xl rounded-b-3xl">
          <div className="p-8 pb-24">
            <h2 className="mb-1 text-center text-4xl font-light text-[#4d4d4d]">Premium</h2>
            <div className="mb-6 flex justify-center">
              <div className="h-px w-48 bg-[#b3b3b3]"></div>
            </div>
            <div className="mb-8 text-center">
              <span className="text-2xl font-medium text-[#4d4d4d]">$</span>
              <span className="text-6xl font-bold text-[#4d4d4d]">49</span>
              <span className="text-lg text-[#4d4d4d]">/mo</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Custom Limit</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Edit Responses</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Bulk Upload</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Mobile App Support</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Live Call Support</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Custom Limit</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Edit Responses</li>
            </ul>
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="flex items-center justify-center">
              <img src="/pricing3.png" alt="decorative wave" className="w-full -mt-4" />
              <button
                onClick={() => handleSubscribe('Premium')}
                className="absolute text-lg font-medium text-white z-10"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="relative w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg md:w-80 rounded-b-3xl">
          <div className="p-8 pb-24">
            <h2 className="mb-1 text-center text-4xl font-light text-[#4d4d4d]">Standard</h2>
            <div className="mb-6 flex justify-center">
              <div className="h-px w-48 bg-[#b3b3b3]"></div>
            </div>
            <div className="mb-8 text-center">
              <span className="text-2xl font-medium text-[#4d4d4d]">$</span>
              <span className="text-6xl font-bold text-[#4d4d4d]">29</span>
              <span className="text-lg text-[#4d4d4d]">/mo</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />50 Uploads</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Edit Responses</li>
              <li className="flex items-center gap-3"><X className="h-6 w-6 text-[#ff3b3b]" />Bulk Upload</li>
              <li className="flex items-center gap-3"><X className="h-6 w-6 text-[#ff3b3b]" />Mobile App Support</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-[#378d00]" />Live Chat Support</li>
            </ul>
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="flex items-center justify-center">
              <img src="/pricing2.png" alt="decorative wave" className="w-full -mt-4" />
              <button
                onClick={() => handleSubscribe('Standard')}
                className="absolute text-lg font-medium text-white z-10"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {isSubscribedPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-center text-[#257881] font-semibold">
              The Selected Plan got Subscribed Successfully!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
