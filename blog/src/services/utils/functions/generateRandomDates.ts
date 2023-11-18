const months = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

export const generateRandomDates = function randomDate(start: Date, end: Date) {
  const generatedDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  const day =
    generatedDate.getDay() != 0 ? generatedDate.getDay() : new Date().getDay();
  const month = months[generatedDate.getMonth()];
  const year = generatedDate.getFullYear();

  return `${day} de ${month}, ${year}`;
};
