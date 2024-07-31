import Image from 'next/image';

const HeroSection = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-32">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-14 md:space-y-0 md:space-x-14">
          <div className="flex flex-col space-y-14 md:w-1/2">
            <h1 className="text-8xl text-neutral-700 font-normal">See the NFT <br />new world</h1>
            <p className="text-neutral-400 font-semibold max-w-lg">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>
          </div>

          <div className="relative flex items-center justify-center md:w-1/2 space-x-8">
          <div className='flex flex-col'>
          <div className="relative -top-2 left-0 w-full h-full flex items-center justify-center">
              <svg width="200" height="200" className="absolute">
                <ellipse cx="100" cy="100" rx="100" ry="50" className="fill-transparent stroke-black" />
                <ellipse cx="130" cy="50" rx="10" ry="20" className="fill-transparent stroke-black" />
              </svg>
            </div>

          <div className="relative overflow-hidden rounded-full w-[300px] h-[450px] mt-32">
              <Image
                src="/images/herosection-image1.svg"
                alt="First Image"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>

          
          </div>
            
            <div className="relative overflow-hidden rounded-full w-[300px] h-[450px] -mt-32">
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
      </div>
    </main>
  );
};

export default HeroSection;
