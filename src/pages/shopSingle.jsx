import { useParams } from "react-router-dom"
import { BannerCard } from "../components/bannerCard"
import { ProductDetail } from "../components/pages"
import { ProductCard } from "../components/productCard"
import { Subscribe } from "../components/subscribe"
import { BannerData } from "../data/bannerData"
import { ProductsData } from "../data/homeData"

export const ShopSingle = () => {
    const { id } = useParams();
    const product = ProductsData.find((e) => e.id == id);
    if (!product) {
        return (
            <h1 className="text-center py-32 text-3xl font-bold text-red-600">
                Product Not Found
            </h1>
        );
    }
    return (
        <>
            <BannerCard
                key={BannerData[2].id}
                img1={BannerData[2].img1}
                img2={BannerData[2].img2}
                title={BannerData[2].title}
            />
            <ProductDetail product={product} />

            <section className="pt-[90px] bg-white">
                <div className="container">
                    <div>
                        <h2 className="font-extrabold text-[50px] text-hero-h text-center">
                            Related Products
                        </h2>

                        <div className="grid grid-cols-4 gap-y-10 gap-x-5">
                            {ProductsData.slice(0, 4).map((e) => (
                                <ProductCard
                                    key={e.id}
                                    id={e.id}
                                    category={e.category}
                                    title={e.title}
                                    oldPrice={e.oldPrice}
                                    price={e.price}
                                    rating={e.rating}
                                    img={e.img}
                                />
                            ))}
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
    );
};
