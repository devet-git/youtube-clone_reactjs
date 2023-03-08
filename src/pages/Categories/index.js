import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoList from "../../components/VideoList";

export default function CategoriesPage() {
	let { categoryName } = useParams()
	// let [searchKey, setSearch] = useState()
	// useEffect(() => {
	// 	// setSearch(param.categoryName)
	// }, [categoryName])
	return (

		<VideoList key={categoryName} searchKey={categoryName} />

	)
}