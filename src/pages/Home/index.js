import VideoList from "../../components/VideoList";
import storageUtil from "../../utils/storageUtil";

// export default function HomePage() {
// 	let [data, setData] = useState(storageUtil.local.get("videos"))

// 	useEffect(() => {
// 		// setData2(storageUtil.local.get("d"))

// 		if (data == null) {
// 			axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000&q=chatgpt&key=${process.env.REACT_APP_YT_API_KEY}`)
// 				.then(res => {
// 					const resData = res.data.items;
// 					setData(resData);
// 					storageUtil.local.add("videos", resData)
// 				}).catch(error => console.log(error))

// 		}

// 		return
// 	}, [data])
// 	// console.log(homeData);
// 	// console.log(data2);


// 	return (
// 		<Wrapper>
// 			{data ? data.map((item, index) => {
// 				const snippet = item.snippet;
// 				const videoTitle = snippet.title;
// 				const thumbnails = snippet.thumbnails
// 				return (

// 					<Link key={item.id.videoId} to={`watch/${item.id.videoId}`}>
// 						<div className="video-item" >
// 							<img src={thumbnails.high.url} alt={videoTitle} width="100%" />
// 							<h3>{videoTitle}</h3>
// 							{/* <p>{snippet.description}</p> */}
// 						</div>
// 					</Link>

// 				)
// 			}) : <h1>haha</h1>}
// 		</Wrapper>
// 	)
// }


export default function HomePage() {
	return <VideoList searchKey={"learn react js"} initData={storageUtil.local.get("videos")} />
}