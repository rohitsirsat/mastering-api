import React, { useState } from "react";
import axios from "axios";

function GetJpgImage() {
  const [imageUrl, setImageUrl] = useState("");

  const getImge = async () => {
    const options = {
      method: "GET",
      url: "https://api.freeapi.app/api/v1/kitchen-sink/image/jpeg",
      responseType: "blob",
    };

    try {
      const { data } = await axios.request(options);
      const url = URL.createObjectURL(data);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen space-y-2">
      {/* Top Navigation with Button */}
      <nav className="flex items-center justify-center h-16 border-b border-r border-gray-700">
        <button
          onClick={getImge}
          className="text-gray-200 bg-blue-900 px-4 py-1 rounded-lg hover:bg-blue-800 transition-all duration-300"
        >
          Get Image
        </button>
      </nav>

      {/* Image and Description Section */}
      {imageUrl ? (
        <div className="flex flex-col md:flex-row items-center mt-10 md:space-x-8 p-4 md:p-8 bg-gray-900 rounded-lg shadow-lg max-w-3xl">
          <img
            src={imageUrl}
            alt="Fetched from API"
            className="w-full md:w-1/2 max-h-96 object-cover rounded-lg shadow-lg mb-4 md:mb-0"
          />
          <div className="text-gray-300 space-y-3">
            <h2 className="text-xl font-semibold text-blue-500">
              Image Information
            </h2>
            <p>
              <span className="font-medium text-blue-400">API Endpoint:</span>{" "}
              <code className="bg-gray-800 text-sm p-1 rounded-md">
                GET https://api.freeapi.app/api/v1/kitchen-sink/image/jpeg
              </code>
            </p>
            <p>
              This endpoint returns a JPEG image in binary form. To display it,
              we use the `responseType: "blob"` option in the Axios request,
              which allows us to create a URL for the binary data.
            </p>
            <p>
              This blob URL enables the display of the image directly in the
              browser.
            </p>
          </div>
        </div>
      ) : (
        <h1 className="mt-8 text-center text-gray-400">
          Click on the button to fetch the image
        </h1>
      )}
    </div>
  );
}

export default GetJpgImage;
