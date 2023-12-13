import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

const Card2 = ({ assignment }) => {
  const { title, pdfLink, quickNote, status, marks, name } = assignment;
  const sta = "completed";

  return (
    <div className="w-[340px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

      {/* PDF Icon */}
      <div className="text-center mt-4">
        <AiOutlineFilePdf className="w-16 h-16 mx-auto text-red-500" />
      </div>

      {/* "View" Button */}
      <div className="text-center">
        <motion.a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-4xl hover:underline cursor-pointer"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          View
        </motion.a>
      </div>

      <div className='flex justify-center mt-4'>
        <h2 className="text-blue-600 text-2xl font-bold my-2">{name}</h2>
      </div>

      <div className="p-4 mt-4">
        <h2 className="text-4xl font-semibold my-2">{title}</h2>
        {status === sta ? (
          <p className="text-red-600 text-3xl my-4">You Scored: {marks}</p>
        ) : (
          <motion.button
            className="bg-red-500 text-white py-1 text-xl px-2 rounded my-4"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {status}
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Card2;
