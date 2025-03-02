// Helper function to get weekday in Japanese
export const getJapaneseWeekday = (dateStr: string) => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const date = new Date(dateStr);
  return weekdays[date.getDay()];
};

export const calculateHours = (startTime: string, endTime: string) => {
  const [startHour, startMin] = startTime.split(":").map(Number);
  const [endHour, endMin] = endTime.split(":").map(Number);
  const hours = endHour - startHour + (endMin - startMin) / 60;
  return Number(hours.toFixed(2));
};

export const calculateTax = (amount: number) => amount * 0.1;

