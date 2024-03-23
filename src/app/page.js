import Image from "next/image";
import LearnMore from "~/components/learn-more";
import Link from "next/link";
import { GiBlackBook } from "react-icons/gi"
import { FaPeopleGroup } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import FourStars from "~/components/4stars";
import FiveStars from "~/components/5stars";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="">
      {/* DIV HERO SECTION */}
      <div className="flex flex-col items-center w-[100%] h-auto bg-[url(/home/bg-home-top.webp)] bg-cover">
        <div className='flex flex-wrap justify-center text-[16px] md:text-[30px] text-center w-[100%] md:w-[60%] text-white mt-[30%] md:mt-[15%]'>
          Our vision is to be an agile enterprise that answers to market needs and demands in diversified industries.
        </div>
        {/* <Image loading="lazy" src={"/"} */}
        <div className='flex flex-wrap justify-center pt-[10px] mb-[20px]'>
          <hr className='text-center text-white h-[5px] w-[100px]' />
        </div>
        <div className='flex flex-wrap text-center justify-center w-[100%] h-auto text-[12px] md:text-[14px] text-white mb-[20px]'>
          The aviation industry is the key enabler for the society to rapidly move anywhere in our globalized Earth.
        </div>
        <div>
          <Link href="/about">
            <LearnMore />
          </Link>
        </div>
        {/* DIV PRODUCTS IMAGE */}
        <div className="flex h-auto items-center justify-center bg-transparent mt-[10%] mb-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* PRODUCT 1 */}
            <div className="group relative items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow">
              <div className="h-[175px] w-[175px] md:h-[384px] md:w-[288px]">
                <Image
                  src="/home/bg-product1.webp" priority alt="Product1 image" className="h-full w-full object-cover group-hover:rotate-[10deg] group-hover:scale-125 transition-transform duration-1000" sizes="100vw" width={0} height={0} style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[115%] md:translate-y-[45%] group-hover:translate-y-[105px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="text-[20px] font-bold text-white">Ground Support Equipment</div>
                <div className="text-italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  A complete set of mission-critical equipment
                </div>
              </div>
            </div>
            {/* PRODUCT 2 */}
            <div className="group relative items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow">
              <div className="h-[175px] w-[175px] md:h-[384px] md:w-[288px]">
                <Image
                  src="/home/bg-product2.webp" priority alt="Product2 image" className="h-full w-full object-cover group-hover:rotate-[10deg] group-hover:scale-125 transition-transform duration-1000" sizes="100vw" width={0} height={0} style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[110%] md:translate-y-[50%] group-hover:translate-y-[120px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="text-[20px] font-bold text-white">Engineering Tools</div>
                <div className="text-italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Tools and equipment that are essential for maintenances
                </div>
              </div>
            </div>
            {/* PRODUCT 3 */}
            <div className="group relative items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow">
              <div className="h-[175px] w-[175px] md:h-[384px] md:w-[288px]">
                <Image
                  src="/home/bg-product3.webp" priority alt="Product3 image" className="h-full w-full object-cover group-hover:rotate-[10deg] group-hover:scale-125 transition-transform duration-1000" sizes="100vw" width={0} height={0} style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[140%] md:translate-y-[50%] group-hover:translate-y-[130px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="text-[20px] font-bold text-white">Chemicals and Consumable Parts</div>
                <div className="text-italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Aircraft cleaning chemicals, Engine oil, Skydrol hydraulic fluid, and many more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center text-white text-center text-xl w-full h-auto mb-[5%]">
          <Link className="gap-2 md:gap-5 flex flex-wrap justify-center items-center" href="/products">
            More details about our products<LearnMore />
          </Link>
        </div>
      </div>
      {/* DIV QUOTE */}
      <div className="flex flex-col justify-center items-center w-[100%] h-[490px] bg-[url(/home/bg-quote.webp)]" >
        <Image loading="lazy"
          src="/home/icon-quote.png" alt="Quote icon" width={120} height={80} style={{ width: '100px', height: '100px' }}
        />
        <div className='flex flex-wrap text-center justify-center w-[60%] h-auto md:w-[60%] text-[20px] mt-[10%] md:mt-[20px] md:text-[40px] text-white mb-[20px]'>
          It is possible to fly without motors, but not without knowledge and skill.
        </div>
        <div className='flex flex-wrap justify-center pt-[10px] mb-[20px]'>
          <hr className='text-center text-white h-[5px] w-[100px]' />
        </div>
        <div className="text-[20px] text-[#f90334] font-bold">
          Wilbur Wright
        </div>
        <div className="text-[16px] text-white">
          Inventor of Aeroplanes
        </div>
      </div>
      {/* DIV COMPANY OVERVIEW */}
      <div className='flex flex-wrap justify-center py-[10%] md:py-[5%] px-[20%] bg-[#3d020f] contrast-125'>
        <div className='text-center text-white text-[30px]'>
          Overview
          <div className='flex flex-wrap justify-center pt-[2px] mb-[35px]'>
            <hr className='text-center text-white h-[5px] w-[78px]' />
          </div>
        </div>
        <div className='mb-[3%] text-[12px] md:text-[16px]'>
          <div className='flex flex-wrap text-justify text-white'>
            <div className="flex gap-5">
              <div>
                <Link className="flex items-center gap-2" href="/about#history">
                  <GiBlackBook size={40} className="text-[#f90334] hover:scale-125 hover:text-black duration-500" />
                  <div className="flex items-center justify-start text-red-400 font-bold gap-2">
                    More about History <FaArrowRightLong />
                  </div>
                </Link>
              </div>
            </div>
            Accelist Aviation's journey began with a vision to revolutionize ground handling operations and aircraft maintenance. Since its inception, the company has remained committed to innovation, quality, and customer satisfaction. With a rich history of 16 years, Accelist Aviation has continually evolved to meet the changing needs of the aviation sector, solidifying its reputation as a leader in the field.
          </div>
        </div>
        <div className='mb-[3%] text-[12px] md:text-[16px]'>
          <div className='flex flex-wrap justify-end text-justify text-white'>
            <div className="flex gap-5">
              <Link className="flex items-center gap-2" href="/teams">
                <div className="flex items-center justify-start text-red-400 font-bold gap-2">
                  <FaArrowLeftLong /> More about Teams
                </div>
                <FaPeopleGroup size={40} className="text-[#f90334] hover:scale-125 hover:text-black duration-500" />
              </Link>
            </div>
            At the heart of Accelist Aviation's success is its dedicated team of professionals, comprising industry experts, engineers, technicians, and customer service specialists. Fueled by passion and expertise, the team at Accelist works tirelessly to deliver cutting-edge solutions that drive efficiency, safety, and operational excellence for their clients.
          </div>
        </div>
        <div className='mb-[3%] text-[12px] md:text-[16px]'>
          <div className='flex flex-wrap text-justify text-white'>
            <div className="flex gap-5">
              <div>
                <Link className="flex items-center gap-2" href="/about#about">
                  <MdWork size={40} className="text-[#f90334] hover:scale-125 hover:text-black duration-500" />
                  <div className="flex items-center justify-start text-red-400 font-bold gap-2">
                    More About our Cultures <FaArrowRightLong />
                  </div>
                </Link>
              </div>
            </div>
            Accelist Aviation fosters a culture of collaboration, innovation, and integrity. With a focus on teamwork and continuous improvement, the company encourages its employees to push the boundaries of possibility and strive for excellence in everything they do.
          </div>
        </div>
      </div>
      {/* DIV COMPANY TESTIMONIALS */}
      <div className="h-auto bg-black flex flex-wrap justify-center">
        <div className="text-center py-10 mx-[10%] md:mx-auto">
          <div className='text-center text-white text-[30px]'>
            Company Testimonials
            <div className='flex flex-wrap justify-center pt-[5px] mb-[35px]'>
              <hr className='text-center text-white h-[5px] w-[78px]' />
            </div>
          </div>
          <div className="flex flex-col max-w-5xl gap-8 group contrast-150">
            <div className="bg-white/5 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-normal">
              <FiveStars />
              <Image loading="lazy" className="mx-auto rounded-full" src='/home/skyrise.jpg' width={100} height={100} alt='skyrise' />
              <div className="uppercase text-xl font-bold text-white">SkyRise Airlines</div>
              <div className="text-sm leading-7 my-3 font-medium text-white">"At SkyRise Airlines, Accelist Aviation is our go-to partner for seamless ground operations. Their top-notch ground support equipment, including aircraft towing tractors and self-propelled passenger stairs, ensures efficient aircraft handling. Accelist's commitment to quality and reliability has earned our trust, making them an integral part of our operations."</div>
            </div>
            <div className="bg-white/5 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-normal">
              <FourStars />
              <Image loading="lazy" className="mx-auto rounded-full" src='/home/aerotech.jpg' width={100} height={100} alt='aerotech' />
              <div className="uppercase text-xl font-bold text-white">AeroTech Solutions</div>
              <div className="text-sm leading-7 my-3 font-medium text-white">"AeroTech Solutions relies on Accelist Aviation for precision-engineered tools that elevate our maintenance procedures. Their data loaders and testing equipment meet industry standards, streamlining our operations and enhancing safety. Accelist's tools are reliable and durable, contributing to our success."</div>
            </div>
            <div className="bg-white/5 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-normal">
              <FiveStars />
              <Image loading="lazy" className="mx-auto rounded-full" src='/home/globaljet.png' width={100} height={100} alt='globaljet' />
              <div className="uppercase text-xl font-bold text-white">GlobalJet Services</div>
              <div className="text-sm leading-7 my-3 font-medium text-white">"Accelist Aviation's chemicals and parts are essential for maintaining peak performance across our fleet at GlobalJet Services. Their products, from cleaners to filters, consistently deliver reliability. Accelist's dedication to quality ensures our aircraft operate at optimal levels, making them a trusted partner."</div>
            </div>
            <div className="bg-white/5 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-normal">
              <FourStars />
              <Image loading="lazy" className="mx-auto rounded-full" src='/home/horizon.png' width={100} height={100} alt='horizon' />
              <div className="uppercase text-xl font-bold text-white">Horizon Airways</div>
              <div className="text-sm leading-7 my-3 font-medium text-white">"At Horizon Airways, Accelist Aviation plays a vital role in our commitment to exceptional service and safety. Their streamlined operations and innovative solutions contribute to our efficiency. Accelist's excellence in ground support equipment and maintenance tools enhances our operations, making them invaluable partners in the aviation industry."</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
