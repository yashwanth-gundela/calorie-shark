import React, { useState } from "react";
import axios from "axios";

function NewForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/core/api/", {
        text: inputValue,
      });

      // Handle successful response
      console.log("Success:", response.data);
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center">
      <h1 className="text-2xl py-2">This is the Calorie Intake Form</h1>
      <form
        className="flex flex-col justify-center bg-gradient-to-tr from-cyan-300 via-purple-100 to-blue-300 border border-black dark:border-purple-950 rounded-xl w-1/3 px-4 py-6 h-1/2"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label className="relative inline-flex items-center mb-2 text-m font-small dark:text-black">
            Enter your Calorie Details
          </label>
        </div>
        <div className="mb-5 justify-center overflow-auto ">
          <input
            className="mb-2 relative inline-flex items-center  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 w-max p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter The Food You Ate!"
            value={inputValue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5 overflow-auto ">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewForm;
