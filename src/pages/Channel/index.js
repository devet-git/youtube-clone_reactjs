import { useContext, useEffect } from "react"
import { HomeContext } from "../../contexts/HomeContext"

export default function ChannelPage() {
	const { homeData } = useContext(HomeContext)
	useEffect(() => {
		console.log(homeData);
	})
	return (
		<h1>ChanelPage</h1>
	)
}