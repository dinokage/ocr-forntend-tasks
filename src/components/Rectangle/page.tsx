import React from 'react';

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="w-[200px] h-[120px] bg-blue-500"
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
    </div>
  );
};

export default Page;
