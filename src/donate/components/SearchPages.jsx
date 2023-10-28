import { SearchAlt2 } from "react-icons/bs";

export const SearchPages = () => {
  return (
    <div>
      <input
        type=" text"
        placeholder="Buscar"
        className="mt-4 ml-4 p-2 border border-gray-400 bg-white rounded-lg"
      />
      <button className="ml-4 border border-white rounded-lg text-white bg-blue-500 hover:bg-sky-700">
        <SearchAlt2 className="bg-transparent" />
      </button>
    </div>
  );
};
