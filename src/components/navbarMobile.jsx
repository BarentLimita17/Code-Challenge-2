'use client'
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavbarMobile = () => {
    return (
        <div className="h-[70px] w-full bg-[#191e24] z-50 flex justify-center items-center xl:hidden fixed">
            <details className="dropdown">
                <summary className="m-1 btn">
                    <CiMenuBurger size={40} className="text-white text-3xl cursor-pointer" />
                </summary>
                <ul className="p-2 pt-[20%] shadow menu dropdown-content z-[1] bg-[#191e24] rounded-box w-[100vw] text-[#f3f3f3]">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <div>
                            <Link href="/about">
                                About
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link href="/products">
                                Our Products
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link href="/teams">
                                Teams
                            </Link>
                        </div>
                    </li>
                </ul>
            </details>
            <div className="flex justify-center items-center bg-[#191e24] w-full h-[70px]">
                <Link href="/">
                    <Image loading="lazy" width={150} height={70} style={{ width: '135px', height: '50px' }} src="/Logo-aviation.png" alt="logo accelist" />
                </Link>
            </div>
        </div >
    )
}

export default NavbarMobile