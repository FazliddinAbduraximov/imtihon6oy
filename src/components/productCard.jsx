import React from 'react'
import { Star } from '../assets/rating/star'
import { Link } from 'react-router-dom';

export const ProductCard = ({
    id,
    category,
    title,
    oldPrice,
    price,
    rating,
    img,
}) => {
    return (
        <Link to={`/product/${id}`} className="block relative  bg-[#f9f8f8] rounded-[30px] shadow-sm hover:shadow-lg transition">
            <span className="absolute top-[30px] left-[30px] bg-hero-h text-white px-4 py-1.5 rounded-lg text-[15px] font-semibold">
                {category}
            </span>
            <img
                src={img}
                alt={title}
                className="w-full object-cover h-[330px] mt-[78px] mb-4"
            />

            <div className='px-[31px] pb-[17px]'>
                <h3 className="text-[20px] font-semibold mb-2 text-hero-h pb-3.5 border-b border-gray-300">{title}</h3>
                <div className="flex items-center justify-between pb-3.5">
                    <div className="flex items-center gap-3">
                        <del className="text-[#b8b8b8] text-[15px] font-semibold">${oldPrice}.00</del>
                        <p className=" font-bold text-[18px] text-hero-h">${price}.00</p>
                    </div>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < rating ? "text-[#ffa858]" : "text-gray-400"}>
                                <Star />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};
