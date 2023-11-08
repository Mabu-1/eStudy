import { useQuery } from "@tanstack/react-query";
const UseAssignment = () => {
    
        const  {data,isLoading,isFetching,refetch} = useQuery(
            {
                queryKey:["assignment"],
                queryFn: async () =>
                {
                    const data= await fetch ("http://localhost:5001/assignment");
                    return await data.json();
                }
            }
         );
        
   
    return { data,isLoading,isFetching,refetch};
};

export default UseAssignment;