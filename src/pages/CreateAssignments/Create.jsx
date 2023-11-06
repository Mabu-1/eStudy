import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Create = () => {
    const { user } = useContext(AuthContext);
    const email=user.email;
    
    const [assignment, setAssignment] = useState({
        title: "",
        description: "",
        marks: "",
        thumbnail: "",
        difficulty: "easy",
        dueDate: null,
    });

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
  
        try {
            const res = await axios.post("http://localhost:5000/assignment", myData);
            console.log(res)
            if (res.data.acknowledged) {
                Swal.fire({
                    position: 'top-end', // You can use any valid position value
                    icon: 'success',
                    title: 'Assignment created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
               
            }
        } catch (error) {
            console.log(error);
        }
        
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
            <form onSubmit={handleCreateAssignment} className="space-y-4">
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={assignment.title}
                        onChange={handleInputChange}
                        className="border rounded-md p-2 w-full"
                        required // Add required attribute
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={assignment.description}
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
                        value={assignment.marks}
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
                        value={assignment.thumbnail}
                        onChange={handleInputChange}
                        className="border rounded-md p-2 w-full"
                        required // Add required attribute
                    />
                </div>
                <div>
                    <label>Difficulty Level:</label>
                    <select
                        name="difficulty"
                        value={assignment.difficulty}
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
                        Create Assignment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Create;
