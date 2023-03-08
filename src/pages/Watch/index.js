import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import VideoList from "../../components/VideoList";
import { HomeContext } from "../../contexts/HomeContext";

const HorFlex = styled.div`
	display: flex;
	iframe{

		flex: 0 0 80%;
	}
	
`;
export default function WatchPage() {
	let { videoId } = useParams();
	const { homeData } = useContext(HomeContext)

	return (
		<HorFlex>
			<iframe width="100%" height={"510px"}
				src={`https://youtube.com/embed/${videoId}`}
				title="YouTube video player" frameborder="0"
				allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
			<div className="other-video">
				<VideoList key={homeData} searchKey={homeData} numOfColumn={1} />
			</div>
		</HorFlex>
	)
}