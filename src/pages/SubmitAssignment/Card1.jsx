import React from 'react';
import { Link } from 'react-router-dom';

const Card1 = ({ assignment }) => {
  const { _id, title, marks, name, status } = assignment;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-3xl font-bold mt-2">{title}</h2>
      <p className="text-xl font-bold text-gray-600 mt-2">Marks: {marks}</p>
      <p className="text-xl font-bold text-gray-600 mt-2">Examinee: {name}</p>
      <div className='flex gap-10'>
        <button
          className="bg-red-500 text-white py-1 text-xl px-2 rounded mt-2"

        >
          {status}
        </button>
        <Link to={`/mark/${_id}`}>
          <button
            className="bg-blue-500 text-white py-1 text-xl px-2 rounded mt-2"

          >
            Give Mark
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Card1;
