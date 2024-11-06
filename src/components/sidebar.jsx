// src/components/Sidebar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const apiReference = [
  {
    apiName: "Get users",
    requestType: "GET",
    href: "get-all-users",
    id: "1",
  },
  {
    apiName: "Send JPEG image",
    requestType: "GET",
    href: "get-jpg-image",
    id: "2",
  },
  {
    apiName: "Get a random user",
    requestType: "GET",
    href: "get-random-user",
    id: "3",
  },
  {
    apiName: "Get products",
    requestType: "GET",
    href: "get-all-products",
    id: "4",
  },
  {
    apiName: "Get product by id",
    requestType: "GET",
    href: "get-product-by-id",
    id: "5",
  },
  {
    apiName: "Get a random product",
    requestType: "GET",
    href: "get-random-product",
    id: "6",
  },
  {
    apiName: "Get jokes",
    requestType: "GET",
    href: "get-all-jokes",
    id: "7",
  },
  {
    apiName: "Get joke by id",
    requestType: "GET",
    href: "get-joke-by-id",
    id: "8",
  },
  {
    apiName: "Get a random joke",
    requestType: "GET",
    href: "get-random-joke",
    id: "9",
  },
  {
    apiName: "Get books",
    requestType: "GET",
    href: "get-all-books",
    id: "10",
  },
  {
    apiName: "Get book by id",
    requestType: "GET",
    href: "get-book-by-id",
    id: "11",
  },
  {
    apiName: "Get a random book",
    requestType: "GET",
    href: "get-random-book",
    id: "12",
  },
  {
    apiName: "Get stocks",
    requestType: "GET",
    href: "get-all-stocks",
    id: "13",
  },
  {
    apiName: "Get stock by symbol id",
    requestType: "GET",
    href: "get-stock-by-symbol-id",
    id: "14",
  },
  {
    apiName: "Get a random stock",
    requestType: "GET",
    href: "get-random-stock",
    id: "15",
  },
  {
    apiName: "Get quotes",
    requestType: "GET",
    href: "get-all-quotes",
    id: "16",
  },
  {
    apiName: "Get quote by id",
    requestType: "GET",
    href: "get-quote-by-id",
    id: "17",
  },
  {
    apiName: "Get a random quote",
    requestType: "GET",
    href: "get-random-quote",
    id: "18",
  },
  {
    apiName: "Get meals",
    requestType: "GET",
    href: "get-all-meals",
    id: "19",
  },
  {
    apiName: "Get meal by id",
    requestType: "GET",
    href: "get-meal-by-id",
    id: "20",
  },
  {
    apiName: "Get a random meal",
    requestType: "GET",
    href: "get-random-meal",
    id: "21",
  },
  {
    apiName: "Get dogs",
    requestType: "GET",
    href: "get-all-dogs",
    id: "22",
  },
  {
    apiName: "Get dog by id",
    requestType: "GET",
    href: "get-dog-by-id",
    id: "23",
  },
  {
    apiName: "Get a random dog",
    requestType: "GET",
    href: "get-random-dog",
    id: "24",
  },
  {
    apiName: "Get cats",
    requestType: "GET",
    href: "get-all-cats",
    id: "25",
  },
  {
    apiName: "Get cat by id",
    requestType: "GET",
    href: "get-cat-by-id",
    id: "26",
  },
  {
    apiName: "Get a random cat",
    requestType: "GET",
    href: "get-random-cat",
    id: "27",
  },
  {
    apiName: "Get channel details",
    requestType: "GET",
    href: "get-channel-details",
    id: "28",
  },
  {
    apiName: "Get youtube videos",
    requestType: "GET",
    href: "get-youtube-videos",
    id: "29",
  },
  {
    apiName: "Get video by id",
    requestType: "GET",
    href: "get-video-by-id",
    id: "30",
  },
  {
    apiName: "Get video comments",
    requestType: "GET",
    href: "get-video-comments",
    id: "31",
  },
  {
    apiName: "Get related videos",
    requestType: "GET",
    href: "get-related-videos",
    id: "32",
  },
  {
    apiName: "Get playlists",
    requestType: "GET",
    href: "get-all-playlists",
    id: "33",
  },
  {
    apiName: "Get playlist details and items",
    requestType: "GET",
    href: "get-playlist-details-and-items",
    id: "34",
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 flex flex-col w-80 bg-black text-white z-40 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <Link to={"/home"}>
        <h2 className="text-2xl font-semibold flex items-center justify-center h-16 border-b border-r border-gray-700">
          API Endpoints
        </h2>
      </Link>
      <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-800 h-32 overflow-y-scroll flex-1 border-r border-gray-700 max-h-screen">
        <ul className="mt-4 px-4">
          {apiReference.map((apiref) => (
            <NavLink to={apiref.href} key={apiref.id} onClick={toggleSidebar}>
              <li
                key={apiref.id}
                className="hover:bg-gray-800 flex justify-between items-center p-2 rounded-lg border-b border-gray-700"
              >
                <span className="text-gray-200">{apiref.apiName}</span>
                <span className="px-2 py-1 text-xs font-semibold text-green-900 bg-green-500 rounded-lg">
                  {apiref.requestType}
                </span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
