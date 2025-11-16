import baner from '../assets/baner_bg.png'
import img1 from '../assets/1.png'
import banerimg from '../assets/banner.jpg'
import img2 from '../assets/2.png'
import { Strelka } from '../assets/strelka'
import { Btn } from '../components/btn'
import section2img1 from '../assets/sektion2/section1.png'
import section2img2 from '../assets/sektion2/Group1.svg'
import section2img3 from '../assets/sektion2/Group2.svg'
import { ProductsData } from '../data/homeData'
import { ProductCard } from '../components/productCard'
import section4img1 from '../assets/sektion4/Photo1.png'
import section4img2 from '../assets/sektion4/Photo2.png'
import section4img3 from '../assets/sektion4/Photo3.png'
import section7img1 from '../assets/sektion7/Photo.jpg'
import section7img2 from '../assets/sektion7/Photo1.jpg'
import section7img3 from '../assets/sektion7/Photo2.jpg'
import section8img1 from '../assets/sektion8/Photo1.png'
import section8img2 from '../assets/sektion8/Photo2.png'
import section8img3 from '../assets/sektion8/Photo.jpg'
import { Star } from '../assets/rating/star'
import { Statictika } from './statictika'
import section6img1 from '../assets/sektion6/image.png'
import { Person } from '../assets/person'
import { Subscribe } from '../components/subscribe'

