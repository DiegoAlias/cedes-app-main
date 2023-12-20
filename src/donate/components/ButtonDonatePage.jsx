import { AiFillHeart } from "react-icons/ai";

export const ButtonDonatePage = ({isLoading}) => {
  return (
    <div>
      <button
        type="submit"
        className="bg-violet-700 text-white p-4 rounded-full w-40 hover:bg-violet-900 hover:text-white my-4 font-bold text-lg flex items-center justify-center mx-auto"
        disabled= {isLoading}
      >
        <AiFillHeart className="w-6 h-6 mr-1 mt-1" />
        <span className="ml-1">
          {isLoading? "Cargando..": "DONAR"}          
        </span>
      </button>
    </div>
  );
};
