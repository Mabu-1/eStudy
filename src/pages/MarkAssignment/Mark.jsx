import React, { useState } from 'react';
import UseSubmit from '../Hooks/UseSubmit';
import Loading from '../Loading/Loading';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineFilePdf } from 'react-icons/ai';
import Swal from 'sweetalert2';

const Mark = () => {
  const [marks, setMarks] = useState(''); // State for marks
  const [feedback, setFeedback] = useState(''); // State for feedback
  const { isFetching, isLoading, data, refetch } = UseSubmit();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading />;
  }

  const assignmentToDisplay = data.find((myassignments) => myassignments._id === id);
  const status = "completed";



  const handleMarksChange = (e) => {
    setMarks(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const myData = {
      marks: form.marks.value || "not Given",
      feedback: form.feedback.value || "not Given",
      status,
    };
    console.log(myData)

    fetch(`https://estudy-server-jivnn7zjq-mabus-projects.vercel.app/submit/${assignmentToDisplay._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(myData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Mark Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'

          });
          navigate(location?.state ? location.state : '/submissions');
          // Reset the form

        }
      });
    // Add your logic to submit the data here, e.g., using an API request

    // Clear the feedback and marks input fields
    setMarks('');
    setFeedback('');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <div className='flex justify-center'>
        <h2 className="text-2xl font-semibold mb-4">Give Marks and Feedback</h2>
      </div>

      {/* PDF Icon */}
      <div className="text-center mt-4">
        <AiOutlineFilePdf className="w-16 h-16 mx-auto text-red-500" />
      </div>

      {/* "View" Button */}
      <div className="text-center">
        <a
          href={assignmentToDisplay.pdfLink} // Set the PDF link as the href
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500   text-4xl hover:underline cursor-pointer"
        >
          View
        </a>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="marks" className="block text-sm font-medium text-gray-600">
            Marks:
          </label>
          <input
            type="number"
            id="marks"
            name="marks"
            value={marks}
            onChange={handleMarksChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter marks"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-600">
            Feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter feedback"
            rows="4"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mark;
