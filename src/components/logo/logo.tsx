"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src="/images/photoPro.png"
        alt="logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="font-medium text-white">Antoine Capitain</span>
    </Link>
  );
};
