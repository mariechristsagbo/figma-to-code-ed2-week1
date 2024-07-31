import React from 'react'
import Image from 'next/image'
import { categories, collections } from '@/constants'
export default function Collections() {
    return (
        <div>
            <h2 className='text-3xl py-4 font-bold'> Our Collections</h2>
            <div className='flex items-center justify-between'>
                <div className='my-2 flex items-center gap-2'>
                    <button className="bg-black text-neutral-50 font-semibold text-sm px-4 py-3 rounded-xl ">All categories</button>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="bg-gray-200 text-neutral-950 font-semibold text-sm px-4 py-3 rounded-xl hover:text-white hover:bg-black"
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <p className='text-md underline'>View More</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center my-6">
      {collections.map((card, index) => (
        <div
          key={index}
          className="border max-w-max border-neutral-300 rounded-3xl p-3 space-y-3"
        >
          <Image
            alt={card.alt}
            src={card.imageSrc}
            width={270}
            height={150}
            className="rounded-3xl object-cover w-[350px] h-[220px]"
          />
          <div className="flex justify-between items-center">
            <p className="font-semibold text-md px-2">{card.title}</p>
            <div className="flex items-center space-x-2">
              <Image
                alt="Ethereum"
                src="/images/ethereum.svg"
                width={24}
                height={24}
                className="rounded-3xl"
              />
              <p className="font-bold">68</p>
            </div>
          </div>
          <button className="font-semibold text-center w-full hover:bg-black hover:text-white border border-black rounded-lg py-2">
            Place a bid
          </button>
        </div>
      ))}
    </div>
        </div>
    )
}
