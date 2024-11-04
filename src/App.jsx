function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-950 to-slate-900 flex flex-col items-center ">
        <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-12">
          <h2 className="text-4xl font-extrabold text-white md:text-5xl mb-4">
            Master API Handling with{" "}
            <span className="text-blue-600">FreeAPI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mb-6">
            Learn how to interact with APIs through real-world examples using
            {""}
            <a
              href="https://freeapi.app/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {" "}
              FreeAPI
            </a>
            , an open-source project by Hitesh Choudhary, designed to make API
            learning accessible for students.
          </p>
          <button className="px-6 py-3 bg-blue-600 shadow-lg shadow-blue-500/50 ... text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
            Get Started
          </button>
        </main>
      </div>
    </>
  );
}

export default App;
