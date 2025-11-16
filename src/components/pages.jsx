import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Strelka } from "../assets/strelka";

export const ProductDetail = ({ product }) => {
    const [count, setCount] = useState(1);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center mb-[90px]">
                <div className="rounded-3xl h-[600px] w-[600px] flex flex-col justify-center p-5 relative bg-[#f9f8f8]">
                    <span className="absolute top-10 left-10 bg-hero-h text-white px-4 py-1.5 rounded-lg text-[15px] font-semibold">
                        {product.category}
                    </span>

                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-[430px] object-contain rounded-2xl"
                    />
                </div>
                <div className="w-[600px]">
                    <h2 className="text-[40px] font-extrabold text-hero-h mb-3">
                        {product.title}
                    </h2>

                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-[#ffa858] text-xl">★★★★★</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <del className="text-[#9e9e9e] text-[20px]">${product.oldPrice}.00</del>
                        <p className="text-[26px] font-bold text-hero-h">${product.price}.00</p>
                    </div>

                    <p className="text-[18px] font-normal mt-[27px] mb-[35px]">
                        Simply dummy text of the printing and typesetting industry.
                        Lorem had ceased to been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley.
                    </p>

                    <div className="flex items-center gap-5 mb-16">
                        <p className="font-medium text-[18px]">Quantity :</p>

                        <div className="px-[60px] py-[30px] border border-hero-h rounded-2xl text-hero-h text-[20px] font-bold">
                            {count}
                        </div>

                        <button onClick={()=>setCount(count+1)} className="bg-hero-h text-white px-10 py-[30px] text-[20px]  rounded-xl font-medium flex items-center gap-2">
                            Add To Cart <Strelka />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-10 mb-10">
                <button className="bg-hero-h text-white px-10 py-4 rounded-xl font-semibold">
                    Product Description
                </button>
                <button className="bg-[#eef2e6] text-hero-h px-10 py-4 rounded-xl font-semibold">
                    Additional Info
                </button>
            </div>

            <p className="text-center max-w-4xl mx-auto text-gray-700 leading-8">
                Welcome to the world of natural and organic. Here you can discover
                the bounty of nature. We have grown on the principles of health,
                ecology, and care. We aim to give our customers a healthy
                chemical-free meal for perfect nutrition.
            </p>
        </section>
    );
};
