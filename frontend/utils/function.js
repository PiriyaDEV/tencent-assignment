const getDate = (date, time) => {
  try {
    // date: m/d/yyyy
    // time: 04:45 PM
    if (date && time) {
      const [month, day, year] = date.split("/");
      const [hours, minutes] = time.split(":").map((t) => parseInt(t));
      const isPM = time.split(" ")[1] === "PM";
      const adjustedHours = isPM ? hours + 12 : hours;

      return new Date(year, month - 1, day, adjustedHours, minutes);
    }
  } catch (error) {
    console.error(error);
  }
};

export { getDate };
