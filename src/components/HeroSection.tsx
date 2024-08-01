import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="flex flex-col lg:flex-row items-center md:items-start space-y-14 md:space-y-0 md:space-x- px-8 lg:px-2">
        <div className="flex flex-col space-y-14 md:w-1/2">
          <h1 className="lg:text-8xl text-6xl text-neutral-800 font-normal">See the NFT <br />new world</h1>
          <p className="text-neutral-400 font-semibold max-w-lg">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>

          <div className='flex space-x-4 items-center cursor-pointer'>
            <p className='font-semibold'>Discover Now</p>
            <Image
              alt='Discover'
              src='/images/discover.svg'
              width={40}
              height={40} />

          </div>
        </div>

        <div className="relative flex items-center justify-center w-full lg:w-1/2 space-x-4 md:space-x-8">
          <div className="relative overflow-hidden rounded-full w-[200px] h-[250px] sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[400px] mt-16 sm:mt-24 md:mt-32">
            <Image
              src="/images/herosection-image1.svg"
              alt="First Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          <div className="relative overflow-hidden rounded-full w-[200px] h-[250px] sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[400px] -mt-16 sm:-mt-24 md:-mt-32">
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
