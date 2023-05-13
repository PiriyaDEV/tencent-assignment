import moment from "moment";

const getDate = (date, time) => {
  try {
    // date: yyyy-mm-dd
    // time: 04:45 PM
    if (date && time) {
      const [year, month, day] = date.split("-");
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
  const formattedDate = moment(datetime).format("MMMM D, YYYY [at] h:mm A");
  return formattedDate;
};

const getDateSplitString = (datetime) => {
  const date = moment(datetime).format("DD");
  const month = moment(datetime).format("MMM");
  const year = moment(datetime).format("YYYY");
  const time = moment(datetime).format("h:mm A");
  return { date, month, year, time };
};

export { getDate, getDateString, getDateSplitString };
