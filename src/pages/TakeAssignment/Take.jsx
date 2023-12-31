import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';
import UseAssignment from '../Hooks/UseAssignment';
import { useParams } from 'react-router-dom';
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

const Take = () => {
  const [pdfLink, setPdfLink] = useState('');
  const [quickNote, setQuickNote] = useState('');
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const name = user.displayName;
  const { isFetching, isLoading, data, refetch } = UseAssignment();

  const assignmentToDisplay = data.find((assignment) => assignment._id === id);
  const title = assignmentToDisplay.title;
  const marks = assignmentToDisplay.marks;
  const feedback = "";

  if (isLoading) {
    return <Loading />;
  }

  const handlePdfLinkChange = (e) => {
    setPdfLink(e.target.value);
  };

  const handleQuickNoteChange = (e) => {
    setQuickNote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const myData = {
      pdfLink: form.pdfLink?.value || "not Given",
      quickNote: form.quickNote?.value || "not Given",
      email,
      status: "Pending",
      title,
      marks,
      name,
      feedback,
    };

    try {
      const res = await axios.post("https://estudy-server.vercel.app/submit", myData);
      console.log(res);
      if (res.data.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Assignment Submitted Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }

    setPdfLink('');
    setQuickNote('');
  };

  return (
    <div className="w-2/4 mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold mb-4">Assignment Submission</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="pdfLink" className="block text-sm font-medium text-gray-600">
            PDF Link:
          </label>
          <input
            type="text"
            id="pdfLink"
            name="pdfLink"
            value={pdfLink}
            onChange={handlePdfLinkChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter PDF link"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quickNote" className="block text-sm font-medium text-gray-600">
            Quick Note:
          </label>
          <textarea
            id="quickNote"
            name="quickNote"
            value={quickNote}
            onChange={handleQuickNoteChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter a quick note"
            rows="4"
          />
        </div>
        <div className="text-center">
          <motion.button
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Take;
