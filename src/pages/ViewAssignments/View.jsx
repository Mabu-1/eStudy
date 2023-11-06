import React from 'react';
import UseAssignment from '../Hooks/UseAssignment';
import Loading from '../Loading/Loading';

const View = () => {
  const { isFetching, isLoading, data } = UseAssignment();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {data.map((assignment) => (
        <div key={assignment._id} className="border p-4 mb-4">
          <img
            src={assignment.thumbnail}
            alt={assignment.title}
            className="w-full h-32 object-cover"
          />
          <h2 className="text-xl font-semibold mt-2">{assignment.title}</h2>
          <p className="text-sm text-gray-600 mt-2">Description: {assignment.description}</p>
          <p className="text-sm text-gray-600">Marks: {assignment.marks}</p>
          <p className="text-sm text-gray-600">Due Date: {assignment.dueDate}</p>
          <h3 className="text-lg font-semibold mt-4">Instructions:</h3>
          <p className="mt-2">Paragraph 1: {assignment.instructions.paragraph1}</p>
          <p className="mt-2">Paragraph 2: {assignment.instructions.paragraph2}</p>
          <p className="mt-2">Paragraph 3: {assignment.instructions.paragraph3}</p>
        </div>
      ))}
    </div>
  );
};

export default View;
