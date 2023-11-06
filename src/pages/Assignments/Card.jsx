

const Card = ({ assignment }) => {
    const {thumbnail,title,marks,difficulty}=assignment;
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <img src={thumbnail} alt={title} className="w-full h-32 object-cover" />
      <h2 className="text-4xl font-semibold mt-2">{title}</h2>
      <p className="text-2xl text-gray-600 mt-2">Marks: {marks}</p>
      <p className="text-2xl text-gray-600 mt-2">Difficulty: {difficulty}</p>
      <div className="flex gap-7">
      <button className="bg-blue-500 text-white py-1 px-2 rounded mt-2">
        View Assignment
      </button>
      <button className="bg-green-500 text-white py-1 px-2 rounded mt-2">
        Update Assignment
      </button>
      </div>
    
    </div>
  );
};

export default Card;
