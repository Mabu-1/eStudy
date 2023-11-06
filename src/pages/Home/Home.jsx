

import { BiSolidBookAlt } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';

import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import { useState } from "react";


const Home = () => {

    const [buttonText, setButtonText] = useState("+");
    const handleButtonClick = () => {
        setButtonText(prevText => (prevText === "+" ? "-" : "+"));
    };


    return (
        <div>

            <div className="flex w-full mx-auto sm:flex-col md:flex-col lg:flex-row bg-blue-400 rounded-lg">
                <div className="flex-1 p-4">
                    <h2 className="text-3xl text-[#2407ff] font-bold">eStudy</h2>
                    <h3 className="text-6xl text-[#d1ff47] font-bold mt-8"> Start Your
                        <br />
                        Journey With
                        <br />
                        Us
                    </h3>
                    <h3 className="text-4xl text-[#0707ff] font-bold mt-9">Online Study</h3>
                    <p className="text-xl text-gray-500 font-bold mt-4">Our platform is a collaborative learning hub designed to enhance your academic journey. Join study groups, share resources, and achieve academic excellence through collective efforts. Connect with peers, submit assignments, and track your progress seamlessly. Elevate your learning experience with us.</p>


                    <div className='flex gap-3 mt-8'>
                        <FaFacebookSquare className='text-[#1d1ddd] text-6xl' />
                        <RiInstagramFill className='text-[#d71ddd] text-6xl' />
                        <FaYoutube className='text-[#dd1d1d] text-6xl' />
                    </div>

                </div>
                <div className=" flex-1">
                    <img className="w-full h-full" src="https://i.ibb.co/ZBrSVt3/4893928.jpg" alt="" />
                </div>
            </div>



            <div className='w-3/4 mx-auto text-center py-20'>
                <div className='flex lg:flex-row flex-col lg:text-center lg:gap-5 gap-8'>
                    <div data-aos="fade-right" className='mx-auto flex flex-col justify-center items-center'>
                        <BiSolidBookAlt className='text-6xl text-[#FFB807]' />
                        <h3 className='text-4xl pb-3 font-semibold'>StudyHub Showcase</h3>
                        <p className='text-slate-600'>Highlighting top study groups, assignments, and study partners in one central hub.</p>
                    </div>
                    <div data-aos="fade-down" className='mx-auto flex flex-col justify-center items-center'>
                        <FaUserFriends className='text-6xl text-[#FFB807]' />
                        <h3 className='text-4xl pb-3 font-semibold'>GroupSuccess Awards</h3>
                        <p className='text-slate-600'>Recognizing outstanding study groups and individuals with achievement awards.</p>
                    </div>
                    <div data-aos="fade-left" className='mx-auto flex flex-col justify-center items-center'>
                        <HiOutlineUserGroup className='text-6xl text-[#FFB807]' />
                        <h3 className='text-4xl pb-3 font-semibold'>Collaboration Corner</h3>
                        <p className='text-slate-600'>Showcasing remarkable study groups and facilitating collaborative learning.</p>
                    </div>
                </div>
            </div>


            <div className='mb-20 mt-[40px]'>
                <h1 className='text-5xl font-bold text-[#d8b865] text-center mb-5'>FAQ Section</h1>
                <div className='flex lg:flex-row flex-col-reverse gap-10 w-11/12 lg:w-3/4 mx-auto'>
                    <div data-aos="fade-right" className='w-11/12 lg:w-3/4 mx-auto flex flex-col gap-5 mt-7'>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        How can I create or join a study group on this platform??
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p> This question can address the process of forming or becoming part of a study group.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        What is the benefit of joining a study group?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Provide guidance on how students can submit their work and assignments through your platform</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        What happens if I have a disagreement or issue within my study group?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Offer information on conflict resolution or support options for resolving issues among group members.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        How can I schedule a test drive or inquire about a specific vehicle?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>To schedule a test drive or inquire about a particular vehicle, simply contact our sales team through the website or by phone. We'll be happy to assist you in arranging a test drive or providing additional information.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        Can I switch or leave my study group if it's not the right fit for me?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p> Clarify the process for changing study groups or leaving one if it's necessary.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default Home;