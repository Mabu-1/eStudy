import { useQuery } from "@tanstack/react-query";
const UseAssignment = () => {
    
        const  {data,isLoading,isFetching} = useQuery(
            {
                queryKey:["assignment"],
                queryFn: async () =>
                {
                    const data= await fetch ("http://localhost:5000/assignment");
                    return await data.json();
                }
            }
         );
        
   
    return { data,isLoading,isFetching};
};

export default UseAssignment;