import dayjs from "dayjs";

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

const getDateString = (datetime) => {
  const formattedDate = dayjs(datetime).format("MMMM D, YYYY [at] h:mm A");
  return formattedDate;
};

const getDateSplitString = (datetime) => {
  const date = dayjs(datetime).format("DD");
  const month = dayjs(datetime).format("MMM");
  const year = dayjs(datetime).format("YYYY");
  const time = dayjs(datetime).format("h:mm A");
  return { date, month, year, time };
};

export { getDate, getDateString, getDateSplitString };
