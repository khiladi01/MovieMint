import { Link } from "react-router-dom";
import { useState } from "react";

function Registration() {
  const [data, setData] = useState({
    Name: "",
    Username: "",
    Phone: "",
    Email: "",
    Password: "",
    Confirmpassword: "",
  });

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const url = await fetch("http://localhost:4000/api/users" , {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await url.json();
      console.log("Server response", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-auto w-full bg-white">
        <div className="h-screen w-full grid place-content-center">
          <form onSubmit={sendData} className="grid gap-1">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, Name: e.target.value })}
              className="w-[400px] h-10 border border-slate-800 pl-3"
            />
            <label htmlFor="">Username</label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, Username: e.target.value })}
              className="w-[400px] h-10 border border-slate-800 pl-3"
            />
            <label htmlFor="">Mobile</label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, Phone: e.target.value })}
              className="w-[400px] h-10 border border-slate-800 pl-3"
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, Email: e.target.value })}
              className="w-[400px] h-10 border border-slate-800 pl-3"
            />
            <label htmlFor="">Password</label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, Password: e.target.value })}
              className="w-[400px] h-10 border border-slate-800 pl-3"
            />
            <label htmlFor="">Confirm Password</label>
            <input
              type="text"
              onChange={(e) =>
                setData({ ...data, Confirmpassword: e.target.value })
              }
              className="w-[400px] h-10 border border-slate-800 pl-3"
            />
            <input
              type="submit"
              value="Send"
              className="w-[400px] h-10 border border-slate-800"
            />
          </form>
        </div>
        <Link
          to="/"
          className="w-[150px] h-10 flex justify-center items-center border-2 border-red-400"
        >
          Home
        </Link>
      </div>
    </>
  );
}

export default Registration;
