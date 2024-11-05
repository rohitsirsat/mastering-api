import React, { useState } from "react";
import Loader from "../components/loader";
import { FaGithub } from "react-icons/fa";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-12">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl mb-4">
          Master API Handling with{" "}
          <a href="https://freeapi.app/" target="_blank">
            <span className="text-blue-600">FreeAPI</span>
          </a>
        </h2>
        <h2 className="text-4xl font-extrabold text-white md:text-5xl mb-4">
          Hit the any API Endpoint to see the result
        </h2>
        <a
          className="flex justify-center items-center gap-4 text-2xl text-gray-500"
          href="https://github.com/rohitsirsat/mastering-api"
          target="_blank"
        >
          <span>source code</span>
          <FaGithub />
        </a>
      </main>
    </div>
  );
}

export default Home;
