import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import storageUtil from "../utils/storageUtil";


export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto;
	grid-template-columns: ${props => {
		switch (props.numOfColumn) {
			case 1:
				return "auto";
			case 2:
				return "auto auto";
			case 3:
				return "auto auto auto";
			case 4:
				return "auto auto auto auto";
			default:
				break;
		}
	}};
	gap: 10px;
	/* grid-auto-rows: 1fr; */
	/* grid-auto-flow: row; */

	.video-item{
		height: 100%;
		color: black; 
		/* background: lightblue;  */
		padding: 0; 
		margin: 10px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		img{
			border-radius: 10px;
		}
	}
`

export default function VideoList({ searchKey, initData, numOfColumn }) {
	// let [data, setData] = useState(storageUtil.local.get("videos"))
	let [data, setData] = useState(initData)

	useEffect(() => {
		if (data == null) {
			axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${searchKey}&key=${process.env.REACT_APP_YT_API_KEY}`)
				.then(res => {
					const resData = res.data.items;
					setData(resData);
					// storageUtil.local.add("videos", resData)
				}).catch(error => console.log(error))

		}

		return
	}, [data, searchKey])
	// console.log(homeData);
	// console.log(data2);


	return (
		<Wrapper numOfColumn={numOfColumn}>
			{data && data.map((item) => {
				const snippet = item.snippet;
				const videoTitle = snippet.title;
				const thumbnails = snippet.thumbnails
				return (
					<Link key={item.id.videoId} to={`/watch/${item.id.videoId}`}>
						<div className="video-item" >
							<img src={thumbnails.high.url} alt={videoTitle} width="100%" />
							<h3>{videoTitle}</h3>
							{/* <p>{snippet.description}</p> */}
						</div>
					</Link>
				)
			})}
		</Wrapper>
	)
}