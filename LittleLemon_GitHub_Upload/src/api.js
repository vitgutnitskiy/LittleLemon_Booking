/** Local demo API. Replace with a server integration for production. */
const ALL_SLOTS = ['17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'];
export function fetchAPI(date) {
  if (!date || Number.isNaN(new Date(`${date}T12:00:00`).getTime())) return [];
  const day = new Date(`${date}T12:00:00`).getDate();
  return ALL_SLOTS.filter((_, index) => (day + index * 3) % 5 !== 0);
}
export function submitAPI(booking) {
  return Boolean(booking?.date && booking?.time && booking?.guests && booking?.name && booking?.email);
}
