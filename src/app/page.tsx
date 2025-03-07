import Image from 'next/image';
// import {Image} form "next/"
export default function Home() {
  return (
    <div className='bg-custom-yellow min-h-screen flex justify-center items-center'>
      {/* Card */}
      <div className='bg-white w-[384px] h-[594px] flex rounded-2xl border-2 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]'>
        {/* Blog Image */}
        <Image
          src='/assets/images/illustration-article.svg'
          alt='Blog illustration'
          width={500}
          height={300}
        />
        {/* Content */}
        <div>
          {/* Category */}
          {/* publishDate */}
          {/* title */}
          {/* description */}
        </div>
      </div>
    </div>
  );
}
