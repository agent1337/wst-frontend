import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./scheduleStyles";
import { main } from '../../colors';

const initial = [
  { day: "Monday", hours: [] },
  { day: "Tuesday", hours: [] },
  { day: "Wednesday", hours: [] },
  { day: "Thursday", hours: [] },
  { day: "Friday", hours: [] },
  { day: "Saturday", hours: [] },
  { day: "Sunday", hours: [] },
];

const initialProgressShift = { day: '', start: null, end: null }

const Schedule = () => {
  let startedTime = 0;
  const [progressShift, setProgressShift] = useState(initialProgressShift)
  const [toDelete, setToDelete] = useState(initialProgressShift)
  const [schedules, setSchedules] = useState(initial);
  const times = [...Array(48).keys()];

  useEffect(() => {
    let schedulesData = [
      { day: "Monday", shifts: [] },
      { day: "Tuesday", shifts: [] },
      { day: "Wednesday", shifts: [] },
      { day: "Thursday", shifts: [] },
      { day: "Friday", shifts: [] },
      { day: "Saturday", shifts: [] },
      { day: "Sunday", shifts: [] },
    ];

    let clonedSchedules = [...schedules];

    clonedSchedules.forEach((schedule) => {
      schedule.hours = Array(48).fill(false);
      schedulesData.forEach((scheduleData) => {
        if (schedule.day === scheduleData.day) {
          scheduleData.shifts.forEach((shift) => {
            schedule.hours.forEach((hour, key) => {
              if (shift.start <= key && shift.end >= key) {
                schedule.hours[key] = true;
              }
            });
          });
        }
      });
    });

    setSchedules(clonedSchedules);
  }, [setSchedules]);

  const handleMouseDown = (day, hourIndex) => {
    setProgressShift({ day, start: hourIndex, end: hourIndex })
  }

  const handleMouseMove = (hourIndex) => {
    if (progressShift.start === null) return
    setProgressShift(prev => ({ ...prev, end: hourIndex }))
  }

  const handleMouseUp = () => {
    const clonedSchedules = JSON.parse(JSON.stringify(schedules))
    let findSched = clonedSchedules.find(schedule => schedule.day === progressShift.day).hours
    for (let i = Math.min(progressShift.start, progressShift.end); i <= Math.max(progressShift.end, progressShift.start); i++) {
      findSched[i] = true;
    }
    setSchedules(clonedSchedules)
    setProgressShift(initialProgressShift)
  }

  const handleClick = (day, hourIndex) => {
    let findSched = day.hours

    if (findSched[hourIndex]) {
      while (findSched[hourIndex]) {
        hourIndex--
      }
      hourIndex++

      const start = hourIndex

      while (findSched[hourIndex]) {
        hourIndex++
      }
      hourIndex--

      const end = hourIndex
      setToDelete({ day: day.day, start, end })
    }
  }

  const deleteSchedule = (e) => {
    e.stopPropagation()

    const clonedSchedules = JSON.parse(JSON.stringify(schedules))
    let findSched = clonedSchedules.find(schedule => schedule.day === toDelete.day).hours;
    
    for (let i = toDelete.start; i <= toDelete.end; i++) {
      findSched[i] = false;
    }

    setSchedules(clonedSchedules)
    setToDelete(initialProgressShift)
  }

  return (
    <>
      <Typography sx={{ ...styles.fieldTitle, }}>
        DESIRABLE WORKSHIFT
      </Typography>
      <Box sx={{ ...styles.container }} >
        <Box sx={styles.block}>
          <Box sx={styles.times}>
            {times.map((t, timeIndex) => {
              if (timeIndex % 2) {
                if (timeIndex > 1) {
                  startedTime++;
                }
                return (
                  <Typography sx={styles.time} key={timeIndex}>
                    {startedTime.toString().padStart(2, "0")}
                  </Typography>
                );
              }
            })}
          </Box>
        </Box>

        {schedules.map((schedule, scheduleIndex) => {
          return (
            <Box
              key={scheduleIndex}
              sx={{ ...styles.schedule, }}
            >
              <Box sx={{ width: "15%" }}>
                <Typography sx={{ paddingTop: "8px" }}>
                  {schedule.day}
                </Typography>
              </Box>

              <Box sx={styles.hoursBlock}>
                {schedule.hours.map((hour, hourIndex) => {
                  let activeStyle = hour ||
                    (progressShift.day === schedule.day && hourIndex <= Math.max(progressShift.end, progressShift.start)
                      && hourIndex >= Math.min(progressShift.start, progressShift.end))
                    ? `${main}` : 'transparent'
                  return (
                    <div
                      key={hourIndex}
                      style={styles.hourItem}
                      onClick={() => handleClick(schedule, hourIndex)}
                      value={hourIndex}
                      onMouseDown={() => handleMouseDown(schedule.day, hourIndex)}
                      onMouseEnter={() => handleMouseMove(hourIndex)}
                      onMouseUp={() => handleMouseUp()}
                    >
                      <div style={{
                        ...styles.pickedBlock,
                        background: activeStyle,
                        opacity: (toDelete.day === schedule.day && hourIndex <= toDelete.end && hourIndex >= toDelete.start) ? '0.5' : '1'
                      }}></div>

                      {toDelete.day === schedule.day && hourIndex === toDelete.end
                        ? <button style={styles.removeButton} onClick={(e) => deleteSchedule(e)}><img src="../../action/delete.png" alt="" /></button>
                        : null
                      }
                    </div>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* <Box sx={styles.mobileView}>
        <Box sx={styles.mobileTimes}>
          <Box>
            {times.map((t, timeIndex) => {
              return (
                <Typography sx={styles.time} key={timeIndex}>
                  {t}
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Box sx={styles.schedulesContent}>
          {schedules.map((schedule, scheduleIndex) => {
            let day = schedule.day.substr(0, 3);
            return (
              <Box key={scheduleIndex} sx={styles.mobileSchedule}>
                <Box sx={{ marginBottom: "8px" }}>
                  <Typography>{day}</Typography>
                </Box>

                <Box>
                  {schedule.hours.map((hour, hourIndex) => {
                    return (
                      <Box
                        key={hourIndex}
                        sx={styles.hourItemMob}
                        style={
                          hour
                            ? { background: "#29CC8F", color: "transparent" }
                            : {
                                background: "transparent",
                                color: "transparent",
                              }
                        }
                        onClick={() => handleClick(scheduleIndex, hourIndex)}
                      >
                        {hour}12
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box> */}
    </>
  );
};

export default Schedule;
