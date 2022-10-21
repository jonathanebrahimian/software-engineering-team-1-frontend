import { Navigate, useRoutes } from "react-router-dom";
// import { LandingPage } from "./pages/LandingPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import Page404 from "./pages/Page404";

// ----------------------------------------------------------------------

// export default function Router(changeDark: boolean) 

const Router: React.FC<{ changeDark: any }> = ({ changeDark }) => {
	return useRoutes([
		{
			path: "/",
			element: <LandingPage changeDark={changeDark} />,
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
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
}
export default Router