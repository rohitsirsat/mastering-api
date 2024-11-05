import React from "react";
import axios from "axios";
import Loader from "../components/loader";

function GetAll() {
  const options = {
    method: "GET",
    url: "https://example.com/public/randomusers",
    params: { page: "1", limit: "10" },
    headers: { accept: "application/json" },
  };

  try {
    const { data } = axios.request(options);
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  return <div>getAll lorem*100</div>;
}

export default GetAll;
