import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { HomeContext } from "../contexts/HomeContext";

const Wrapper = styled.div`
	background-color: red;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	input{
		padding: 5px;
		font-size: 20px;
		border-radius: 10px 0 0 10px;
		border:none;
	}
	button{
		font-size: 20px;
		padding: 4px;
	}
	.logo{
		font-size: 30px;
		color: black;
	}
	.nav{
		font-size: 20px;
		color: white;
		/* background-color: green; */
		width: 40%;
		display: flex;
		justify-content: space-between;
	}
`
export default function SearchBar() {
	let [inputval, setInputVal] = useState("")
	const navigator = useNavigate()
	const { searchQuery } = useParams();
	const { setHomeData } = useContext(HomeContext)

	return (
		<Wrapper>
			<Link to="/" className="logo">DeYT</Link>
			<div className="nav">
				<Link to="/categories/action film" >Action film</Link>
				<Link to="/categories/cartoon">Cartoon</Link>
				<Link to="/categories/music">Music</Link>
			</div>
			<form onSubmit={e => {
				e.preventDefault();
				setHomeData(inputval)
				navigator(`/search/${inputval}`)
			}}>
				<input type={"text"} value={inputval} onChange={(e) => setInputVal(e.target.value)} />
				<button type="submit" disabled={inputval !== "" || inputval !== searchQuery ? false : true}>Search</button>
			</form>
			{/* <Link to={`search/${inputval}`}>Search</Link> */}
		</Wrapper>
	)
}