import { useQuery } from "@tanstack/react-query";
const UseAssignment = () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["assignment"],
            queryFn: async () => {
                const data = await fetch("https://estudy-server-jivnn7zjq-mabus-projects.vercel.app/assignment");
                return await data.json();
            }
        }
    );


    return { data, isLoading, isFetching, refetch };
};

export default UseAssignment;