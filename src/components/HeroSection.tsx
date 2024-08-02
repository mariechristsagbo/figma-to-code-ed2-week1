'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const images = imageRefs.current;

    gsap.fromTo(
      images,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);
  return (
    <section className="sm:pt-32 pb-20 pt-20">
      <div className="flex flex-col lg:flex-row items-center md:items-start space-y-14 md:space-y-0 px-8 lg:px-2">
        <div className="flex flex-col space-y-14 md:w-1/2">
          <h1 className="lg:text-8xl sm:text-6xl text-5xl text-neutral-800 font-normal">See the NFT <br />new world</h1>
          <p className="text-neutral-400 font-semibold max-w-lg">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>

          <div className="flex space-x-4 items-center cursor-pointer group">
            <p className="font-semibold">Discover Now</p>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-600">
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full lg:w-1/2 space-x-4 md:space-x-8">
          <div
            ref={el => {
              if (el && !imageRefs.current.includes(el)) imageRefs.current.push(el);
            }}
            className="relative overflow-hidden rounded-full w-[200px] h-[250px] sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[400px] mt-16 sm:mt-24 md:mt-32">

            {/* <Image
              src="/images/herosection-image1.svg"
              alt="First Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            /> */}
            <Image
              alt="Ellipse"
              src='/images/circle.svg'
              width={100}
              height={100}
              className="absolute top-0 left-0"
            />
          </div>

          <div
            ref={el => {
              if (el && !imageRefs.current.includes(el)) imageRefs.current.push(el);
            }}
            className="relative overflow-hidden rounded-full w-[200px] h-[250px] sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[400px] -mt-16 sm:-mt-24 md:-mt-32">
            <Image
              src="/images/herosection-image2.svg"
              alt="Second Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>


      </div>
    </section>
  )
}
