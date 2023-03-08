import { createBrowserRouter } from "react-router-dom";
import CategoriesPage from "./pages/Categories";
import ChannelPage from "./pages/Channel";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import Template from "./pages/Template";
import WatchPage from "./pages/Watch";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Template />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/channel',
				element: <ChannelPage />
			},
			{
				path: '/watch/:videoId',
				element: <WatchPage />
			},
			{
				path: '/search/:searchQuery',
				element: <SearchPage />
			},
			{
				path: '/categories/:categoryName',
				element: <CategoriesPage />,
				// loader: ({ params }) => <CategoriesPage name={params.categoryName} />,
			},
		]
	}
])

export default router;