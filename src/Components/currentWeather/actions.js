export const weatherDetails = (locationData, currentData) => {
  const time = new Date(locationData.localtime);
  const formattedDate = time.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return {
    city: locationData.name,
    country: locationData.country,
    mood: currentData.condition.text,
    day: time.toLocaleString("en-Us", { weekday: "long" }),
    date: formattedDate,
    temp: currentData.temp_c,
    icon: currentData.condition.icon,
    humidity: currentData.humidity,
    wind: currentData.wind_kph,
    precipitation: currentData.precip_mm,
  };
};
