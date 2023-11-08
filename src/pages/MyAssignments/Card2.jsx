import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

const Card2 = ({ assignment }) => {
  const { title, pdfLink, quickNote, status, marks,name } = assignment;
const sta="completed";
  return (
    <div className="w-[340px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className='flex justify-center'>
      <h2 className="text-blue-600 text-2xl font-bold my-2" >{name}</h2>

      </div>
      {/* PDF Icon */}
      <div className="text-center mt-4">
        <AiOutlineFilePdf className="w-16 h-16 mx-auto text-red-500" />
      </div>
        {/* "View" Button */}
        <div className="text-center">
        <a
          href={pdfLink} // Set the PDF link as the href
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500   text-4xl hover:underline cursor-pointer"
        >
          View
        </a>
      </div>
      <div className="p-4">
        <h2 className="text-4xl font-semibold my-2">{title}</h2>
        {status === sta ? (
          <p className="text-red-600 text-3xl">You Scored: {marks}</p>
        ) : (
          <p className="text-red-600 text-3xl">{status}</p>
        )}
      </div>
    
    </div>
  );
};

export default Card2;
