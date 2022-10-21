import * as React from 'react';
import { useState } from 'react';
import ThemeConfig from '../theme';
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import AdminPage from "./AdminPage";
import Page404 from "./Page404";

import {
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom";

function App() {
	const [dark, setDark] = useState(false);

	function changeMode() {
		setDark(!dark);
	}

	const router = createBrowserRouter([
		{
			path: "/",
			element: <LandingPage changeDark={changeMode} />,
		},
		{
			path: "/admin",
			element: <AdminPage />,
		},
		{
			path: "/login",
			element: <LoginPage />,
		},
		{
			path: "/404",
			element: <Page404 />,
		}
		// { path: "*", element: <Navigate to="/404" replace /> },
	]);



	return (
		<>
			<ThemeConfig darkMode={dark}>
				<RouterProvider router={router} />
			</ThemeConfig>
		</>
	);
}

export default App