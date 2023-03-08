import { createContext, useState } from "react"

export const HomeContext = createContext();
export function HomeContextProvider({ children }) {
	let [homeData, setHomeData] = useState("");
	return (
		<HomeContext.Provider value={{ homeData, setHomeData }}>
			{children}
		</HomeContext.Provider>
	)
}