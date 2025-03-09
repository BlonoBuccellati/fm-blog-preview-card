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
          <p className="bg-custom-yellow text-custom-gray-950 prose-sm prose prose-custom-mid h-[29px] w-[82px] rounded border px-3 py-1 text-center font-bold">
            Learning
          </p>
          {/* publishDate */}
          <p>Published 21 Dec 2023</p>
          {/* title */}
          <h1>HTML & CSS foundation</h1>
          {/* description */}
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation
          </p>
        </div>
        {/* Author */}
        <div>
          <Image
            src="/assets/images/image-avatar.webp"
            alt="Author"
            width={30}
            height={30}
          ></Image>
          <p>Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}
