import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative my-20 flex w-full flex-col items-center justify-center gap-2 bg-gradient-to-r-from-teal-to-blue p-6">
      <h2 className="text-center text-5xl font-bold text-white">
        Congratulations on Top!
      </h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <Image
            src="/images/rewards/raffles/avatar.png"
            alt="avatar"
            height={78}
            width={78}
            className="rounded-full"
          />
          <p className="text-center font-semibold text-white">
            James Korsgaard
          </p>
        </div>
        <p className="text-center text-lg font-bold text-white">
          Living the dream with a luxury trip to <br />
          <span className="text-2xl">Maldives</span>
        </p>
        <div className="flex items-center gap-4">
          <Image
            src="/icons/twitter.svg"
            alt="twitter"
            height={24}
            width={24}
          />
          <Image
            src="/icons/facebook.svg"
            alt="facebook"
            height={24}
            width={24}
          />
          <Image
            src="/icons/instagram.svg"
            alt="instagram"
            height={24}
            width={24}
          />
          <Image
            src="/icons/telegram.svg"
            alt="telegram"
            height={24}
            width={24}
          />
        </div>
      </div>
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url('/images/rewards/raffles/banner-bg.svg')",
        }}
      />
    </div>
  );
};

export default Banner;
