import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillEye, AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Card = ({ assignment, refetch }) => {
  const { _id, thumbnail, title, marks, difficulty, email } = assignment;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (email !== user.email) {
      Swal.fire({
        icon: 'error',
        title: 'Not Authorized',
        text: 'You are not authorized to delete this item.',
      });
    } else {
      axios
        .delete(`https://estudy-server-5m5m2eu30-mabus-projects.vercel.app/assignment/${_id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            // Display a success message using SweetAlert
            Swal.fire({
              icon: 'success',
              title: 'Delete Successful',
              text: 'The item was successfully deleted.',
            });
            refetch();
          }
        })
        .catch((error) => {
          console.error('Error deleting item', error);
          // Display an error message using SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Delete Error',
            text: 'An error occurred while deleting the item.',
          });
        });
    }
  };

  const handleUpdateClick = () => {

    if (email !== user.email) {
      Swal.fire({
        icon: 'error',
        title: 'Not Authorized',
        text: 'You are not authorized to update this assignment.',
      });
    } else {
      navigate(location?.state ? location.state : `/update/${_id}`);
    }
  };

  return (
    <div className="bg-white border-3 shadow-md rounded-lg p-4 m-4">
      <img src={thumbnail} alt={title} className="w-full h-32 object-cover" />

      <div className="flex justify-between">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mt-4">{title}</h2>
          <p className="text-2xl text-gray-600 mt-4 font-bold">Marks: {marks}</p>
          <p className="text-2xl text-gray-600 mt-4 font-bold">Difficulty: {difficulty}</p>
        </div>

        <div className="flex-1 items-end">
          <div className="py-2">
            <Link to={`/view/${_id}`}>
              <div className="flex justify-end">
                <button className="bg-blue-500 text-white py-1 px-1 w-1/6 rounded mt-2 flex justify-center">
                  <AiFillEye className="text-4xl"></AiFillEye>
                </button>
              </div>
            </Link>
          </div>

          <div>
            <div className="flex justify-end">
              <button
                onClick={handleUpdateClick}
                className="bg-green-500 text-white py-1 px-2 w-1/6 rounded mt-2 flex justify-center"
              >
                <GrUpdate className="text-4xl"></GrUpdate>
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-end">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-1 px-2 w-1/6 rounded mt-2 flex justify-center"
              >
                <AiFillDelete className="text-4xl"></AiFillDelete>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
