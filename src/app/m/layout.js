"use client";
import Navbar from "./navbar";

const MovieLayout = ({ children }) => {
    return ( 
        <div>
            <Navbar/>
            <main>{children}</main>
        </div>
    );
}
 
export default MovieLayout;