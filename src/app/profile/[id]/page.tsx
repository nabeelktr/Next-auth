"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UserProfile({params} : any){

    const router  = useRouter()
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

        <h1>Profile</h1>
        <hr/>
        <p className="text-4xl ">Profile Page <span className="p-2 rounded bg-gray-600">{params.id}</span></p>
        <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button>
        </div>
    )
}