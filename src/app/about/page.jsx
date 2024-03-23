import Image from "next/image";

export default function About() {
    return (
        <div>
            {/* DIV BANNER */}
            <div className="flex justify-center items-center w-[100%] h-[525px] bg-[url(/about/bg-about-top.jpg)]">
                <div className='flex flex-wrap text-center w-[960px] h-auto items-center text-[16px] md:text-[30px] text-white'>
                    Our core values, wide networks, and years of experiences form a solid foundation for aiding our customers to achieve Safety, Reliability, and Cost Efficiency.
                </div>
            </div>
            {/* DIV ABOUT US */}
            <div id="about" className='w-[100%] h-auto bg-[#160003] flex justify-center'>
                <div className='flex flex-wrap justify-center py-[10%] md:py-[5%] px-[20%]'>
                    <div className='text-center text-white text-[30px]'>
                        About Us
                        <div className='flex flex-wrap justify-center pt-[2px] mb-[35px]'>
                            <hr className='text-center text-white h-[5px] w-[78px]' />
                        </div>
                    </div>
                    <div className='mb-[3%] text-[12px] md:text-[16px]'>
                        <div className='flex flex-wrap text-justify text-white'>
                            In present time, the aviation industry asserts the highest level of services for competing handler companies. However, that level of expectation is difficult to achieve when the Ground Support Equipment selection focuses solely on the initial purchase cost instead of the Total Cost of Ownership.
                        </div>
                    </div>
                    <div className='mb-[3%] text-[12px] md:text-[16px]'>
                        <div className='flex flex-wrap  text-justify text-white'>
                            Hidden costs such as: equipment breakdowns, unpredictable corrective maintenances, third-party liabilities, and short equipment lifespans become dangerous pitfalls when making decisions for an investment and may cause opportunity losses.
                        </div>
                    </div>
                    <div className='mb-[3%] text-[12px] md:text-[16px]'>
                        <div className='flex flex-wrap  text-justify text-white'>
                            Accelist and its partners are committed to formulate and offer solutions that help our clients to answer challenges that require quality, operational safety, and durability; with the end goals of increasing their long-term revenues and reducing their costs.
                        </div>
                    </div>
                    <div className='w-[400px] h-[400px] mt-[50px] md:w-[600px] md:h-[625px]'>
                        <Image loading="lazy"
                            src="/about/About-pic.png"
                            alt="About-flow"
                            width={600}
                            height={615}
                        />
                    </div>
                </div>
            </div>
            {/* DIV HISTORY */}
            <div id="history" className='w-[100%] h-auto bg-[#3d020f] flex justify-center'>
                <div className='flex flex-wrap justify-center py-[10%] md:py-[5%] px-[20%]'>
                    <div className='text-center text-white text-[30px]'>
                        Our History
                        <div className='flex flex-wrap justify-center pt-[2px] mb-[35px]'>
                            <hr className='text-center text-white h-[5px] w-[78px]' />
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
                        {/* STACK 1 */}
                        <div className="col-span-4 w-full h-full">
                            <div className="w-full h-full bg-black opacity-80 rounded-md p-2 md:pl-4">
                                <div className="text-white text-[10px] md:text-xl py-2">2008 - Setting the Stage</div>
                                <div className="text-gray-100 hidden md:block text-sm">Accelist Aviation is founded in Los Angeles, California, with a vision to revolutionize the aviation industry through innovation and superior service. </div>
                            </div>
                        </div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-[#f3f3f3]"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-black opacity-80 z-10 text-white text-center">1</div>
                        </div>
                        <div className="col-span-4 w-full h-full"></div>
                        {/* STACK 2 */}
                        <div className="col-span-4 w-full h-full"></div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-[#f3f3f3]"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-black opacity-80 z-10 text-white text-center">2</div>
                        </div>
                        <div className="col-span-4 w-full h-full">
                            <div className="w-full h-full bg-black opacity-80 rounded-md p-2 md:pl-4">
                                <div className="text-white text-[10px] md:text-xl py-2">2010 - Inaugural Product Launch</div>
                                <div className="text-gray-100 hidden md:block text-sm">Accelist Aviation launches its first line of aviation products, setting a new standard for quality and reliability in the industry.</div>
                            </div>
                        </div>
                        {/* STACK 3 */}
                        <div className="col-span-4 w-full h-full">
                            <div className="w-full h-full bg-black opacity-80 rounded-md p-2 md:pl-4">
                                <div className="text-white text-[10px] md:text-xl py-2">2012 - Expansion Beyond Borders</div>
                                <div className="text-gray-100 hidden md:block text-sm">Responding to growing demand, Accelist Aviation expands its operations internationally, establishing distribution channels in key global markets.</div>
                            </div>
                        </div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-[#f3f3f3]"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-black opacity-80 z-10 text-white text-center">3</div>
                        </div>
                        <div className="col-span-4 w-full h-full"></div>
                        {/* STACK 4 */}
                        <div className="col-span-4 w-full h-full"></div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-[#f3f3f3]"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-black opacity-80 z-10 text-white text-center">4</div>
                        </div>
                        <div className="col-span-4 w-full h-full">
                            <div className="w-full h-full bg-black opacity-80 rounded-md p-2 md:pl-4">
                                <div className="text-white text-[10px] md:text-xl py-2">2015 - Strategic Partners Formed</div>
                                <div className="text-gray-100 hidden md:block text-sm">Accelist Aviation forms strategic partnerships with leading manufacturers, further enhancing its product offerings and capabilities.</div>
                            </div>
                        </div>
                        {/* STACK 5 */}
                        <div className="col-span-4 w-full h-full">
                            <div className="w-full h-full bg-black opacity-80 rounded-md p-2 md:pl-4">
                                <div className="text-white text-[10px] md:text-xl py-2">2018 - Milestone Achieved</div>
                                <div className="text-gray-100 hidden md:block text-sm">Accelist Aviation celebrates a significant milestone, reaching a landmark number of satisfied customers served.</div>
                            </div>
                        </div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-[#f3f3f3]"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-black opacity-80 z-10 text-white text-center">5</div>
                        </div>
                        <div className="col-span-4 w-full h-full"></div>
                        {/* STACK 6 */}
                        <div className="col-span-4 w-full h-full"></div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-[#f3f3f3]"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-black opacity-80 z-10 text-white text-center">6</div>
                        </div>
                        <div className="col-span-4 w-full h-full">
                            <div className="w-full h-full bg-black opacity-80 rounded-md p-2 md:pl-4">
                                <div className="text-white text-[10px] md:text-xl py-2">2020 - Digital Transform</div>
                                <div className="text-gray-100 hidden md:block text-sm">Recognizing the importance of digitalization, Accelist Aviation undergoes a digital transformation, enhancing its online presence and customer experience.</div>
                            </div>
                        </div>
                        {/* STACK 7 */}
                        <div className="col-span-4 w-full h-full">
                            <div className="w-full h-full bg-black opacity-80 rounded-md p-2 md:pl-4">
                                <div className="text-white text-[10px] md:text-xl py-2">2022 - Innovation Takes Flight</div>
                                <div className="text-gray-100 hidden md:block text-sm">Accelist Aviation introduces groundbreaking innovations in aviation supply, leveraging cutting-edge technology to develop next-generation products.</div>
                            </div>
                        </div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-[#f3f3f3]"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-black opacity-80 z-10 text-white text-center">7</div>
                        </div>
                        <div className="col-span-4 w-full h-full"></div>
                        {/* STACK 8 */}
                        <div className="col-span-4 w-full h-full"></div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-[#f3f3f3]"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-black opacity-80 z-10 text-white text-center">8</div>
                        </div>
                        <div className="col-span-4 w-full h-full">
                            <div className="w-full h-full bg-black opacity-80 rounded-md p-2 md:pl-4">
                                <div className="text-white text-[10px] md:text-xl py-2">2024 - Looking Ahead</div>
                                <div className="text-gray-100 hidden md:block text-sm">As Accelist Aviation continues to soar to new heights, the company remains steadfast in its commitment to innovation, quality, and customer satisfaction. With a talented team and a culture of excellence guiding its trajectory, Accelist is poised to shape the future of aviation supply for years to come.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* DIV KEY PEOPLE */}
            <div className="h-auto bg-[#3d020f] flex flex-wrap justify-center border-[5px] border-[#f3f3f3] contrast-125">
                <div className="text-center py-10 mx-[10%] md:mx-auto text-[30px] contrast-150">
                    <div className="text-white">
                        KEY PEOPLE
                        <div className='flex flex-wrap justify-center pt-[2px] mb-[35px]'>
                            <hr className='text-center text-white h-[5px] w-[78px]' />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row max-w-5xl gap-8 group">
                        <div className="bg-red-900 text-black hover:text-white hover:bg-black group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl">
                            <Image loading="lazy" className="mx-auto rounded-full" src='/about/Procurement.jpg' width={100} height={100} alt='head of precrument' />
                            <div className="uppercase text-xl font-bold text-white">Nathan Anderson - Head of Procurement</div>
                            <div className="text-sm leading-7 my-3 font-medium opacity-50 text-white">Manages the purchasing process, sourcing materials and services needed for operations at the best possible value while maintaining quality and reliability</div>
                        </div>
                        <div className="bg-red-900 text-black hover:text-white hover:bg-black group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl">
                            <Image loading="lazy" className="mx-auto rounded-full" src='/about/QA.jpg' width={100} height={100} alt='QA' />
                            <div className="uppercase text-xl font-bold text-white">Isabella Garcia - Head of Quality Assurance</div>
                            <div className="text-sm leading-7 my-3 font-medium opacity-50 text-white">Oversees the quality of our products and services, ensuring they meet high standards and comply with regulations to maintain customer satisfaction and trust.</div>
                        </div>
                        <div className="bg-red-900 text-black hover:text-white hover:bg-black group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl">
                            <Image loading="lazy" className="mx-auto rounded-full" src='/about/HR.jpg' width={100} height={100} alt='HR' />
                            <div className="uppercase text-xl font-bold text-white">Hanin Martinez - Head of Human Resources</div>
                            <div className="text-sm leading-7 my-3 font-medium opacity-50 text-white">Manages all aspects of employee relations, from recruitment and training to ensuring a positive work environment, supporting the growth and well-being of our staff.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* DIV OUR EXPERTISE */}
            <div className='flex-wrap flex-col w-[100%] h-auto bg-[#2d020b] flex justify-center'>
                <div className=' py-[10%] md:py-[5%] px-[20%]'>
                    <div className='flex justify-center'>
                        <div className='text-center text-white text-[30px]'>
                            Our Expertise
                            <div className='flex flex-wrap justify-center pt-[2px] mb-[35px]'>
                                <hr className='text-center text-white h-[5px] w-[78px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-sm md:text-xl flex justify-between'>
                            <div className='text-white'>
                                International Business
                            </div>
                            <div className='text-white'>
                                95%
                            </div>
                        </div>
                        <div className='w-[100%] h-[30px] mt-[5px] mb-[20px] border-red-600 border-2 bg-gray-200'>
                            <span className='skillsbar text-sm md:text-xl text-center inline-block w-[95%] h-[100%] bg-[#f90237]'></span>
                        </div>
                        <div className='text-sm md:text-xl flex justify-between'>
                            <div className='text-white'>
                                Maintenance Services
                            </div>
                            <div className='text-white'>
                                90%
                            </div>
                        </div>
                        <div className='w-[100%] h-[30px] mt-[5px] mb-[20px] border-red-600 border-2 bg-gray-200'>
                            <span className='skillsbar text-sm md:text-xl text-center inline-block w-[90%] h-[100%] bg-[#f90237]'></span>
                        </div>
                        <div className='text-sm md:text-xl flex justify-between'>
                            <div className='text-white'>
                                Design Engineering
                            </div>
                            <div className='text-white'>
                                95%
                            </div>
                        </div>
                        <div className='w-[100%] h-[30px] mt-[5px] mb-[20px] border-red-600 border-2 bg-gray-200'>
                            <span className='skillsbar text-sm md:text-xl text-center inline-block w-[95%] h-[100%] bg-[#f90237]'></span>
                        </div>
                        <div className='text-sm md:text-xl flex justify-between'>
                            <div className='text-white'>
                                General Supply
                            </div>
                            <div className='text-white'>
                                80%
                            </div>
                        </div>
                        <div className='w-[100%] h-[30px] mt-[5px] mb-[20px] border-red-600 border-2 bg-gray-200'>
                            <span className='skillsbar text-sm md:text-xl text-center inline-block w-[80%] h-[100%] bg-[#f90237]'></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* DIV OUR PARTNERS */}
            <div className='flex-wrap flex-col w-[100%] h-auto bg-[#160003] flex justify-center'>
                <div className=' py-[10%] md:pt-[5%] md:pb-[1%] px-[20%]'>
                    <div className='flex justify-center'>
                        <div className='text-center text-white text-[30px]'>
                            Our Partners
                            <div className='flex flex-wrap justify-center pt-[2px] mb-[35px]'>
                                <hr className='text-center text-white h-[5px] w-[78px]' />
                            </div>
                        </div>
                    </div>
                    <div className='mx-[10%] flex flex-wrap justify-between'>
                        <div>
                            <Image loading="lazy"
                                src="/about/About-jbt.png"
                                alt="JBT-About"
                                width={300}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image loading="lazy"
                                src="/about/About-langa.png"
                                alt="Langa-About"
                                width={300}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}