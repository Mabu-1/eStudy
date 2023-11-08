import { useQuery } from "@tanstack/react-query";
const UseAssignment = () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["assignment"],
            queryFn: async () => {
                const data = await fetch("https://estudy-server-22qc7a73a-mabus-projects.vercel.app/assignment");
                return await data.json();
            }
        }
    );


    return { data, isLoading, isFetching, refetch };
};

export default UseAssignment;