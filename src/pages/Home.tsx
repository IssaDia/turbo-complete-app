import "../App.css";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Spinner from "../components/spinner/Spinner";

const App: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_TURBO_COMPLETE_API_URL}`,
        {
          method: "POST",
          body: keyword,
        }
      );

      if (response.ok) {
        setLoading(false);
        const data = await response;
        console.log("API response:", data);

        setDescription(data.description);
      } else {
        setLoading(false);
        console.error("Error:", response.statusText);
      }
    } catch (error: any) {
      if (error instanceof Error) {
        setLoading(false);
        console.error("Error:", error.message);
      } else {
        setLoading(false);
        console.error("Unknown error occurred:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Turbo Complete 🚀</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Write the product you want a description for
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={handleTextChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div>{loading ? <Spinner /> : description && <p>{description}</p>}</div>
      </form>
    </div>
  );
};

export default App;
