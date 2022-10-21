// When the frontend is running in amplify, use the amplify domain. Otherwise, use json server
const BACKEND_URL = "http://localhost:8000";


export const fetchClasses = async () => {
	const res = await fetch(`${BACKEND_URL}/class`);
	const data = await res.json();
	return data.data;
}

export const fetchClass = async (id: number) => {
	const res = await fetch(`${BACKEND_URL}/class/${id}`);
	const data = await res.json();
	return data;
}