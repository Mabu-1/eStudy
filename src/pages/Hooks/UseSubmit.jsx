import { useQuery } from "@tanstack/react-query";
const UseSubmit = () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["submit"],
            queryFn: async () => {
                const data = await fetch("https://estudy-server-22qc7a73a-mabus-projects.vercel.app/submit");
                return await data.json();
            }
        }
    );


    return { data, isLoading, isFetching, refetch };
};

export default UseSubmit;