import React, { useState } from 'react';
import Loading from '../Loading/Loading';
import UseAssignment from '../Hooks/UseAssignment';
import Card from './Card';

const Assignments = () => {
  const { isFetching, isLoading, data, refetch } = UseAssignment();
  const [selectedDifficulty, setSelectedDifficulty] = useState('All'); // Default value is 'All'

  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value);
  };

  if (isLoading) {
    return <Loading />;
  }

  const difficultyLevels = ['All', 'easy', 'medium', 'hard'];

  const filteredData = selectedDifficulty === 'All'
    ? data
    : data.filter((assignment) => assignment.difficulty === selectedDifficulty);

  return (
    <div>
      <div className="text-center mt-4">
        <label htmlFor="difficultySelect" className="text-3xl text-blue-700 font-bold">
          Select Difficulty:
        </label>
        <select
          id="difficultySelect"
          className="p-3 ml-2 border rounded"
          value={selectedDifficulty}
          onChange={handleDifficultyChange}
        >
          {difficultyLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      {filteredData.map((assignment) => (
        <Card refetch={refetch} key={assignment._id} assignment={assignment} />
      ))}
    </div>
  );
};

export default Assignments;
