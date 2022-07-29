import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usersData, setUsersData] = useState([]);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const user = usersData.find(function (userData) {
      return userData.email === email;
    });

    if (user) {
      navigate("/");
    } else {
      setError("User not found in the database");
    }
  };

  return (
    <div className="max-w-md px-10 mx-auto mt-28">
      <h1 className="text-center text-4xl mb-5 text-gray-700">Please Login</h1>

      <form className="flex flex-col" action="" onSubmit={handleSumbit}>
        <input
          className="my-2 py-2 px-3 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-orange-500"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="my-2 py-2 px-3 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-orange-500"
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          className="my-2 py-2 px-3 rounded-md shadow-sm outline-none bg-orange-500 text-white hover:bg-orange-600 cursor-pointer transition-all"
          type="submit"
          value="Login"
        />
      </form>
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default Login;