export const Home = () => {
  return (
    <>
      <section className='mt-[] relative h-[898px] bg-right bg-no-repeat bg-[#f1eff0] relativ' style={{ backgroundImage: `url(${banerimg})` }}>
        <div className='container'>
          <div className='w-[550px] absolute top-50 z-100'>
            <p className='font-third-family font-bold text-gren text-[36px]'>100% Natural Food</p>
            <h1 className='mt-2 mb-6 font-extrabold text-[70px] text-hero-h'>Choose the best healthier way <br /> of life</h1>
            <Btn bg='bg-[#efd372]' padding="py-[28px] px-[39px]" radius="rounded-[16px]" className="w-[220px] h-[79px]">
              <div className='flex items-center gap-2.5 justify-between'>
                <p className='mr-2.5 p-1.5 font-bold text-5 text-[#274c5b]'>Explore Now</p>
                <div className='bg-link p-2 rounded-full flex items-center justify-center'>
                  <Strelka />
                </div>
              </div>
            </Btn>
          </div>
            <img src={baner} alt="img" className="absolute z-10 right-0 top-1/2 -translate-y-1/2" />
        </div>
      </section>

      <section>
        <div className="container">
          <div className='flex gap-9 mt-[154px] justify-center mb-[190px]'>
            <div className='flex flex-col justify-center rounded-[30px]  text-white pl-[55px] w-[682px] h-[387px] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${img1})` }}>
              <div className='w-[278px]'>
                <p className='font-third-family font-normal text-[36px] mb-[5px]'>Natural!!</p>
                <h2 className='font-extrabold text-[40px]'>Get Garden Fresh Fruits</h2>
              </div>
            </div>
            <div className='flex flex-col justify-center rounded-[30px]  text-white pl-[55px] w-[682px] h-[387px] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${img2})` }}>
              <div className='w-[278px]'>
                <p className='font-third-family font-normal text-btn text-[36px] mb-[5px]'>Offer!!</p>
                <h2 className='font-extrabold text-[40px] text-hero-h'>Get 10% off <br /> on Vegetables</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#fbfbfb]'>
        <div className="container">
          <div className='flex items-center'>
            <img src={section2img1} alt="section2 img" />
            <div className='w-[702px]'>
              <p className='text-btn font-third-family text-[36px] font-normal'>About Us</p>
              <h2 className='text-hero-h text-[50px] font-extrabold mt-2 mb-3.5'>We Believe in Working Accredited Farmers</h2>
              <p className='text-[18px] font-second-family font-normal'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
              <div className='flex gap-5 items-center mt-[46px] mb-[30px]'>
                <img className='p-[23px] rounded-[20px] bg-white' src={section2img2} alt="img" />
                <div className='w-[444px]'>
                  <h3 className='font-extrabold text-[25px] text-hero-h mb-[7px]'>Organic Foods Only</h3>
                  <p className='text-[18px] font-second-family font-normal'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
              </div>
              <div className='flex gap-5 mb-[46px] items-center'>
                <img className='p-[23px] rounded-[20px] bg-white' src={section2img2} alt="img" />
                <div className='w-[444px]'>
                  <h3 className='font-extrabold text-[25px] text-hero-h mb-[7px]'>Organic Foods Only</h3>
                  <p className='text-[18px] font-second-family font-normal'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
              </div>
              <Btn bg='bg-link' padding="py-[28px] px-[50px]" radius="rounded-[16px]" className="w-[220px] h-[79px]">
                <div className='flex items-center gap-2.5 justify-between'>
                  <p className='mr-1 font-bold text-[20px] text-white'>Shop Now</p>
                  <div className='bg-[#335b6b] p-2 rounded-full flex items-center justify-center'>
                    <Strelka />
                  </div>
                </div>
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='mt-44 mb-[200px]'>
            <p className='text-btn text-center font-third-family text-[36px] font-normal'>Categories</p>
            <h2 className='mt-2 mb-10 text-center text-hero-h text-[50px] font-extrabold'>Our Products</h2>
            <div className='grid grid-cols-4 gap-4 mb-[122px]'>
              {
                ProductsData.slice(0,8).map((e) => (
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
                ))
              }
            </div>
            <Btn bg='bg-link' padding="py-[28px] px-[50px]" radius="rounded-[16px]" className="w-[220px] h-[79px]">
              <div className='flex items-center gap-2.5 justify-between'>
                <p className='mr-1 font-bold text-[20px] text-white'>Load More</p>
                <div className='bg-[#335b6b] p-2 rounded-full flex items-center justify-center'>
                  <Strelka />
                </div>
              </div>
            </Btn>
          </div>
        </div>
      </section>


      <section className="relative h-[1267px] flex items-center justify-center">
        <div
          className="absolute left-0 top-0 h-full w-[25%] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${section4img1})` }}
        ></div>
        <div
          className="absolute right-0 top-0 h-full w-[25%] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${section4img2})` }}
        ></div>
        <div className="z-10 w-[780px] flex flex-col items-center text-center">
          <p className='text-btn font-third-family text-[36px] font-normal'>Testimonial</p>
          <h2 className="text-[50px] font-extrabold mt-2 mb-[60px] whitespace-nowrap">
            What Our Customer Saying?
          </h2>
          <div className='mt-[60px] mb-[102px] flex flex-col items-center text-center'>
            <img src={section4img3} alt="img" />
            <div className="flex mt-5 mb-[25px]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className='text-[#ffa858]'>
                  <Star />
                </span>
              ))}
            </div>
            <p className="text-[20px] font-normal">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>

            <h3 className='mt-5 text-[25px] font-semibold text-hero-h'>Sara Taylor</h3>
            <p className='mb-5 text-[15px] font-normal text-hero-h'>Consumer</p>
            <ul className='flex gap-[5px]'>
              <li className='w-2 h-2 bg-[#c4c4c4] rounded-full hover:bg-btn'></li>
              <li className='w-2 h-2 bg-[#c4c4c4] rounded-full hover:bg-btn'></li>
              <li className='w-2 h-2 bg-[#c4c4c4] rounded-full hover:bg-btn'></li>
            </ul>
          </div>
          <div className='flex gap-[62px]  pt-[102px] border-t border-gray-200]'>
            <Statictika text={'100%'} category={'Organic'} />
            <Statictika text={'285'} category={'Active Product'} />
            <Statictika text={'350+'} category={'Organic Orchads'} />
            <Statictika text={'25+'} category={'Years of Farming'} />
          </div>
        </div>
      </section>

      <section className='bg-hero-h py-[200px]'>
        <div className="container">
          <div>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-btn font-third-family text-[36px] font-normal'>Offer</p>
                <h2 className='text-white text-[50px] font-extrabold mt-2 mb-[50px]'>We Offer Organic For You</h2>
              </div>
              <Btn bg='bg-[#efd372]' radius="rounded-[16px]" className="w-[220px] h-[79px]">
                <div className='flex items-center gap-2.5 justify-between'>
                  <p className='mr-1 font-bold text-[20px] text-hero-h'>Shop Now</p>
                  <div className='bg-[#335b6b] p-2 rounded-full flex items-center justify-center'>
                    <Strelka />
                  </div>
                </div>
              </Btn>
            </div>
            <div className='grid grid-cols-4 gap-5'>
              {
                ProductsData.slice(4, 8).map(e => (
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
                ))
              }
            </div>

          </div>
        </div>
      </section >


      <section className=''>
        <div className='w-[952px] h-[931px] relative bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${section6img1})` }} >
          <div className='w-[789px] p-[10%] rounded-[30px] top-1/2 -translate-y-1/2 bg-white absolute left-[90%]'>
            <p className='text-btn font-third-family text-[36px] font-normal'>Eco Friendly</p>
            <h2 className='mt-2 mb-[35px] text-hero-h text-[50px] font-extrabold'>Econis is a Friendly <br /> Organic Store</h2>
            <ul className='flex flex-col gap-[35px]'>
              <li>
                <h3 className='font-medium text-[25px] text-hero-h mb-[7px]'>Start with Our Company First</h3>
                <p className='font-normal text-[18px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
              </li>
              <li>
                <h3 className='font-medium text-[25px]  text-hero-h mb-[7px]'>Learn How to Grow Yourself</h3>
                <p className='font-normal text-[18px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
              </li>
              <li>
                <h3 className='font-medium text-[25px]  text-hero-h mb-[7px]'>Farming Strategies of Today</h3>
                <p className='font-normal text-[18px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='grid grid-cols-3 gap-[18px] py-[187px] bg-[#f1f8f4]'>
          <div className='aspect-square bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center' style={{ backgroundImage: `url(${section7img1})` }}>
            <Btn bg='bg-white' padding="py-[33px] px-[83px]" radius="rounded-[16px]" className="w-[220px] h-[79px]">
              <div className='flex items-center gap-2.5 justify-between'>
                <p className='mr-1 font-medium text-[25px] text-hero-h'>Load More</p>
              </div>
            </Btn>
          </div>
          <div className='aspect-square bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center' style={{ backgroundImage: `url(${section7img2})` }}>
            <Btn bg='bg-white' padding="py-[33px] px-[83px]" radius="rounded-[16px]" className="w-[220px] h-[79px]">
              <div className='flex items-center gap-2.5 justify-between'>
                <p className='mr-1 font-medium text-[25px] text-hero-h'>Load More</p>
              </div>
            </Btn>
          </div>
          <div className='aspect-square bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center' style={{ backgroundImage: `url(${section7img3})` }}>
            <Btn bg='bg-white' padding="py-[33px] px-[83px]" radius="rounded-[16px]" className="w-[220px] h-[79px]">
              <div className='flex items-center gap-2.5 justify-between'>
                <p className='mr-1 font-medium text-[25px] text-hero-h'>Load More</p>
              </div>
            </Btn>
          </div>
        </div>
      </section>

      <section className='pt-[177px] pb-[185px] bg-gray-100'>
        <div className="container">
          <div>
            <div className='flex justify-between items-center'>
              <div className='w-[702px]'>
                <p className='text-btn font-third-family text-[36px] font-normal'>News</p>
                <h2 className='text-hero-h text-[50px] font-extrabold mt-2 mb-[50px]'>Discover weekly content about organic food, & more</h2>
              </div>
              <Btn bg='bg-white' border='border-2 border-hero-h' radius="rounded-[16px]" className="w-[220px] h-[79px]">
                <div className='flex items-center gap-2.5 justify-between'>
                  <p className='mr-1 font-bold text-[20px] text-hero-h'>Shop Now</p>
                  <div className='bg-[#335b6b] p-2 rounded-full flex items-center justify-center'>
                    <Strelka />
                  </div>
                </div>
              </Btn>
            </div>
            <div className='grid grid-cols-2 gap-[46px] justify-between mb-[185px]'>
              <div className='relative bg-no-repeat bg-center bg-cover rounded-[30px]' style={{ backgroundImage: `url(${section8img1})` }}>
                <h1 className=' absolute font-extrabold text-[25px] w-[82px] h-[82px] rounded-full flex flex-col justify-center top-8 left-[23px] text-center bg-gray-200'>25 <br /> Nov</h1>
                <div className='w-[700px] absolute bottom-[-60px] left-1/2 -translate-x-1/2  px-[57px] pt-12 pb-[60px] rounded-t-[30px] bg-white'>
                  <div className='text-[#efd372] flex gap-2 items-center mb-[15px]'>
                    <Person />
                    <p className='text-hero-h text-[18px] font-normal'>By Rachi Card</p>
                  </div>
                  <h3 className='text-hero-h text-[25px] font-extrabold'>The Benefits of Vitamin D & How to Get It</h3>
                  <p className='text-[18px] font-normal mt-0.5 mb-[15px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  <Btn bg='bg-[#efd372]' radius="rounded-[16px]" className="w-[220px] h-20">
                    <div className='flex items-center gap-2.5 justify-between'>
                      <p className='mr-1 font-bold text-[20px] text-hero-h'>Shop Now</p>
                      <div className='bg-[#335b6b] p-2 rounded-full flex items-center justify-center'>
                        <Strelka />
                      </div>
                    </div>
                  </Btn>
                </div>
              </div>
              <div className='relative h-[524px] bg-no-repeat bg-center bg-cover rounded-[30px]' style={{ backgroundImage: `url(${section8img2})` }}>
                <h1 className=' absolute font-extrabold text-[25px] w-[82px] h-[82px] rounded-full flex flex-col justify-center top-8 left-[23px] text-center bg-gray-200'>25 <br /> Nov</h1>
                <div className='w-[700px] absolute bottom-[-60px] left-1/2 -translate-x-1/2  px-[57px] pt-12 pb-[60px] rounded-t-[30px] bg-white'>
                  <div className='text-[#efd372] flex gap-2 items-center mb-[15px]'>
                    <Person />
                    <p className='text-hero-h text-[18px] font-normal'>By Rachi Card</p>
                  </div>
                  <h3 className='text-hero-h text-[25px] font-extrabold'>The Benefits of Vitamin D & How to Get It</h3>
                  <p className='text-[18px] font-normal mt-0.5 mb-[15px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  <Btn bg='bg-[#efd372]' radius="rounded-[16px]" className="w-[220px] h-20">
                    <div className='flex items-center gap-2.5 justify-between'>
                      <p className='mr-1 font-bold text-[20px] text-hero-h'>Shop Now</p>
                      <div className='bg-[#335b6b] p-2 rounded-full flex items-center justify-center'>
                        <Strelka />
                      </div>
                    </div>
                  </Btn>
                </div>
              </div>
            </div>
          </div>
          <Subscribe />
        </div>
      </section >

    </>
  )
}
