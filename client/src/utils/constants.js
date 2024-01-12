export const URL = "http://127.0.0.1:8080";

export const filterShiftsByArea = (shifts, area) => {
  // console.log(shifts);
  return shifts.filter((shift) => shift.area === area);
};

export const groupShiftsByDate = (shifts) => {
  const groupedShifts = shifts.reduce((group, shift) => {
    const date = new Date(shift.startTime).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
    if (!group[date]) {
      group[date] = [];
    }
    group[date].push(shift);
    return group;
  }, {});

  const groupArrays = Object.keys(groupedShifts).map((date) => {
    return {
      date,
      count: groupedShifts[date],
    };
  });

  return groupArrays;
};

export const calculatedTime = (time) => {
  const formatTime = new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });
  return formatTime;
};
