import moment from "moment";

export default function formateDate(value) {
  const date = moment(value);
  if (!date.isValid()) return "Некорректная дата";

  const diffHours = moment().diff(date, "hours");
  const diffDays = moment().diff(date, "days");

  if (diffHours === 0) return "12 минут назад";
  if (diffHours > 0 && diffDays === 0) return "5 часов назад";
  if (diffDays > 0) return `${diffDays} дней назад`;
}
