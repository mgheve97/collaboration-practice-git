"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const GotoHome = () => {
    router.push('/m/home/');
  }

  const GotoStart = () =>{
    router.push('/');
  }

  return (
    <div className="bg-slate-800 w-full h-screen">
      <nav className="flex justify-between items-center p-2 w-full">
        <button onClick={GotoStart}><Image src="/website_logo.svg" alt="weblogo" width={50} height={50}/></button>
        <div className="flex justify-between items-center space-x-6">
          <button className="hover:text-slate-500" onClick={GotoHome} aria-label="Go to Home"><p className="font-bold">Home</p></button>
          <button className="hover:text-slate-500"><p className="font-bold">Movie</p></button>
          <button className="hover:text-slate-500"><p className="font-bold">TV Shows</p></button>
          <button className="hover:text-slate-500"><p className="font-bold">Top IMDB</p></button>
        </div>
        
        
      </nav>
      <section className="flex justify-center w-full h-screen" id="main">
          <div className="flex flex-col justify-center items-center border border-black rounded-md bg-slate-500 w-[1200px] h-auto my-5 space-y-4">
           <Image src="/website_logo.svg" alt="website logo" width={100} height={100}/>
           <h1 className="font-bold text-5xl">Geek Movies</h1>
           <div className="flex items-center justify-center">
            <input 
            type="search" 
            name="search" 
            id="search"
            placeholder="Enter Keyword....."
            className="border border-white rounded-l-md w-[700px] h-[50px] placeholder:pl-2" 
              />
              <button className="h-[50px]">
                <Image 
                src="/search.svg" 
                alt="website logo" 
                width={52} 
                height={20}
                className="border border-black rounded-r-md bg-slate-400"
                />
              </button>
            </div>
            <button className="border rounded-md p-2 bg-white " onClick={GotoHome}>
              <div className="flex justify-center items-center space-x-2">
                <p className="text-slate-600 font-bold">
                  View Full Site
                </p>
                <Image 
                    src="/left-arrow.svg"
                    alt="right"
                    width={20}
                    height={20}
                  /> 
              </div>
            </button>
          </div>
      </section>
    </div>
  );
}
