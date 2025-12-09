import { Link } from "react-router-dom"

function Home(){
    return(
        <>
        <div className="h-auto w-full bg-white">
             <div className="h-screen w-full flex justify-center items-center">
                  <Link to="/login" className="w-[150px] h-[40px] flex justify-center items-center border-2 border-red-400">Login</Link>
             </div>
        </div>
        </>
    )
}

export default Home