'use client';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname()
    return (
        <div className="xl:flex md:justify-center md:items-center bg-transparent opacity-90 w-[100%] fixed md:z-50 hidden" >
            <div className="flex items-center bg-white h-[70px] w-[950px]">
                <div className="flex justify-center items-center bg-[#f90334] w-[200px] h-[70px]">
                    <Link href="/">
                        <Image loading="lazy" width={135} height={40} style={{ width: '135px', height: '40px' }} src="/Logo-aviation.png" alt="logo accelist" />
                    </Link>
                </div>
                <div className="flex w-[750px] justify-between items-center mx-[50px]">
                    <Link href="/">
                        <button
                            className="flex justify-center items-center w-[150px] h-[70px] text-black font-bold text-[16px] hover:duration-[500ms] hover:text-[#f90334]">
                            Home
                        </button>
                        {pathname === '/' && <hr className="h-[5px] bg-[#f90334]" />}
                    </Link>
                    <Link href="/about">
                        <button
                            className="flex justify-center items-center w-[150px] h-[70px] text-black font-bold text-[16px] hover:duration-[500ms] hover:text-[#f90334]">
                            About
                        </button>
                        {pathname === '/about' && <hr className="h-[5px] bg-[#f90334]" />}
                    </Link>
                    <Link href="/products">
                        <button
                            className="flex justify-center items-center w-[150px] h-[70px] text-black font-bold text-[16px] hover:duration-[500ms] hover:text-[#f90334]">
                            Our Products
                        </button>
                        {pathname === '/products' && <hr className="h-[5px] bg-[#f90334]" />}
                    </Link>
                    <Link href="/teams">
                        <button
                            className="flex justify-center items-center w-[150px] h-[70px] text-black font-bold text-[16px] hover:duration-[500ms] hover:text-[#f90334]">
                            Teams
                        </button>
                        {pathname === '/teams' && <hr className="h-[5px] bg-[#f90334]" />}
                    </Link>
                </div>
            </div>
        </div >
    )
}