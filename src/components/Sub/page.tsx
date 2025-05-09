'use client';
import React from 'react';
import Image from 'next/image';
import Tick from '../../../public/Subscribe/Tick.png';
import Cross from '../../../public/Subscribe/cross.png';
import { useRouter } from 'next/navigation';


const subscription: React.FC = () => {
    const router = useRouter();

    const handleSubscribe = () => {
      router.push('/payment'); // Replace with your desired route
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-row items-center justify-center gap-10 flex-wrap">

                {/* Left Card */}
                <div className="w-[300px]   min-h-[50vh] sm:min-h-[70vh] md:min-h-[55vh] lg:min-h-[60vh] bg-gradient-to-b from-[#D7D7D7] to-[#FFFFFF] 
    rounded-br-[55px] rounded-bl-[55px] p-6 flex flex-col justify-center items-center shadow-md">


                    {/* Div shapes */}

                    <div className="relative w-full flex justify-center mt-[-30px]">
                        {/* Left div */}

                        <div
                            className="bg-[#0C87AF] rounded-t-full absolute left-[calc(50%-75px)] lg:top-[-50px] z-10  sm:-top-[3px] xl:top-[-50px]"
                            style={{ width: '15px', height: '9px' }}
                        ></div>
                        {/* Center div*/}
                        <div className="relative z-20   lg:-top-[50px] w-[200px] h-[110px] sm:-top-[3px]">

                            <div
                                className="w-[200px] h-[120px] bg-gradient-to-b from-[#02ACED] to-[#016287]"
                                style={{
                                    clipPath: `
                                polygon(
                                 30px 0, 
                                 170px 0, 
                                 150px 20px, 
                                 150px 100px, 
                                145px 110px, 
                                135px 118px, 
                                120px 120px, 
                                80px 120px, 
                                 65px 118px, 
                               55px 110px, 
                               50px 100px, 
                              50px 20px
                                    )`
                                }}
                            ></div>
                            {/* Your overlay text */}
                            <span className="absolute inset-0 flex items-center justify-center text-white font-light italic font-opensans text-xl">
                                Basic
                            </span>
                        </div>

                        {/* Right div */}

                        <div
                            className="bg-[#0C87AF] rounded-t-full absolute right-[calc(50%-75px)] lg:top-[-50px] z-10 sm:-top-[3px]"
                            style={{ width: '15px', height: '9px' }}
                        ></div>
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
                    <button className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-b from-[#02ACED] to-[#016287] text-white font-light shadow hover:opacity-90 font-sans"
                       onClick={handleSubscribe}>
                        Subscribe
                    </button>

                </div>




    {/* Middle Card */}
    <div className="w-[400px] md:w-[380px] lg:w-[350px] h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[600px] bg-gradient-to-b from-[#F6F1D2] to-[#EF7A7A] rounded-br-[55px] rounded-bl-[55px] p-6 flex flex-col justify-center items-center shadow-lg">

  {/*   <div className="w-[300px]  min-h-[60vh] sm:min-h-[70vh] md:min-h-[55vh] lg:min-h-[60vh] bg-gradient-to-b from-[#F6F1D2] to-[#EF7A7A] rounded-br-[55px] rounded-bl-[55px] p-6 flex flex-col justify-center items-center shadow-lg"> */}
          {/* Image */}
      
          <div className="relative w-full flex justify-center mt-[-30px]">
    {/* Left div */}

    <div
                            className="bg-[#0C87AF] rounded-t-full absolute left-[calc(50%-75px)] lg:top-[-50px] z-10  sm:-top-[3px] md:-top-[20px]"
                            style={{ width: '15px', height: '9px' }}
                        ></div>
                        {/* Center div*/}
                        <div className="relative z-20 lg:top-[-50px] w-[200px] h-[110px] sm:-top-[3px] md:-top-[20px]">

                            <div
                                className="w-[200px] h-[120px] bg-gradient-to-b from-[#02ACED] to-[#016287]"
                                style={{
                                    clipPath: `
                                polygon(
                                 30px 0, 
                                 170px 0, 
                                 150px 20px, 
                                 150px 100px, 
                                145px 110px, 
                                135px 118px, 
                                120px 120px, 
                                80px 120px, 
                                 65px 118px, 
                               55px 110px, 
                               50px 100px, 
                              50px 20px
                                    )`
                                }}
                            ></div>
                            {/* Your overlay text */}
                            <span className="absolute inset-0 flex items-center justify-center text-white font-light italic font-opensans text-xl">
                                Premium
                            </span>
                        </div>

                        {/* Right div */}

                        <div
                            className="bg-[#0C87AF] rounded-t-full absolute right-[calc(50%-75px)] lg:top-[-50px] z-10 sm:-top-[3px] md:-top-[20px]"
                            style={{ width: '15px', height: '9px' }}
                        ></div>
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
          <button className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-b from-[#02ACED] to-[#016287] text-white font-light shadow hover:opacity-90 font-sans"
             onClick={handleSubscribe}>
            Subscribe
          </button>

        </div>



    {/* Right Card */}
    <div className="w-[300px]   min-h-[50vh] sm:min-h-[70vh] md:min-h-[55vh] lg:min-h-[60vh] bg-gradient-to-b from-[#D7D7D7] to-[#FFFFFF] 
    rounded-br-[55px] rounded-bl-[55px] p-6 flex flex-col justify-center items-center shadow-md">


          {/* Image */}
      
          <div className="relative w-full flex justify-center mt-[-30px]">
    {/* Left div */}

    <div
                            className="bg-[#0C87AF] rounded-t-full absolute left-[calc(50%-75px)] lg:top-[-50px] z-10  sm:-top-[3px]"
                            style={{ width: '15px', height: '9px' }}
                        ></div>
                        {/* Center div*/}
                        <div className="relative z-20 lg:-top-[50px] w-[200px] h-[110px] sm:-top-[3px]">

                            <div
                                className="w-[200px] h-[120px] bg-gradient-to-b from-[#02ACED] to-[#016287]"
                                style={{
                                    clipPath: `
                                polygon(
                                 30px 0, 
                                 170px 0, 
                                 150px 20px, 
                                 150px 100px, 
                                145px 110px, 
                                135px 118px, 
                                120px 120px, 
                                80px 120px, 
                                 65px 118px, 
                               55px 110px, 
                               50px 100px, 
                              50px 20px
                                    )`
                                }}
                            ></div>
                            {/* Your overlay text */}
                            <span className="absolute inset-0 flex items-center justify-center text-white font-light italic font-opensans text-xl">
                                Standard
                            </span>
                        </div>

                        {/* Right div */}

                        <div
                            className="bg-[#0C87AF] rounded-t-full absolute right-[calc(50%-75px)] lg:top-[-50px] z-10 sm:-top-[3px]"
                            style={{ width: '15px', height: '9px' }}
                        ></div>
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
          <button className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-b from-[#02ACED] to-[#016287] text-white font-light shadow hover:opacity-90 font-sans"    onClick={handleSubscribe}>
            Subscribe
          </button>

        </div>
            </div>
        </div>
    );
};

export default subscription;
