import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function AllReviews() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8020/review/")
      .then((response) => {
        if (response) {
          setItems(response.data);
        } else {
          toast.error("Error While Fetching Data!!");
        }
      })
      .catch((error) => toast.error(error));
  }, [items]);

  return (
    <section className="table-auto overflow-y-scroll h-screen pb-10">
      <div className="w-full bg-gray-100 py-10 text-center">
        <h1 className="text-2xl">User Details</h1>
      </div>

      <div className=" px-10 mt-10 ">
        <div class=" shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-400 dark:text-gray-300 ">
            <thead class="text-xs text-white-800 uppercase bg-blue-500 dark:bg-blue-900 dark:text-white-400">
              <tr>
                <th scope="col" class="px-6 py-3 ">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Agency Id
                </th>
                <th scope="col" class="px-6 py-3">
                Rating Out of 5
                </th>
                <th scope="col" class="px-6 py-3">
                  Review
                </th>
                <th scope="col" class="px-6 py-3">
                  User Id
                </th>
             
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr class="bg-white border-b dark:bg-gray-100 dark:border-gray-200 hover:bg-gray-10 dark:hover:bg-gray-200">
                  <td scope="row" class="px-6 py-4   dark:text-black">
                    {item.date}
                  </td>
                  <td class="px-6 py-4 dark:text-black ">{item.agencyId}</td>
                  <td class="px-6 py-4 dark:text-black">{item.rating}/5</td>
                  <td class="px-6 py-4 dark:text-black">{item.review}</td>
                  <td class="px-6 py-4 dark:text-black">{item.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
