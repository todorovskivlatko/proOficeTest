import React, { useEffect, useState } from "react";
import subjectImage from "../images/subjectImage.png";
import editPenButton from "../images/editPenButton.svg";
import threeDots from "../images/3dots.svg";
import clockIcon from "../images/clockIcon.svg";
import cycleArrow from "../images/cycleArrow.svg";

const ScheduleItem = ({ time }) => {
  const [isChecked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("Some subject title");

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const setTimes = (formattedTime) => {
    const [start, end] = formattedTime.split(" - ");
    setStartTime(start);
    setEndTime(end);
  };

  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setEditMode(false);
  };

  const dynamicTime = `${startTime} - ${endTime}`;
  useEffect(() => {
    setTimes(time);
  }, [time]);

  return (
    <div className="flex flex-col my-4">
      <div id="item-time" className="relative pl-8 mb-6 flex items-center">
        <span className="absolute inline-block w-4 h-4 bg-black rounded-full left-0"></span>
        <p className="text-lg text-[#222222]">{dynamicTime}</p>
      </div>
      <div
        id="leftAndRightContent"
        className="flex flex-col md:flex-row md:pl-8 "
      >
        <div id="left-content" className="flex flex-col w-full md:w-1/3 ">
          <div className="rounded-md relative">
            <img src={subjectImage} alt="subjectImage" />
            <div className="flex absolute bottom-2.5 right-2.5 bg-[#FFFFFF] p-2 cursor-pointer">
              <img src={cycleArrow} alt="circle arrow" />
              <p className="text-[#222222] pl-2">Change subject image</p>
            </div>
          </div>

          <div id="toggle-container">
            <div className="flex items-center space-x-4 rounded bg-[#E9EFFD] mt-8 min-h-[81px] pl-4">
              <label htmlFor={`toggle-${time}`} className="cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id={`toggle-${time}`}
                    className="sr-only"
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                  <div
                    className={`block ${
                      isChecked ? "bg-[#175FFF]" : "bg-[#CCCCCC]"
                    } w-10 h-4 rounded-full`}
                  ></div>
                  <div
                    className={`dot absolute  -top-1 bg-white w-6 h-6 rounded-full transition ${
                      isChecked
                        ? "transform translate-x-full"
                        : "transform translate-x-0"
                    }`}
                    style={{ border: "2px solid #E4E6EB" }}
                  ></div>
                </div>
              </label>
              <span className="text-[#175fff] text-sm ">
                Required Attendance
              </span>
            </div>
            {isChecked && (
              <div className="bg-[#E9EFFD] p-6 border-t">
                <p className="text-sm text-center">
                  <a href="#0">Attendance tracking QR code +</a>
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          id="right-content"
          className="flex flex-col  md:w-2/3 md:px-8 w-full"
        >
          <div id="title-container" className="flex flex-col w-full">
            <p className="text-[14px] text-[#696E7C] pt-2 md:pt-0 pb-2 md:pb-2">
              Subject title
            </p>
            {editMode ? (
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
              />
            ) : (
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 bg-[#30A1FF] rounded"></span>
                <p className="text-2xl text-black">{title}</p>
                <img
                  src={editPenButton}
                  alt="editPenButton"
                  onClick={handleEditButtonClick}
                  className="cursor-pointer"
                />
                <div className="flex flex-1 place-content-end">
                  <img src={threeDots} alt="option" />
                </div>
              </div>
            )}
          </div>

          <div
            id="subject-time"
            className="flex flex-col md:flex-row md:justify-between mt-4"
          >
            <div className="flex flex-col md:w-[45%]">
              <label
                className="block text-[#696e7c] text-[13px] mb-2"
                for="timeSchedule"
              >
                Subject Start Time
              </label>
              <div class="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <img src={clockIcon} alt="clockIcon" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="border border-[#E0E2E8] text-[#222222] text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={startTime}
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col md:w-[45%]">
              <label
                className="block text-[#696e7c] text-[13px] mb-2"
                for="timeSchedule"
              >
                Subject End Time
              </label>
              <div class="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <img src={clockIcon} alt="clockIcon" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="border border-[#E0E2E8] text-[#222222] text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={endTime}
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div id="textArea">
            <div className="mb-4">
              <label
                className="block text-[#696e7c] text-[13px] mb-2"
                htmlFor="textarea"
              >
                Subject Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="textarea"
                placeholder="Type your message here..."
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
