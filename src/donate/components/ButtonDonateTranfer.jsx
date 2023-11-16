import { useState, useEffect } from "react";
import { FaHandPointer, FaCopy, FaCheck } from "react-icons/fa";

export const ButtonDonateTranfer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isUrlVisible, setIsUrlVisible] = useState(false);

  const handleButtonClick = () => {
    setIsUrlVisible(!isUrlVisible);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(document.getElementById("url").textContent);
    setIsCopied(true);
  };

  useEffect(() => {
    let button = document.getElementById("buttonCopy");

    const handleClick = () => {
      handleCopyClick();
    };

    if (button) {
      button.addEventListener("click", handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div>
      <button
        type="submit"
        onClick={handleButtonClick}
        className="bg-blue-700 text-white p-2 rounded-full  hover:bg-blue-900 hover:text-white font-bold text-lg flex items-center justify-center mx-auto px-4"
      >
        <FaHandPointer className="w-5 h-5 mx-2" />
        <span className="ml-1">Transferencia CBU</span>
      </button>
      <div
        className={`url-container ${
          isUrlVisible ? "visible" : ""
        } bg-white px-0.5 mt-4 rounded-lg text-center items-center justify-center`}
      >
        <span id="url">1234567891234567891234</span>
        <button id="buttonCopy" onClick={handleCopyClick}>
          {isCopied ? (
            <FaCheck className="mx-4 w-4 h-4" />
          ) : (
            <FaCopy className="mx-4 w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};
