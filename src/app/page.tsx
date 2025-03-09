import Image from "next/image";
// import {Image} form "next/"
export default function Home() {
  return (
    <div className="bg-custom-yellow flex min-h-screen items-center justify-center">
      {/* Card */}
      <div className="flex h-[501px] w-[327px] flex-col gap-6 rounded-2xl border bg-white p-6 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] sm:h-[522px] sm:w-[384px]">
        {/* Blog Image */}
        <div className="relative h-[200px]">
          <Image
            src="/assets/images/illustration-article.svg"
            alt="Blog illustration"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col gap-3">
          {/* Category */}
          <div className="bg-custom-yellow text-custom-gray-950 prose-custom-mid flex h-[26px] w-[73px] items-center justify-center rounded px-3 py-1 text-center text-[12px] font-extrabold sm:h-[29px] sm:w-[82px]">
            Learning
          </div>
          {/* publishDate */}
          <p className="text-[14px]">Published 21 Dec 2023</p>
          {/* title */}
          <h1 className="text-custom-gray-950 hover:text-custom-yellow text-2xl font-[1000] hover:cursor-pointer">
            HTML & CSS foundations
          </h1>
          {/* description */}
          <p className="text-custom-gray-500 text-[14px] sm:text-[16px]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
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
