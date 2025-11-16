import { BannerCard } from "../components/bannerCard"
import { ProductCard } from "../components/productCard"
import { Subscribe } from "../components/subscribe"
import { BannerData } from "../data/bannerData"
import { ProductsData } from "../data/homeData"

export const Shop = () => {
    return (
        <>
            <BannerCard
                key={BannerData[1].id}
                img1={BannerData[1].img1}
                img2={BannerData[1].img2}
                title={BannerData[1].title}
            />

            <section className="pt-[90px] bg-white">
                <div className="container">
                    <div className='grid grid-cols-4 gap-y-10 gap-x-5 bg-white'>
                        {
                            ProductsData.map((e) => (
                                <ProductCard key={e.id}
                                    id={e.id}
                                    category={e.category}
                                    title={e.title}
                                    oldPrice={e.oldPrice}
                                    price={e.price}
                                    rating={e.rating}
                                    img={e.img}
                                />
                            ))
                        }
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
