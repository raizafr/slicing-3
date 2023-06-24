import { ReactSVG } from "react-svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import { useEffect, useState } from "react";

const DropdownCompany = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <div className="dropdown">
      <button className="flex " onClick={toggleDropdown}>
        Company{" "}
        {isOpen ? (
          <ReactSVG src={arrowUp} className="mt-2.5 ml-1" />
        ) : (
          <ReactSVG src={arrowDown} className="mt-2.5 ml-1" />
        )}
      </button>
      {isOpen && (
        <ul
          className={`lg:absolute bg-white px-6 py-3 rounded-md space-y-2  mt-3 shadow `}
        >
          <li className="flex items-center gap-2.5">History</li>
          <li className="flex items-center gap-2.5">Our Team</li>
          <li className="flex items-center gap-2.5">Blog</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownCompany;
