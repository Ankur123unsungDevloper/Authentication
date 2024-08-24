export const formateDate = (dateString) => {
  const date = new Date(dateString);
  
  // Handle invalid date strings gracefully by checking if the date object is valid
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
    hour12: true,
  });
};