
import UseSubmit from '../Hooks/UseSubmit';
import Loading from '../Loading/Loading';
import Card1 from './Card1';

const Submit = () => {
  const { isFetching, isLoading, data, refetch } = UseSubmit();


  if (isLoading) {
    return <Loading />;
  }
  const status = "completed";
  const assignmentToDisplay = data.filter((myassignments) => myassignments.status !== status);
  return (
    <div>

      {assignmentToDisplay.map((assignment) => (
        <Card1 key={assignment._id} assignment={assignment} />
      ))}
    </div>
  );
};

export default Submit;