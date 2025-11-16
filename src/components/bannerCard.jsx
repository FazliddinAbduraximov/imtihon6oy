export const BannerCard = ({
    img1,
    img2,
    title
}) => {
    console.log(img1, img2, title)
    return (
        <section className="w-full flex flex-col justify-center items-center h-[450px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${img1}),url(${img2}` }}>
            <h1 className="text-hero-h text-[70px] font-extrabold">{title}</h1>
        </section>
    )
}
