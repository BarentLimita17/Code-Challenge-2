'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Teams() {
    const [teams, setTeams] = useState([]);

    const onFetchTeams = async () => {
        const totalRoles = 7
        const response = await axios.get(`https://randomuser.me/api/?results=${totalRoles}`);
        const roles = [
            {
                title: "CEO",
                expertise: "Strategic Leadership, Aviation Industry Experience",
                description: "With over three decades of experience in the aviation industry, serves as the visionary leader guiding Accelist Aviation towards success."
            },
            {
                title: "COO",
                expertise: "Operations Management, Process Optimization",
                description: "Oversees the day-to-day operations of Accelist Aviation, ensuring seamless delivery of products and services through meticulous attention to detail and focus on efficiency."
            },
            {
                title: "CSO",
                expertise: "Sales Strategy, Client Relationship Management",
                description: "Leads Accelist Aviation's sales team, driving revenue growth and market expansion through dynamic sales strategies and strong client relationships."
            },
            {
                title: "CFO",
                expertise: "Financial Management, Strategic Planning",
                description: "Oversees all financial aspects of Accelist Aviation, ensuring fiscal health and stability through expertise in financial management and strategic planning."
            },
            {
                title: "CMO",
                expertise: "Marketing Strategy, Brand Management",
                description: "Leads Accelist Aviation's marketing efforts, enhancing brand awareness and market presence through impactful marketing strategies rooted in consumer behavior and market trends."
            },
            {
                title: "CTO",
                expertise: "Technology Innovation, Digital Transformation",
                description: "Drives Accelist Aviation's technological initiatives, ensuring adoption of cutting-edge solutions that enhance operational efficiency and customer experience."
            },
            {
                title: "CSO",
                expertise: "Strategic Planning, Business Development",
                description: "Leads Accelist Aviation's strategic initiatives, shaping the company's growth trajectory through strategic vision and industry expertise."
            }
        ]
        for (let i = 0; i < totalRoles; i++) {
            response.data.results[i].role = roles[i]
        }
        setTeams(response.data.results);
    }

    useEffect(() => {
        onFetchTeams();
    }, [])

    return (
        <div>
            {/* DIV BANNER */}
            <div className='w-[100%] h-auto bg-[#1a1a1a] flex justify-center pt-[10%] md:pt-[5%]'>
                <div className='flex flex-wrap justify-center py-[10%] px-[20%] bg-black border'>
                    <div className='text-center text-white text-[50px] md:text-[70px] font-bold'>
                        Meet The ACCELITEs
                        <div className='flex flex-wrap justify-center pt-[2px]'>
                            <hr className='text-center text-white h-[5px] w-[78px]' />
                        </div>
                    </div>
                </div>
            </div>
            {/* DIV TEAM MEMBERS */}
            <div className="h-auto bg-[#1a1a1a] flex justify-center">
                <div className="text-center py-10 mx-[10%] md:mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-auto gap-[100px]">
                        {teams.map((team, index) => (
                            <div key={index} className="flex h-auto justify-center rounded-xl bg-[#160003] group">
                                <div className="group h-96 w-96">
                                    <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                        <div className="absolute inset-0 flex items-center justify-center text-[70px] text-white">
                                            <Image loading="lazy" src={team.picture.large} alt="team image" className="h-full w-full rounded-xl object-cover brightness-90" sizes="100vw" width={0} height={0} style={{ width: '100%', height: '100%' }} />
                                        </div>
                                        <div className="absolute inset-0 h-full w-full rounded-xl bg-[#160003]/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                            <div className="flex min-h-full flex-col items-center justify-center gap-2">
                                                <Image loading="lazy" src={team.picture.large} alt="team image" className="h-full w-full rounded-xl object-cover" sizes="100vw" width={0} height={0} style={{ width: '120px', height: '120px' }} />
                                                <div className="text-3xl font-bold">
                                                    {team.name.first} - {team.role.title}
                                                </div>
                                                <div className="text-[14px] font-bold">
                                                    {team.role.expertise}
                                                </div>
                                                <div className="text-base">
                                                    {team.phone}
                                                </div>
                                                <div className="text-base">
                                                    {team.email}
                                                </div>
                                                <div className="flex justify-around w-[70%]">
                                                    <FaInstagram className="text-white" size={22} />
                                                    <FaFacebookF className="text-white" size={22} />
                                                    <FaLinkedinIn className="text-white" size={22} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}