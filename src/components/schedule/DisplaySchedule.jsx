import React from "react";
import { main } from "colors";
import "./schedule.styles.css";

export default function DisplaySchedule({ schedules }) {
  const times = [...Array(48).keys()];
  let startedTime = 0;
  return (
    <div className="container">
      <div className="block">
        <div className="times">
          {times.map((t, timeIndex) => {
            if (timeIndex % 2) {
              if (timeIndex > 1) {
                startedTime++;
              }
              return (
                <p className="time" key={timeIndex}>
                  {startedTime.toString().padStart(2, "0")}
                </p>
              );
            }
          })}
        </div>
      </div>

      {schedules.map((schedule, scheduleIndex) => {
        return (
          <div key={scheduleIndex} className="schedule">
            <div style={{ width: "11%" }}>
              <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
                {schedule.day}
              </p>
            </div>

            <div className="hoursBlock">
              {schedule.hours.map((hour, hourIndex) => {
                return (
                  <div key={hourIndex} className="hourItem" value={hourIndex}>
                    <div
                      className="pickedBlock"
                      style={{ background: hour ? `${main}` : "transparent" }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
