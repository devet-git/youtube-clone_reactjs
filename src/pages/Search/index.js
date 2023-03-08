import { useParams } from "react-router-dom"
import VideoList from "../../components/VideoList";


export default function SearchPage() {
	const { searchQuery } = useParams();
	return <VideoList key={searchQuery} searchKey={searchQuery} />
}