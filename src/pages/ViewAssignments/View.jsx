
import { Link, useParams } from 'react-router-dom';
import UseAssignment from '../Hooks/UseAssignment';
import Loading from '../Loading/Loading';
import { AiOutlineArrowLeft} from 'react-icons/ai'
const View = () => {
  const { isFetching, isLoading, data } = UseAssignment();
  const { id } = useParams();

  if (isLoading) {
    return <Loading />;
  }

  const assignmentToDisplay = data.find((assignment) => assignment._id === id);

  if (!assignmentToDisplay) {
    return <div>Assignment not found.</div>;
  }

  const dueDate = assignmentToDisplay.dueDate.split('T')[0];

  const instructions = [
    {
      title: 'Research and Presentation',
      description: 'Research a topic of your choice, prepare a presentation, and deliver it to the class. Your presentation should include an introduction, main points, and a conclusion. Use credible sources, visuals, and be prepared to answer questions from your peers.',
    },
    {
      title: 'Critical Analysis Essay',
      description: 'Write a critical analysis essay on a literary work, historical event, scientific concept, or any subject of interest. Your essay should have a clear thesis statement, well-structured arguments, evidence from reputable sources, and a conclusion that summarizes your analysis.',
    },
    {
      title: 'Problem-Solving Project',
      description: 'Identify a real-world problem or challenge and propose a solution. Create a project plan that outlines the problem, your proposed solution, steps for implementation, and potential obstacles. Present your project plan in a format that suits the assignment\'s requirements, such as a written report, presentation, or prototype.',
    },
  ];

  return (
    <div>
      <div className='flex justify-center'>
        <img
          src={assignmentToDisplay.thumbnail}
          alt={assignmentToDisplay.title}
          className="w-2/4"
        />
      </div>
      <div className='flex justify-between'>

      <div className="mt-[-10px]">
   <Link to="/assignments"><button id="" type="submit" className="bg-[#FF444A] text-white text-center text-xl font-bold ml-[20px] my-3 w-[190px] rounded-lg p-3 flex"> <AiOutlineArrowLeft className="mr-4 text-xl mt-[7px]"></AiOutlineArrowLeft> Go Back</button> </Link> 
  </div>
  <div className="mt-[-10px]">
  <Link to={`/take/${assignmentToDisplay._id}`}>
  <button className="bg-[#ff9844] text-black text-center text-xl font-bold ml-[20px] my-3 w-[190px] rounded-lg p-3 flex"> Take Assignment </button>
</Link>
  </div>
 
      </div>
      <div className='flex justify-center'>
      <h1 className="text-5xl font-bold mt-2">{assignmentToDisplay.title}</h1>
      </div>
    
      <p className="text-3xl  my-10"> <span className='text-3xl font-bold'>Description:</span> {assignmentToDisplay.description}</p>
      
      <div className='flex justify-between my-10'>
      <p className="text-3xl text-gray-600"> <span className='text-3xl text-red-500 font-bold'>Marks:</span> {assignmentToDisplay.marks}</p>
      <p className="text-3xl text-gray-600"><span className='text-3xl text-blue-500 font-bold'>Difficulty:</span> {assignmentToDisplay.difficulty}</p>
      <p className="text-3xl text-gray-600"> <span className='text-3xl text-orange-500 font-bold'>Due Date:</span> {dueDate}</p>
      </div>
     
      <div className='flex justify-center'>
      <h3 className="text-5xl font-bold mt-4 mb-10">Instructions</h3>
      </div>
      

      {instructions.map((instruction, index) => (
        <div key={index} >
          <h1 className='text-4xl text-blue-600 font-semibold p-4'>{instruction.title}</h1>
          <p className='text-xl text-gray-500 font-bold p-2'>{instruction.description}</p>
        </div>
      ))}
    </div>
  );
};

export default View;
