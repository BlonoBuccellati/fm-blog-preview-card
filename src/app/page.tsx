import Image from "next/image";
// import {Image} form "next/"
export default function Home() {
  return (
    <div className="bg-custom-yellow flex min-h-screen items-center justify-center">
      {/* Card */}
      <div className="flex h-[594px] w-[384px] flex-col gap-6 rounded-2xl border-2 bg-white p-6 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">
        {/* Blog Image */}
        <Image
          src="/assets/images/illustration-article.svg"
          alt="Blog illustration"
          width={500}
          height={300}
          className="rounded-2xl"
        />
        {/* Content */}
        <div className="flex flex-col gap-3">
          {/* Category */}
          <div className="bg-custom-yellow text-custom-gray-950 prose-custom-mid h-[29px] w-[82px] rounded border px-3 py-1 text-center font-extrabold drop-shadow-[0px_4px_3px_rgba(0,0,0,0.3)]">
            Learning
          </div>
          {/* publishDate */}
          <p className="prose-custom-mid drop-shadow-[0px_4px_1.8px_rgba(0,0,0,0.3)]">
            Published 21 Dec 2023
          </p>
          {/* title */}
          <h1 className="text-custom-gray-950 text-2xl font-[1000]">
            HTML & CSS foundations
          </h1>
          {/* description */}
          <p className="text-custom-gray-500 text-xl font-[1000]">
            These languages are the <br />
            backbone of every website,
            <br /> defining structure, content, <br />
            and presentation
          </p>
        </div>
        {/* Author */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/image-avatar.webp"
            alt="Author"
            width={32}
            height={32}
          ></Image>
          <p className="prose-custom-mid font-[1000]">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}
