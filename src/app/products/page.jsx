import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaArrowTurnDown } from "react-icons/fa6";
import { HiPaperAirplane } from "react-icons/hi2";


export default function Products() {
    return (
        <div>
            {/* DIV BANNER */}
            <div className="flex justify-center items-center w-[100%] h-[525px] bg-[url(/products/bg-product-top.jpg)]">
                <div className='flex flex-wrap text-center w-[960px] h-auto items-center text-[16px] md:text-[30px] text-white'>
                    Our products conform to the current year IATA AHM standards and to all related regulations; they also have been proven to be safe and reliable by worldwide ground handling companies and Aircraft MRO.
                </div>
            </div>
            {/* DIV PRODUCTS 1 */}
            <div className='h-auto bg-[#160003] flex'>
                <div className="flex w-[0%] md:w-[60%]">
                    <Image loading="lazy" className="hidden md:block w-[100%] h-auto" sizes="(100vw, 100vh)" src='/products/img-product1.png' width={0} height={0} alt='product1' />
                </div>
                <div className="w-[100%] md:w-[100%] flex flex-col my-[20%] md:my-[5%] mx-[10%] md:mx-[2%]">
                    <div className="flex flex-wrap">
                        <div className='text-center text-white text-[30px]'>
                            Ground Support Equipment
                            <div className='flex flex-wrap justify-center md:justify-start pt-[2px] mb-[35px]'>
                                <hr className='text-center text-white h-[5px] w-[78px]' />
                            </div>
                        </div>
                        <div className='mb-[3%] text-[14px]'>
                            <div className='flex flex-wrap text-justify text-white'>
                                A complete set of mission-critical equipment that is required to service an aircraft while it is on the ground.
                                Most airlines subcontract ground handling services to airports or handling agencies.
                            </div>
                        </div>
                        <div className='mb-[10%] md:mb-[1%] text-[14px]'>
                            <div className='flex flex-wrap text-justify text-white'>
                                The equipment can be divided into these big categories: passenger handling, cargo handling, ramp handling, and catering.
                            </div>
                        </div>
                        <div className='flex flex-col mb-[3%] text-[14px]'>
                            <div className='my-[2%] text-[14px]'>
                                <div className='flex flex-wrap text-justify mb-[5%] md:mb-[1%] text-white font-bold text-[30px] md:text-[14px]'>
                                    Motorized
                                </div>
                                <div className="flex flex-col w-[100%]">
                                    <div className='flex flex-wrap text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        <GoDotFill className="md:mb-[0%] hidden md:block" /><FaArrowTurnDown className="mb-[5px] block md:hidden" /> JBT Container / pallet loader, aircraft towing tractor, self-propelled passenger stair
                                    </div>
                                    <div className='flex flex-wrap text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        <GoDotFill className="md:mb-[0%] hidden md:block" /><FaArrowTurnDown className="mb-[5px] block md:hidden" /> CTV Doll: maintenance lift platform, medical lift truck
                                    </div>
                                    <div className='flex flex-wrap text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        <GoDotFill className="md:mb-[0%] hidden md:block" /><FaArrowTurnDown className="mb-[5px] block md:hidden" /> Design and fabrications: lavatory service truck and potable water truck
                                    </div>
                                </div>
                            </div>
                            <div className='my-[2%] text-[14px]'>
                                <div className='flex flex-wrap text-justify mb-[5%] md:mb-[1%] text-white font-bold text-[30px] md:text-[14px]'>
                                    Non-Motorized
                                </div>
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Aircraft tow bar, jack, hydraulic power unit
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Passenger stair
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Baggage cart
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Dollies
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Conveyor belt loader
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Aicraft ULD and Pallet
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-[2%] text-[14px]'>
                                <div className='flex flex-wrap text-justify mb-[5%] md:mb-[1%] text-white font-bold text-[30px] md:text-[14px]'>
                                    Modification and Repair
                                </div>
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Air starter unit overhaul
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Ground power unit overhaul
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Lavatory service truck modification and repair
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-between">
                                            <div className='flex flex-wrap text-justify text-white mb-[3%] md:mb-[1%]'>
                                                <GoDotFill className="md:mb-[0%] hidden md:block" /><HiPaperAirplane size={12} className="mb-[5px] mr-[5px] block mt-[2.5px] md:hidden" /> Potable water truck modification and repair
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-[3%] text-[14px]'>
                            <div className='flex flex-wrap font-bold text-justify text-white'>
                                GSE Tester: GPU load bank, air starter unit tester, draw Bar pull tester, aircraft jack tester, and many more.
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            {/* DIV PRODUCTS 2 */}
            <div className='h-[500px] bg-[#2d020b] flex'>
                <div className="w-[100%] md:w-[100%] flex flex-col my-[20%] md:my-[5%] mx-[10%] md:mx-[2%]">
                    <div className="flex flex-wrap flex-col">
                        <div className='text-center md:text-end text-white text-[30px]'>
                            Engineering Tools
                            <div className='flex flex-wrap justify-center md:justify-end pt-[2px] mb-[35px]'>
                                <hr className='text-center text-white h-[5px] w-[78px]' />
                            </div>
                        </div>
                        <div className='flex flex-col mb-[3%] text-[14px] w-[100%]'>
                            <div className='flex flex-col my-[2%] text-[14px] w-[100%] text-center md:text-end'>
                                <div className="flex flex-col">
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                        Data loader / downloader unit
                                    </div>
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                        Air data test set
                                    </div>
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                        Bonding meter
                                    </div>
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                        David Clark headset
                                    </div>
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                        Newbow tire inflator, strut service gauges, tire
                                    </div>
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                        Pressure gauges
                                    </div>
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                        Cowl pump, IDG pump
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="flex w-[0%] md:w-[60%]">
                    <Image loading="lazy" className="hidden md:block w-[100%] h-[100%]" sizes="(100vw, 100vh)" src='/products/img-product2.jpg' width={0} height={0} alt='product2' />
                </div>
            </div >
            {/* DIV PRODUCTS 3 */}
            <div className='h-[500px] bg-[#160003] flex'>
                <div className="flex w-[0%] md:w-[60%]">
                    <Image loading="lazy" className="hidden md:block w-[100%] h-[100%]" sizes="(100vw, 100vh)" src='/products/img-product3.jpg' width={0} height={0} alt='product3' />
                </div>
                <div className="w-[100%] md:w-[100%] flex flex-col my-[15%] md:my-[5%] mx-[10%] md:mx-[2%]">
                    <div className="flex flex-wrap flex-col">
                        <div className='text-center md:text-start text-white text-[30px]'>
                            Chemicals and Consumable Parts
                            <div className='flex flex-wrap justify-center md:justify-start pt-[2px] mb-[35px]'>
                                <hr className='text-center text-white h-[5px] w-[78px]' />
                            </div>
                        </div>
                        <div className='flex flex-col mb-[3%] text-[14px]'>
                            <div className='my-[2%] text-[14px]'>
                                <div className="flex flex-col w-[100%]">
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        Aircraft cleaners
                                    </div>
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        Lavatory sanitizer (SaniPak)
                                    </div>
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        Aircraft seat leather treatments
                                    </div>
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        Engine oil
                                    </div>
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        Skydrol hydraulic fluid
                                    </div>
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        3M tapes
                                    </div>
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        Filters
                                    </div>
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        Lamps and bulbs
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            {/* DIV TESTIMONIALS IN A NUTSHELL */}
            <div className="h-auto bg-[#3d020f] flex flex-wrap justify-center">
                <div className="text-center py-10 mx-[10%] md:mx-auto">
                    <div>Testimonials</div>
                    <div className="text-[30px] w-[100%] mx-auto leading-normal font-bold mb-[5%]">
                        Read What Others Have to Say
                    </div>
                    <div className="flex flex-col md:flex-row max-w-5xl gap-8 group">
                        <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl">
                            <Image loading="lazy" className="mx-auto rounded-full" src='/products/testimonee1.jpg' width={100} height={100} alt='testimonee1' />
                            <div className="uppercase text-xl font-bold">Captain James, Chief Pilot at SkyRise Airlines</div>
                            <div className="text-sm leading-7 my-3 font-light opacity-50">"Accelist's ground support equipment ensures efficient operations. Their commitment to quality solidifies them as our trusted partner."</div>
                        </div>
                        <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl">
                            <Image loading="lazy" className="mx-auto rounded-full" src='/products/testimonee3.jpg' width={100} height={100} alt='testimonee1' />
                            <div className="uppercase text-xl font-bold">Maria, Lead Maintenance Engineer at AeroTech Solutions</div>
                            <div className="text-sm leading-7 my-3 font-light opacity-50">Accelist Aviation's precision-engineered tools meet industry standards with reliability, elevating our maintenance procedures to new heights."</div>
                        </div>
                        <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl">
                            <Image loading="lazy" className="mx-auto rounded-full" src='/products/testimonee2.jpg' width={100} height={100} alt='testimonee1' />
                            <div className="uppercase text-xl font-bold">Ahmed, Maintenance Supervisor at GlobalJet Services</div>
                            <div className="text-sm leading-7 my-3 font-light opacity-50">"Accelist Aviation's chemicals and parts consistently deliver quality and reliability, maintaining peak performance and safety across our fleet."</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}