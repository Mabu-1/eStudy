
import Banner from "./Banner";

import { BiSolidBookAlt } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';

import {  useState } from "react";


const Home = () => {

    const [buttonText, setButtonText] = useState("+");
    const handleButtonClick = () => {
        setButtonText(prevText => (prevText === "+" ? "-" : "+"));
    };

   
    return (
        <div>
            <Banner></Banner>

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
                                    What types of cars do you offer for sale on your website?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p> Our website offers a wide range of cars from various brands, including sedans, SUVs, trucks, and more. We aim to provide options to suit different preferences and needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    Can I finance a car purchase through your website?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, we offer financing options. We work with reputable financial institutions to help you secure a car loan with favorable terms. You can find more information on our financing page.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    Are the cars on your website new or used?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>We offer both new and used cars. You can browse our inventory to find new models with the latest features or explore our used car listings for more budget-friendly options.</p>
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
                                    What sets your website apart from other car dealerships?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p> We take pride in offering a diverse selection of cars, competitive pricing, and exceptional customer service. Our team is knowledgeable and ready to assist you in finding the right vehicle for your needs. We also provide detailed vehicle descriptions and photos to make your online shopping experience informative and convenient.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className=''>
                        <img src="/faq.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;