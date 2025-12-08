import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function callData() {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/account ", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Response failed ${res.status}`);
      }

      const data = await res.json();
      // console.log("DATA:", data); testing data load or not

      setUsers(data.userFind);
      setLoading(false);
    } catch (error) {
      setError({
        success: false,
        message: "Failed to fetch data",
        error: error.message,
      });
      setLoading(false);
    }
  }

  useEffect(() => {
    callData();
  }, []);

  if (loading) return <p>Wait Data Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1 className="text-slate-800 text-3xl">User Details</h1>
      <div className="h-screen w-full flex justify-center items-center border-2 border-red-400">
        {users.length === 0 && (
          <p className="text-md text-red-400">No User Found</p>
        )}
        <div>
            <p className="text-2xl text-red-400">{`Name ${users.Name}`}</p>
            <p className="text-md text-slate-600">{`Email ${users.Email}`}</p>
            <p className="text-md text-slate-600">{`Phone ${users.Phone}`}</p>
            <p className="text-md text-slate-600">{`Password ${users.Password}`}</p>
        </div>
      </div>
    </>
  );
}

export default App;
