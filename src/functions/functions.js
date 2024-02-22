export function formatDate(inputDate) {
    const months = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec.",
    ];
    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${months[parseInt(month, 10) - 1]} ${parseInt(
      day,
      10
    )}, ${year}`;
    return formattedDate;
  }