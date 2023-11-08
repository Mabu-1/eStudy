
import {  MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
    

    return (
        <div>
            <div className='h-fit' style={{ backgroundImage: "url('https://i.ibb.co/QpfMzhR/flat-lay-table-with-copy-space.jpg')" }}>
                <div className='bg-no-repeat bg-center bg-cover text-white p-8'>
                    <div className='flex justify-between flex-col gap-20 lg:flex-row w-3/4 mx-auto'>
                        <div className=''>
                            <div className='flex items-center '>
                                <img className='w-[130px] rounded-xl ' src="https://i.ibb.co/dM4v1Ld/profile.png" alt="" />
                            </div>
                            <div>
                                <ul className='mt-[-30px] flex flex-col gap-2'>
                                   
                                    <li className='flex gap-2 items-center'><BsTelephoneFill className='text-[#2cae74] text-2xl' /><p>+8 (800) 238 9997 (admin)</p></li>
                                    <li className='flex gap-2 items- center'><MdEmail className='text-[#2cae74] text-2xl' /><p>estudy77@gmail.com</p></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-4xl mt-5 mb-8 font-semibold text-[#2cae74]'>Pages</h2>
                           <li><Link className="text-blue-300 text-lg font-bold" to='/assignments'>Assignments</Link></li>
                           <li><Link className="text-blue-300 text-lg font-bold" to='/create'>Create Assignments</Link></li>
                           <li><Link className="text-blue-300 text-lg font-bold" to='/submissions'>Submissions</Link></li>
                           <li><Link className="text-blue-300 text-lg font-bold" to='/myassignment'>My Assignments</Link></li>
                           <li><Link className="text-blue-300 text-lg font-bold" to='/login'>login</Link></li>
                           <li><Link className="text-blue-300 text-lg font-bold" to='/register'>Register</Link></li>
                        </div>
                        <div>
                            <h2 className='font-semibold text-4xl  mt-5 mb-3 text-[#2cae74]'>Social Links</h2>
                            <p>You can find us from social links given below</p>
                            <div className='flex gap-3 mt-8'>
                                <FaFacebookSquare className='text-[#1d1ddd] text-4xl' />
                                <RiInstagramFill className='text-[#d71ddd] text-4xl' />
                                <FaYoutube className='text-[#dd1d1d] text-4xl' />
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className='bg-[#a4423f] text-[#2cae74] p-3 text-center'>
                <p>© eStudy  2023 | Created by <span>Mahtab Uddin</span></p>
            </div>
        </div>
    );
};

export default Footer;
