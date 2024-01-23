import React, { useState } from "react";
import coverImage from "../images/coverImage.png";
import AddSubject from "./AddSubject";
import Navbar from "./Navbar";
import ScheduleItem from "./ScheduleItem";
import TopContent from "./TopContent";
import cycleArrow from "../images/cycleArrow.svg";

const Schedule = () => {
  const predefinedTimes = [
    "7:00 - 8:30",
    "8:30 - 10:15",
    "10:15 - 12:00",
    "12:00 - 14:00",
  ];

  const [selectedTimes, setSelectedTimes] = useState([]);

  return (
    <div className="flex flex-col">
      <div id="coverImage">
        <img
          className="object-cover w-full"
          src={coverImage}
          alt="coverImage"
        />
        <div className="flex absolute top-5 right-5 bg-[#FFFFFF] p-2 cursor-pointer">
          <img src={cycleArrow} alt="circle arrow" />
          <p className="text-[#222222] pl-2">Change program cover</p>
        </div>
      </div>
      <div id="mainContent-wrapper" className="bg-[#F7F8FA] h-full">
        <div
          id="mainContent"
          className="bg-white -mt-14 md:-mt-40  ml-8 mr-8 rounded-md"
        >
          <TopContent />
          <Navbar />
          <div id="add-subject-container" className="flex flex-col md:mx-12">
            {predefinedTimes.map((time, index) => (
              <div key={index}>
                {selectedTimes.includes(time) ? (
                  <ScheduleItem key={time} time={time} />
                ) : (
                  <AddSubject
                    time={time}
                    onAddSubject={() =>
                      setSelectedTimes([...selectedTimes, time])
                    }
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
