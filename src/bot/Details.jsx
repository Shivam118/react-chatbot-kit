import React from "react";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dates = (props) => {
  const dispatch = useDispatch();
  const handleDateChange = (e) => {
    props.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        createClientMessage(e.target.value),
        createChatBotMessage("Pick a Time!", {
          widget: "time",
        }),
      ],
    }));
    dispatch({ type: "SET_DATE", payload: e.target.value });
  };
  return <input type="date" onChange={handleDateChange} />;
};

const Time = (props) => {
  const dispatch = useDispatch();
  const handleTimeChange = (e) => {
    props.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        createClientMessage(e.target.value),
        createChatBotMessage("Enter your Name", {
          widget: "name",
        }),
      ],
    }));
    dispatch({ type: "SET_TIME", payload: e.target.value });
  };
  const timeSlots = {
    morning: ["9:00 AM", "10:00 AM", "11:00 AM"],
    afternoon: ["12:00 PM", "1:00 PM", "2:00 PM"],
    evening: ["3:00 PM", "4:00 PM", "5:00 PM"],
  };
  return (
    <div>
      <select onChange={handleTimeChange}>
        <option value="">Select a time</option>
        {Object.keys(timeSlots).map((slot) => {
          return timeSlots[slot].map((time) => {
            return (
              <option key={time} value={time}>
                {time}
              </option>
            );
          });
        })}
      </select>
    </div>
  );
};
const Age = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAgeChange = (e) => {
    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, createChatBotMessage("Thank You!")],
    }));
    dispatch({ type: "SET_AGE", payload: e.target.value });
    setTimeout(() => {
      navigate("/success");
    }, 5000);
  };
  const validAge = [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40,
  ];
  return (
    <div>
      <select onChange={handleAgeChange}>
        <option value="">Select a Age</option>
        {validAge.map((age) => {
          return (
            <option key={age} value={age}>
              {age}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export { Dates, Time, Age };
