import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/loader";

function GetAll() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState({
    title: "",
    first: "",
    last: "",
  });
  const [image, setImage] = useState("");

  const getAllUsers = async () => {
    const options = {
      method: "GET",
      url: "https://api.freeapi.app/api/v1/public/randomusers",
      params: { page: "1", limit: "10" },
      headers: { accept: "application/json" },
    };

    try {
      const { data } = await axios.request(options);
      // console.log(data);
      // console.log(data.data);
      console.log(data.data.data);
      setUsers(data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen space-y-2">
      <nav className="flex items-center justify-center h-16 border-b border-r border-gray-700">
        <button
          onClick={getAllUsers}
          className="text-gray-200 bg-blue-900 px-4 py-1 rounded-lg hover:bg-blue-800 transition-all duration-300"
        >
          Get All Users
        </button>
      </nav>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-wrap gap-4 justify-center md:justify-normal">
          {users.map((user) => (
            <div
              key={user.id}
              className="max-w-sm w-full bg-black shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                className="object-cover h-60 w-96"
                src={user.picture.large}
                alt="User profile"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-300">
                  {user.name.title} {user.name.first} {user.name.last}
                </h2>
                <p className="text-gray-400 mb-2">Age: {user.dob.age}</p>
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">City:</span>{" "}
                  {user.location.city}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Country:</span>{" "}
                  {user.location.country}
                </p>
                {/* <p className="text-gray-600">
                <span className="font-semibold">Location:</span> {user.location}
              </p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetAll;
