export const getDate = (fullDate: string): string => {
  const datePart = fullDate.split("T")[0];
  return datePart;
};

export const getTime = (fullDate: string) => {
  const timePart = fullDate.split("T")[1];
  if (!timePart) return {};

  const timeWithoutZ = timePart.replace("Z", "");
  const [hours, minutes] = timeWithoutZ.split(":");

  const hourNumber = parseInt(hours, 10);
  const suffix = hourNumber >= 12 ? "PM" : "AM";
  const twelveHour = hourNumber % 12 || 12;

  return { time: `${twelveHour}:${minutes}`, suffix: `${suffix}` } as const;
};
