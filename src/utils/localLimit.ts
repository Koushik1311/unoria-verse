import { DateTime } from "luxon";

export function getRequestCountToday(): number {
  const today = DateTime.now().toISODate();
  const record = localStorage.getItem("unoriaverse:requestCount");

  if (!record) return 0;

  const [storeData, countStr] = record.split(":");
  if (storeData !== today) return 0;

  return parseInt(countStr, 10) || 0;
}

export function incrementRequestCountToday(): void {
  const today = DateTime.now().toISODate();
  const count = getRequestCountToday() + 1;
  localStorage.setItem("unoriaverse:requestCount", `${today}:${count}`);
}
