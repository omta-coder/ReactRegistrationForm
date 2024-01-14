import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../utils/Context";

const Show = () => {
  const [users, setusers] = useContext(UserContext);

  const DeleteHandler = (index) => {
    const copyusers = [...users];
    copyusers.splice(index, 1);
    setusers(copyusers);
    localStorage.setItem("users", JSON.stringify(copyusers));
    toast.warn("User deleted successfully!");
  };

  const mycss = {
    fontSize: "22px",
    fontWeight: 500,
  };

  return (
    <>
      <ol className="flex justify-start flex-col mt-5 w-1/2 m-auto container">
        <h1 className="text-3xl mb-4 text-green-400">Registered Users</h1>

        {users.length > 0
          ? users
              .map((user, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-between mb-4 text-1xl p-4 bg-indigo-100"
                  >
                    <Link
                      className="hover:text-blue-400"
                      to={`/show/details/${user.username}`}
                      style={mycss}
                    >
                      {user.username}
                    </Link>

                    <p>
                      <Link to={`/show/edit/${user.username}`} className="mr-6">
                        ✏️
                      </Link>
                      <span onClick={() => DeleteHandler(index)}>❌</span>
                    </p>
                  </li>
                );
              })
              .reverse()
          : "Loading..."}
      </ol>
      <hr className="w-[80%] m-auto my-5 " />
      <div className="w-[80%]">
        <Outlet />
      </div>
    </>
  );
};

export default Show;
