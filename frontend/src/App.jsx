import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function callDataList() {
    try {
      setLoading(true);
      const url = await fetch("http://localhost:4000/api/account", {
        method: "GET",
        headers: {
          "content-type": "/account/json",
        },
      });

      if (!url.ok) {
        throw new Error(`Server does not respomnd ${url.status}`);
      }

      const data = await url.json();
      console.log("Api Response", data);

      const list = Array.isArray(data)
        ? data
        : data.users ?? data.user ?? data.userFind ?? [];

      setUsers(list);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    callDataList();
  }, []);

  if (loading) return <p>Loading Data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <p className="text-9xl font-extrabold text-red-400">Hello Raushan</p>
      {
        users.map((item, index) => (
          <ul key={item._id ?? index} className="h-300px w-full border-2 border-red-100">
            <li className="text-2xl text-black">{`Name ${item.username}`}</li>
            <li className="text-2xl text-black">{item.email}</li>
            <li className="text-2xl text-black">{item.phone}</li>
            <li className="text-2xl text-black">{item.password}</li>
          </ul>
        ))
      }
    </>
  );
}
export default App;
