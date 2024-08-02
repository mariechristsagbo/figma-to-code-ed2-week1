import Image from "next/image";
import { services } from "@/constants";

export default function Services() {
  return (
    <section className="my-12">
      <h1 className="text-2xl font-bold px-8 lg:px-2">Create and Sell Now</h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 max-w-2xl mx-auto lg:max-w-full">
        {services.map((service, index) => (
          <div className="bg-neutral-100 rounded-3xl p-4 px-6 max-w-xs mx-auto hover:bg-opacity-50" key={index}>
            <div className="bg-black max-w-max rounded-lg p-2 flex my-4 justify-start">
              <Image src={service.icon} width={35} height={35} alt={service.title} />
            </div>

            <h1 className="mt-2 text-lg font-bold">{service.title}</h1>

            <p className="text-neutral-600 text-sm pb-2 mt-2">{service.paragraphe}</p>
          </div>
        ))}
      </div>
    </section>
  );
}