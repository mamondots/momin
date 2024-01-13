import { useQuery } from "@tanstack/react-query";


const useEditorials = () => {
    const {data: editorials=[],refetch} =useQuery({
        queryKey:['editorials'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/editorialBoards')
            return res.json()
        }
    })
    return [editorials,refetch]
};
export default useEditorials;