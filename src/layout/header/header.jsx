import { Link } from 'react-router-dom'
import logo from '../../assets/header/logo.svg'
import { Search } from '../../assets/header/search'
import { Basket } from '../../assets/header/basket'
import { Btn } from '../../components/btn'

export const Header = () => {
    return (
        <div className='py-[69px]'>
            <div className='container'>
                <div className='flex justify-between items-center'>

                    <div className='flex gap-[150px] items-center'>
                        <img src={logo} alt="logo" />

                        <ul className='flex gap-10'>
                            <li className='text-[20px] font-bold text-link'><Link to={'/'}>Home</Link></li>
                            <li className='text-[20px] font-bold text-link'><Link to={'/about'}>About</Link></li>
                            <li className='text-[20px] font-bold text-link'><Link to={'/'}>Pages</Link></li>
                            <li className='text-[20px] font-bold text-link'><Link to={'/shop'}>Shop</Link></li>
                            <li className='text-[20px] font-bold text-link'><Link to={'/'}>Projects</Link></li>
                            <li className='text-[20px] font-bold text-link'><Link to={'/'}>News</Link></li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-[18px]'>

                        <div className='flex w-[360px] bg-gray-100 p-[5px] rounded-full'>
                            <input 
                                type="text" 
                                className='w-full px-4 outline-none'
                                placeholder='Search...'
                            />
                            <Btn>
                                <Search />
                            </Btn>
                        </div>

                        <div className='flex items-center gap-[18px] border border-gray-300 rounded-full p-[5px]'>
                            <Btn bg='bg-[#274c5b]'>
                                <Basket />
                            </Btn>

                            <p className='text-[18px] font-semibold'>Cart (0)</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
