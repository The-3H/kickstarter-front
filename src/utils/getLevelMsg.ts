export default function getLevelMsg(level: number) {
  if (level === 1) return "Optimala Foods";
  if (level === 2) return "Generally Good Food";
  if (level === 3) return "Neutral Food";
  if (level === 4) return "Food to Limit";
  if (level === 5) return "Food to Avoid";
  return "NULL";
}
