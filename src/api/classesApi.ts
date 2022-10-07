export const fetchClasses = async () => {
	const res = await fetch(`http://localhost:5000/classes`);
	const data = await res.json();
	return data;
}

export const fetchClass = async (id: number) => {
	const res = await fetch(`http://localhost:5000/classe/${id}`);
	const data = await res.json();
	return data;
}