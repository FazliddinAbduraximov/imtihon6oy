import { BannerCard } from "../components/bannerCard"
import { BannerData } from "../data/bannerData"
import section1img1 from '../assets/about/Photo2.png'
import section1img2 from '../assets/about/Photo3.png'
import section1img3 from '../assets/about/Tractor.svg'
import section1img4 from '../assets/about/Icon.svg'
import section1img5 from '../assets/about/Photo.jpg'
import { Btn } from "../components/btn"
import { Strelka } from "../assets/strelka"
import { Basket2 } from "../assets/about/icon/basket"
import { Barg } from "../assets/about/icon/barg"
import { Phone } from "../assets/about/icon/phone"
import { Security } from "../assets/about/icon/security"
import { Organic } from "../data/organicData"
import { Offer } from "../data/offerData"
import { Subscribe } from "../components/subscribe"

export const About = () => {
    return (
        <>
            <section>
                <BannerCard
                    key={BannerData[0].id}
                    img1={BannerData[0].img1}
                    img2={BannerData[0].img2}
                    title={BannerData[0].title}
                />
            </section>

            <section className=" bg-white">
                <div className="container">
                    <div className="flex gap-10 items-center justify-between">
                        <div className=" relative w-[947px] h-[997px]">
                            <img src={section1img1} alt="img" className=" absolute z-0 bottom-0 left-[-100px]" />
                            <img src={section1img2} alt="img" className="absolute  top-[200px] z-10 bottom-0 right-15" />
                        </div>
                        <div className="w-[675px]">
                            <p className="font-normal text-[36px] font-third-family text-btn ">About Us</p>
                            <h2 className="font-extrabold text-[50px] text-hero-h mt-2 mb-3.5 ">We do Creative <br /> Things for Success</h2>
                            <div className="mb-[58px]">
                                <p className="font-normal text-[18px] font-second-family">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <p className="my-12 font-normal text-[18px] font-second-family">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <div className="flex gap-[65px]">
                                    <div className="flex gap-[15px] items-center text-[25px] font-medium w-[300px]">
                                        <img src={section1img3} alt="img" />
                                        <h2>Modern Agriculture Equipment</h2>
                                    </div>
                                    <div className="flex gap-[15px] items-center text-[25px] font-medium w-[300px]">
                                        <img src={section1img4} alt="img" />
                                        <h2>No growth hormones are used</h2>
                                    </div>
                                </div>
                            </div>
                            <Btn bg='bg-link' padding="py-[28px] px-[50px]" radius="rounded-[16px]" className="w-[220px] h-[79px]">
                                <div className='flex items-center gap-2.5 justify-between'>
                                    <p className='mr-1 font-bold text-[20px] text-white'>Explore More</p>
                                    <div className='bg-[#335b6b] p-2 rounded-full flex items-center justify-center'>
                                        <Strelka />
                                    </div>
                                </div>
                            </Btn>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[190px]">
                <div className="container">
                    <div className="flex gap-[50px] items-center justify-between">
                        <div className="w-[671px]">
                            <p className="font-normal text-[36px] font-third-family text-btn ">Why Choose us?</p>
                            <h2 className="font-extrabold text-[50px] text-hero-h mt-1.5 mb-[25px] ">We do not buy from the open market & traders.</h2>
                            <p className="font-normal text-[18px] font-second-family">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                            <div className="w-[486px] mb-6">
                                <div className=" flex gap-[7px] items-center mt-9 mb-3 w-[340px] rounded-[50px] pl-[30px] pr-[90px] py-[30px] bg-[#ececec]">
                                    <div className="h-4 w-4 border-3 border-btn rounded-full"></div>
                                    <p className="font-medium text-[20px] text-hero-h">100% Natural Product</p>
                                </div>
                                <p className="ml-[60px] font-normal text-[18px] font-second-family">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                            </div>
                            <div className="w-[486px] mb-6">
                                <div className=" flex gap-[7px] items-center mt-9 mb-3 w-[340px] rounded-[50px] pl-[30px] pr-[90px] py-[30px] bg-[#ececec]">
                                    <div className="h-4 w-4 border-3 border-btn rounded-full"></div>
                                    <p className="font-medium text-[20px] text-hero-h"> Increases resistance</p>
                                </div>
                                <p className="ml-[60px] font-normal text-[18px] font-second-family">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                            </div>
                        </div>
                        <div>
                            <img src={section1img5} alt="img" className="h-[650px] rounded-[30px]" />
                        </div>
                    </div>
                    <ul className="flex gap-[30px] justify-center mt-[90px]">
                        <li className="bg-white rounded-2xl text-center pt-[50px] px-[35px] pb-5">
                            <span className="inline-block p-6 bg-[#f9f8f8] rounded-full mb-5">
                                <Basket2 />
                            </span>
                            <h3 className="text-[25px] font-extrabold text-hero-h mb-2">Return Policy</h3>
                            <p className="w-[184px] mx-auto text-[18px] font-normal text-gray-600">
                                Simply dummy text of the printintypesetting industry.
                            </p>
                        </li>
                        <li className="bg-white rounded-2xl text-center pt-[50px] px-[35px] pb-5">
                            <span className="inline-block p-6 bg-[#f9f8f8] rounded-full mb-5">
                                <Barg />
                            </span>
                            <h3 className="text-[25px] font-extrabold text-hero-h mb-2">100% Fresh</h3>
                            <p className="w-[184px] mx-auto text-[18px] font-normal text-gray-600">
                                Simply dummy text of the printintypesetting industry.
                            </p>
                        </li>
                        <li className="bg-white rounded-2xl text-center pt-[50px] px-[35px] pb-5">
                            <span className="inline-block p-6 bg-[#f9f8f8] rounded-full mb-5">
                                <Phone />
                            </span>
                            <h3 className="text-[25px] font-extrabold text-hero-h mb-2">Support 24/7</h3>
                            <p className="w-[184px] mx-auto text-[18px] font-normal text-gray-600">
                                Simply dummy text of the printintypesetting industry.
                            </p>
                        </li>
                        <li className="bg-white rounded-2xl text-center pt-[50px] px-[35px] pb-5">
                            <span className="inline-block p-6 bg-[#f9f8f8] rounded-full mb-5">
                                <Security />
                            </span>
                            <h3 className="text-[25px] font-extrabold text-hero-h mb-2">Secured Payment</h3>
                            <p className="w-[184px] mx-auto text-[18px] font-normal text-gray-600">
                                Simply dummy text of the printintypesetting industry.
                            </p>
                        </li>
                    </ul>

                </div>
            </section>

            <section className="pt-[177px] pb-[202px] bg-white">
                <div className="container">
                    <div className="w-[852px] mx-auto text-center mb-[42px]">
                        <p className="font-normal text-[36px] font-third-family text-btn ">Team</p>
                        <h2 className="font-extrabold text-[50px] text-hero-h mb-4 ">Our Organic Experts</h2>
                        <p className="font-normal text-[18px] font-second-family">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-[27px]">
                        {Organic.map((item, index) => (
                            <div key={index} className=" bg-[#f9f8f8] hover:bg-white rounded-[30px] hover:shadow-lg">
                                <img src={item.img} alt={item.title} className="w-full h-[550px] object-cover rounded-t-[30px]" />
                                <div className="px-7 py-9">
                                    <h3 className="text-[25px] mb-1 font-extrabold text-hero-h">{item.title}</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-btn text-[22px] font-third-family">{item.job}</p>
                                        <div className="flex items-center gap-5">
                                            {Object.values(item.sotsial).map((Icon, i) => (
                                                <Icon key={i} size={22} className="text-hero-h cursor-pointer hover:text-btn" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section className="bg-hero-h py-[190px]">
                <div className="container">
                    <div className="text-center">
                        <p className="font-normal text-[36px] font-third-family text-btn ">About Us</p>
                        <h2 className="font-extrabold text-[50px] text-white mt-2 mb-4 ">What We Offer for You</h2>
                        <div className="grid grid-cols-4 justify-center">
                            {
                                Offer.map((e) => (
                                    <div key={e.id} className="text-center mx-auto">
                                        <img src={e.img} alt={e.title} className="w-[334px] h-[314px] rounded-2xl" />
                                        <h3 className="text-[25px] mt-6 font-medium text-white">{e.title}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-[141px] pb-[117px] bg-white">
                <div className="container">
                    <Subscribe />
                </div>
            </section>

        </>
    )
}
