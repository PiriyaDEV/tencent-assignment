import moment from "moment";

const getDate = (date, time) => {
  try {
    // date: yyyy-mm-dd
    // time: 04:45 PM
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (date && time && dateRegex.test(date)) {
      const [year, month, day] = date.split("-");
      const [hours, minutes] = time.split(":").map((t) => parseInt(t));
      const isPM = time.split(" ")[1] === "PM";
      const adjustedHours = isPM ? hours + 12 : hours;

      return new Date(year, month - 1, day, adjustedHours, minutes);
    } else {
      throw new Error("Invalid date or time format.");
      // or return null;
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
