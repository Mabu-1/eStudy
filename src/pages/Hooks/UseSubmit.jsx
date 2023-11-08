import { useQuery } from "@tanstack/react-query";
const UseSubmit = () => {
    
        const  {data,isLoading,isFetching,refetch} = useQuery(
            {
                queryKey:["submit"],
                queryFn: async () =>
                {
                    const data= await fetch ("http://localhost:5001/submit");
                    return await data.json();
                }
            }
         );
        
   
    return { data,isLoading,isFetching,refetch};
};

export default UseSubmit;