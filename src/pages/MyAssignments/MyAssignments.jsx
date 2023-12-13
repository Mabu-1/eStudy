import { useContext } from "react";
import UseSubmit from "../Hooks/UseSubmit";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../providers/AuthProvider";
import Card2 from "./Card2";

const MyAssignments = () => {
  const { isFetching, isLoading, data, refetch } = UseSubmit();

  const { user } = useContext(AuthContext);
  const email = user.email;

  if (isLoading) {
    return <Loading />;
  }

  //   if (!Array.isArray(data)) {
  //     return <div>No data available.</div>;
  //   }

  const assignmentToDisplay = data.filter((myassignments) => myassignments.email === email);
  console.log(assignmentToDisplay)

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
      {assignmentToDisplay.map((assignment) => (
        <Card2 key={assignment._id} assignment={assignment} />
      ))}
    </div>
  );
};

export default MyAssignments;
