import { ReactSVG } from "react-svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import todoList from "../assets/images/icon-todo.svg";
import calender from "../assets/images/icon-calendar.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planing from "../assets/images/icon-planning.svg";
import { useEffect, useState } from "react";

const DropdownFeatures = () => {
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
        Features{" "}
        {isOpen ? (
          <ReactSVG src={arrowUp} className="mt-2.5 ml-1" />
        ) : (
          <ReactSVG src={arrowDown} className="mt-2.5 ml-1" />
        )}
      </button>
      {isOpen && (
        <ul className="lg:absolute bg-white px-6 py-3 rounded-md space-y-2 lg:-ml-[75px] mt-3 shadow">
          <li className="flex items-center gap-2.5">
            {" "}
            <ReactSVG src={todoList} />
            Todo List
          </li>
          <li className="flex items-center gap-2.5">
            <ReactSVG src={calender} /> Calendar
          </li>
          <li className="flex items-center gap-2.5">
            <ReactSVG src={reminders} />
            Reminders
          </li>
          <li className="flex items-center gap-2.5">
            <ReactSVG src={planing} />
            Planning
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownFeatures;
