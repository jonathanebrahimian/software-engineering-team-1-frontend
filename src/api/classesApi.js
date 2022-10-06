export const fetchClasses = async () => {
  const res = await fetch("http://localhost:5000/classes");
  const data = await res.json();
  return data;
}