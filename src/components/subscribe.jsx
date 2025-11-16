import section8img3 from '../assets/sektion8/Photo.jpg'
import { Btn } from './btn'

export const Subscribe = () => {
    return (
        <>
            <div className=' flex items-center justify-between px-[70px] h-[323px] rounded-[30px] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${section8img3})` }}>
                <h2 className='text-white w-[357px] text-[50px] font-extrabold'>Subscribe to our Newsletter</h2>
                <div className='flex gap-1.5'>
                    <input className='bg-white  w-[350px] p-[30px] rounded-2xl ' type="text" placeholder='Your Email Address' />
                    <Btn bg='bg-hero-h' padding='px-[64px]' radius="rounded-[16px]" className="w-[220px] h-20">
                        <div className='flex items-center gap-2.5 justify-between'>
                            <p className='font-bold text-[20px] text-white'>Subscribe</p>
                        </div>
                    </Btn>
                </div>
            </div>
        </>
    )
}
