import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-black h-auto flex-wrap md:flex md:justify-between py-[10%] md:py-[2%]">
            {/* DIV LEFT */}
            <div className="flex justify-center items-center ml-[2%] md:pb-0 pb-[6%]">
                <Link href="/">
                    <Image loading="lazy" width={130} height={30} src="/Logo-accelist.png" alt="logo accelist" />
                </Link>
            </div>
            {/* DIF CENTER */}
            <div className="flex justify-center items-center text-[16px] md:text-[20px] text-white">
                © 2023 Accelist - All Rights Reserved
            </div>
            {/* DIV RIGHT */}
            <div className="flex gap-3 justify-center items-center mr-[2%] md:pt-0 pt-[6%]">
                <Link target="_blank" href="https://www.instagram.com/accelistlenteraindonesia" passHref>
                    <FaInstagram className="text-white" size={22} />
                </Link>
                <Link target="_blank" href="https://www.facebook.com/AccelistLenteraIndonesia" passHref>
                    <FaFacebookF className="text-white" size={22} />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/company/accelist-lentera-indonesia/" passHref>
                    <FaLinkedinIn className="text-white" size={22} />
                </Link>
                <Link target="_blank" href="https://www.youtube.com/channel/UCWODnSdTETw5VsgtlEsy8bQ/videos" passHref>
                    <TfiYoutube className="text-white" size={22} />
                </Link>
            </div>
        </div>
    )
}