"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const GotoHome = () => {
        router.push('/m/home/')
    }

    const GotoStart = () =>{
        router.push('/');
    }

    return ( 
    <div className="bg-slate-800 w-full h-[100px]">
        <nav className="flex justify-between items-center p-2">
            <button onClick={GotoStart}><Image src="/website_logo.svg" alt="weblogo" width={50} height={50}/></button>
            <div className="flex justify-between items-center space-x-6">
                <button className="hover:text-slate-500" onClick={GotoStart}><p className="font-bold">Home</p></button>
                <button className="hover:text-slate-500"><p className="font-bold">Genre</p></button>
                <button className="hover:text-slate-500"><p className="font-bold">Country</p></button>
                <button className="hover:text-slate-500"><p className="font-bold">Movie</p></button>
                <button className="hover:text-slate-500"><p className="font-bold">TV Shows</p></button>
                <button className="hover:text-slate-500"><p className="font-bold">Top IMDB</p></button>
            </div>
            <div className="flex justify-between items-center space-x-2">
                <input type="search" name="" id="" className="item-center rounded-lg w-50 h-8 text-black"/>
                <button className="border border-white p-2 rounded-lg">Login</button>
            </div>
        </nav>
    </div> 
    );
}
 
export default Navbar;