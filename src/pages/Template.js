import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Template() {
	return (
		<>
			<SearchBar />
			<Outlet />
		</>
	)
}