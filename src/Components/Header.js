import { useRef } from "react";
import { FaBars, FaTimes,FaCode,FaHome ,FaList,FaQuestion} from "react-icons/fa";
import "./Header.css";

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <div className="logo-container">
            <FaCode size={40} />
			<h3>Problem Share</h3>
            </div>
			<nav ref={navRef}>
			<FaHome size={20} /><a href="/">Home</a>
			<FaList size={20} /><a href="/listProblem">Problem list</a>
			<FaQuestion size={20} /><a href="/addproblem">Ask a question</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;