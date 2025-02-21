import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <nav className="flex justify-between items-center p-2 border-b border-slate-500 bg-slate-600">
        <Image src="/website_logo.svg" alt="weblogo" width={50} height={50}/>
        <div className="flex justify-between items-center space-x-6">
          <a className="hover:text-slate-500"><p className="font-bold">Home</p></a>
          <a className="hover:text-slate-500"><p className="font-bold">Genre</p></a>
          <a className="hover:text-slate-500"><p className="font-bold">Country</p></a>
          <a className="hover:text-slate-500"><p className="font-bold">Movie</p></a>
          <a className="hover:text-slate-500"><p className="font-bold">TV-Show</p></a>
        </div>
        {/* <div className="flex justify-between items-center space-x-2">
          <input type="search" name="" id="" className="item-center rounded-lg w-50 h-8 text-black"/>
          <button className="border border-white p-2 rounded-lg">Login</button>
        </div> */}
        
      </nav>
      <section className="flex justify-center bg-slate-600 w-full h-screen m=5" id="main">
          <div className="flex flex-col justify-center items-center border border-black rounded-md bg-slate-500 w-[1200px] h-auto my-5">
           <Image src="/website_logo.svg" alt="website logo" width={100} height={100}/>
           <h1 className="font-bold text-5xl">Geek Movies</h1>
           <div className="">
           <input 
           type="search" 
           name="" 
           id=""
           className="border border-white rounded-md w-[1000px]" 
            />
            <button className="">Submit</button>
           </div>
           
          </div>
      </section>
    </div>
  );
}
