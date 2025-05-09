'use client';
import React from 'react';
import Image from 'next/image';
import GroupImage from '../../../public/Subscribe/Group 9.png';
import VectorImage from '../../../public/Subscribe/Vector.png';
import Tick from '../../../public/Subscribe/Tick.png';
import Cross from '../../../public/Subscribe/cross.png';


const subscription: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        {/* Left Card */}
        <div className="w-[90%] md:w-[280px] lg:w-[300px] h-[60vh] bg-gradient-to-b from-[#D7D7D7] to-[#FFFFFF] 
        rounded-br-[55px] rounded-bl-[55px] p-6 flex flex-col justify-center items-center shadow-md "
        >

          {/* Image */}
      
          <div className="relative w-full flex justify-center mt-[-30px]">
  {/* Left vector image */}
  <Image
    src={VectorImage}
    alt="Left Vector"
    width={17}
    height={15}
    className="absolute left-[calc(50%-75px)] top-[-52px] z-10"
  />

  {/* Center curved tab + text */}
  <div className="relative z-20 -top-[52px] w-[200px] h-[110px]">
    {/* The background image */}
    <Image
      src={GroupImage}
      alt="Tab Label"
      layout="fill"
      objectFit="contain"
      className="rounded-lg"
    />
    {/* Your overlay text */}
    <span className="absolute inset-0 flex items-center justify-center text-white font-light italic font-opensans text-2xl">
      Basic
    </span>
  </div>

  {/* Right vector image */}
  <Image
    src={VectorImage}
    alt="Right Vector"
    width={17}
    height={15}
    className="absolute right-[calc(50%-75px)] top-[-52px] z-10"
  />
</div>


          {/* text */}
          <div className='flex flex-col items-center justify-center font-sans '>
            <h2 className="text-5xl font-bold mb-6 text-[#4D4D4D]">Free</h2>
          </div>

          {/* Feature List */}
          <ul className="text-gray-700 space-y-7 text-sm">
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>3 Uploads</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Check" width={18} height={18} />
              <span>Edit Responses</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Check" width={18} height={18} />
              <span>Bulk Upload</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Check" width={18} height={18} />
              <span>Mobile App Support</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Email Support</span>
            </li>
          </ul>

          {/* Subscribe Button */}
          <button className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-b from-[#02ACED] to-[#016287] text-white font-light shadow hover:opacity-90 font-sans">
            Subscribe
          </button>

        </div>

        {/* Middle Card */}
        <div className="w-[95%] md:w-[380px] lg:w-[420px] h-[70vh] bg-gradient-to-b from-[#F6F1D2] to-[#EF7A7A] rounded-br-[55px] rounded-bl-[55px] p-6 flex flex-col justify-center items-center shadow-lg">
          {/* Image */}
      
          <div className="relative w-full flex justify-center mt-[-30px]">
  {/* Left vector image */}
  <Image
    src={VectorImage}
    alt="Left Vector"
    width={15}
    height={10}
    className="absolute left-[calc(50%-93px)] top-[-38px] z-10"
  />

  {/* Center curved tab + text */}
  <div className="relative z-20 -top-[38px] w-[280px] h-[140px]">
    {/* The background image */}
    <Image
      src={GroupImage}
      alt="Tab Label"
      layout="fill"
      objectFit="contain"
      className="rounded-lg"
    />
    {/* Your overlay text */}
    <span className="absolute inset-0 flex items-center justify-center text-white font-light italic font-opensans text-2xl">
  Premium
</span>

  </div>

  {/* Right vector image */}
  <Image
    src={VectorImage}
    alt="Right Vector"
    width={17}
    height={15}
    className="absolute right-[calc(50%-93px)] top-[-38px] z-10"
  />
</div>


          {/* text */}
          <div className='flex flex-col items-center justify-center'>
  <h2 className="text-5xl font-bold mb-6 text-[#4D4D4D] font-sans">
    <sup className="text-2xl align-top font-sans">$</sup>49<sub className="text-lg align-bottom font-sans">/mo</sub>
  </h2>
</div>

          {/* Feature List */}
          <ul className="text-gray-700 space-y-7 text-sm">
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>3 Uploads</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Edit Responses</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Bulk Upload</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Mobile App Support</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Live Call Support</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Custom Limit</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Edit Responses</span>
            </li>
          </ul>

          {/* Subscribe Button */}
          <button className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-b from-[#02ACED] to-[#016287] text-white font-light shadow hover:opacity-90 font-sans">
            Subscribe
          </button>

        </div>

        {/* Right Card */}
        <div className="w-[90%] md:w-[280px] lg:w-[300px] h-[60vh] bg-gradient-to-b from-[#D7D7D7] to-[#FFFFFF] 
        rounded-br-[55px] rounded-bl-[55px] p-6 flex flex-col justify-center items-center shadow-md "
        >

          {/* Image */}
      
          <div className="relative w-full flex justify-center mt-[-30px]">
  {/* Left vector image */}
  <Image
    src={VectorImage}
    alt="Left Vector"
    width={17}
    height={15}
    className="absolute left-[calc(50%-75px)] top-[-52px] z-10"
  />

  {/* Center curved tab + text */}
  <div className="relative z-20 -top-[52px] w-[200px] h-[110px]">
    {/* The background image */}
    <Image
      src={GroupImage}
      alt="Tab Label"
      layout="fill"
      objectFit="contain"
      className="rounded-lg"
    />
    {/* Your overlay text */}
    <span className="absolute inset-0 flex items-center justify-center text-white font-light italic font-opensans text-2xl">
      Standard
    </span>
  </div>

  {/* Right vector image */}
  <Image
    src={VectorImage}
    alt="Right Vector"
    width={17}
    height={15}
    className="absolute right-[calc(50%-75px)] top-[-52px] z-10"
  />
</div>


          {/* text */}
          <div className='flex flex-col items-center justify-center font-sans'>
  <h2 className="text-5xl font-bold mb-6 text-[#4D4D4D]">
    <sup className="text-2xl align-top">$</sup>29<sub className="text-lg align-bottom">/mo</sub>
  </h2>
</div>


          {/* Feature List */}
          <ul className="text-gray-700 space-y-7 text-sm">
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>50 Uploads</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Edit Responses</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Check" width={18} height={18} />
              <span>Bulk Upload</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Check" width={18} height={18} />
              <span>Mobile App Support</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Live Chat Support</span>
            </li>
          </ul>

          {/* Subscribe Button */}
          <button className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-b from-[#02ACED] to-[#016287] text-white font-light shadow hover:opacity-90 font-sans">
            Subscribe
          </button>

        </div>
      </div>
    </div>
  );
};

export default subscription;
