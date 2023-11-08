import { useContext, useRef, useState, } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from "sweetalert2";
import UseAssignment from "../Hooks/UseAssignment";

import Loading from "../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";



const Update = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [assignment, setAssignment] = useState({
        title: "",
        description: "",
        marks: "",
        thumbnail: "",
        difficulty: "easy",
        dueDate: null,
    });

    const formRef = useRef(null);
    const { user } = useContext(AuthContext);
    const email = user.email;
    const { isFetching, isLoading, data } = UseAssignment();
    if (isLoading) {
        return <Loading />;
    }

    const assignmentToDisplay = data.find((assignment) => assignment.email === email);
    if (!assignmentToDisplay) {
        return (
            <div className="w-4/5 mx-auto mt-8 mb-10 p-4 bg-red-200 text-red-800 rounded-md flex justify-between">
                <img className="w-2/4" src="https://i.ibb.co/pZvLYzn/6732842.jpg" alt="" />
                <div className="flex justify-center items-center p-2">
                    <h1 className="text-4xl">You do not have permission to update it.</h1>
                </div>

            </div>
        );
    }



    const handleInputChange = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const { name, value } = e.target;
        setAssignment({
            ...assignment,
            [name]: value,
        });
    };

    const handleDueDateChange = (date) => {
        setAssignment({
            ...assignment,
            dueDate: date,
        });
    };

    const handleCreateAssignment = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const form = e.target;
        const myData = {
            title: form.title?.value || "not Given",
            description: form.description?.value || "not Given",
            marks: form.marks?.value || "not Given",
            thumbnail: form.thumbnail?.value || "not Given",
            difficulty: form.difficulty?.value || "not Given",
            dueDate: assignment.dueDate, // Use the state value for dueDate
            email
        };

        console.log(myData);
        fetch(`https://estudy-server-5m5m2eu30-mabus-projects.vercel.app/assignment/${assignmentToDisplay._id}`, {
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
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'

                    });
                    navigate(location?.state ? location.state : '/assignments');
                    // Reset the form
                    formRef.current.reset();
                }
            });
        // Show success message using a toast or modal.

        // Clear the form or reset the assignment state if needed.
        setAssignment({
            title: "",
            description: "",
            marks: "",
            thumbnail: "",
            difficulty: "easy",
            dueDate: null,
        });
    };

    return (
        <div className="w-4/5 mx-auto mt-8 mb-10">
            <form ref={formRef} onSubmit={handleCreateAssignment} className="space-y-4">
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"

                        defaultValue={assignmentToDisplay.title}
                        onChange={handleInputChange}
                        className="border rounded-md p-2 w-full"
                        required // Add required attribute
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"

                        defaultValue={assignmentToDisplay.description}
                        onChange={handleInputChange}
                        className="border rounded-md p-2 w-full h-24"
                        required // Add required attribute
                    />
                </div>
                <div>
                    <label>Marks:</label>
                    <input
                        type="number"
                        name="marks"

                        defaultValue={assignmentToDisplay.marks}
                        onChange={handleInputChange}
                        className="border rounded-md p-2 w-full"
                        required // Add required attribute
                    />
                </div>
                <div>
                    <label>Thumbnail Image URL:</label>
                    <input
                        type="text"
                        name="thumbnail"

                        defaultValue={assignmentToDisplay.thumbnail}
                        onChange={handleInputChange}
                        className="border rounded-md p-2 w-full"
                        required // Add required attribute
                    />
                </div>
                <div>
                    <label>Difficulty Level:</label>
                    <select
                        name="difficulty"

                        defaultValue={assignment.difficulty}
                        onChange={handleInputChange}
                        className="border rounded-md p-2 w-full"
                        required // Add required attribute
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label>Due Date:</label>
                    <DatePicker
                        selected={assignment.dueDate}
                        defaultValue={assignmentToDisplay.dueDate}
                        onChange={handleDueDateChange}
                        dateFormat="yyyy-MM-dd"
                        className="border rounded-md p-2 w-full"
                        required // Add required attribute
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="flex justify-center bg-blue-500 text-white text-xl font-bold py-2 px-4 rounded-md hover-orange-500 transition duration-300 ease-in-out"
                    >
                        Update Assignment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;
