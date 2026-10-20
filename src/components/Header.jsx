import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header flex justify-between bg-[#4D96FF] p-4 font-[Arial, sans-serif] font-bold max-w-300 items-center mx-auto rounded-[100px] cursor-pointer mt-4'>
            <h1 className='titulo text-white text-[2rem] mx-0 font-[Arial, sans-serif] ml-4'>PetShop</h1>
            <nav>
                <ul className='lista-ordenada list-none mx-0 flex font-[Arial, sans-serif] font-bold justify-between items-center p-[1rem 2rem] gap-7.5'>
                    <li className='lista-item decoration-none text-white hover:text-[#224427] transition duration-500'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='lista-item decoration-none text-white hover:text-[#224427] transition duration-500'>
                        <Link to='/produtos'>Produtos</Link>
                    </li>
                    <li className='lista-item decoration-none text-white hover:text-[#224427] transition duration-500'>
                        <Link to='/sobre'>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header