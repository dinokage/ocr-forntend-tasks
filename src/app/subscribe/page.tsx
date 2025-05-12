'use client';
import React from 'react';
import Image from 'next/image';
import right from '../../../public/right.png'
import wrong from '../../../public/wrong.png'
import Link from 'next/link';


export default function PricingPage() {
  
  return (
    <div className="pb-2 md:pb-6 lg:pb-10 min-h-screen bg-[#DBFAFC] flex flex-col items-center py-10 px-4">
      <div className="flex flex-col md:flex-row gap-10 ">       
     <div className=''>
    <p className="text-xl font-bold pl-25 pt-20 pb-8">Basic</p>
      
  <div className="bg-white w-[250px] overflow-hidden p-6  rounded-tl-[80px] rounded-br-[80px]  ">
          <div className="bg-[#F3CF56] h-[100px] w-[210px] flex items-center justify-center 
                  text-3xl font-bold text-gray-800 rounded-tl-[80px] rounded-br-[80px] mr-8 ">
                  Free
          </div>

          <ul className="w-fit mx-auto flex flex-col justify-center text-gray-700 space-y-4  text-sm mt-6">
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>3 Uploads</span></li>
            <li className="flex gap-2"><Image src={wrong} alt="check" width={18} height={18} /><span>Edit Responses</span></li>
            <li className="flex gap-2"><Image src={wrong} alt="check" width={18} height={18} /><span>Bulk Upload</span></li>
            <li className="flex gap-2"><Image src={wrong} alt="check" width={18} height={18} /><span>Mobile App Support</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Email Support</span></li>
          </ul>
          <div className="bg-[#F3CF56] text-center py-2 font-semibold w-[150px] mx-auto mt-6 rounded-tl-[60px] rounded-br-[60px]">
            <Link href={'/ocr'}>Subscribe</Link>
          </div>
        </div>
     </div>
      
        <div className=''>
        
        <p className="text-xl font-bold pl-20 pb-8 ">Premimum</p>
        <div className="bg-white w-[250px] overflow-hidden p-6  rounded-tl-[80px] rounded-br-[80px]">
          <div className="bg-[#45BCE5] h-[100px] w-[210px] flex items-center justify-center 
                  text-3xl font-bold text-gray-800 rounded-tl-[80px] rounded-br-[80px] mr-8 ">
        
            <div className="text-sm text-white">$</div>
            <div className="text-3xl text-white">49</div>
            <div className="text-sm text-white">/mo</div>
          </div>
          <ul className="w-fit mx-auto flex flex-col justify-center text-gray-700 space-y-4  text-sm mt-6">
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Custom Limit</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Edit Responses</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Bulk Upload</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Mobile App Support</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Custom Limit</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Edit Responses</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Bulk Upload</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Mobile App Support</span></li>
          </ul>
          <div className="bg-[#45BCE5] text-center py-2 font-semibold text-white w-[150px] mx-auto mt-6 rounded-tl-[60px] rounded-br-[60px]">
            <Link href={'/payment'}>Subscribe</Link>
          </div>
        </div>
        </div>

        <div className=''>
        
         <p className="text-xl font-bold pl-20 pt-20 pb-8 ">Standard</p>
        <div className="bg-white w-[250px] overflow-hidden p-6  rounded-tl-[80px] rounded-br-[80px]">
          <div className="bg-[#FADDA2] h-[100px] w-[210px] flex items-center justify-center 
                  text-3xl font-bold text-gray-800 rounded-tl-[80px] rounded-br-[80px] mr-8 ">
            <div className="text-sm">$</div>
            <div className="text-3xl">29</div>
            <div className="text-sm">/mo</div>
          </div>
          <ul className="w-fit mx-auto flex flex-col justify-center text-gray-700 space-y-4  text-sm mt-6">
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>50 Uploads</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Edit Responses</span></li>
            <li className="flex gap-2"><Image src={wrong} alt="check" width={18} height={18} /><span>Bulk Upload</span></li>
            <li className="flex gap-2"><Image src={wrong} alt="check" width={18} height={18} /><span>Mobile App Support</span></li>
            <li className="flex gap-2"><Image src={right} alt="check" width={18} height={18} /><span>Live Chat Support</span></li>
          </ul>
          <div className="bg-[#FADDA2] text-center py-2 font-semibold w-[150px] mx-auto mt-6 rounded-tl-[60px] rounded-br-[60px]">
           <Link href={'/payment'}>Subscribe</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
