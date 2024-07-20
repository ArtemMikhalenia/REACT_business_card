import twitter from "../../assets/twitter-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import instagram from "../../assets/instagram-icon.svg";
import github from "../../assets/github-icon.svg";
import "./links.css";

export default function Links() {
	return (
		<div className="links-container">
			<div className="links-block">
				<a href="#" className="link twitter-link">
					<img src={twitter} alt="twitter-icon" />
				</a>
				<a href="#" className="link facebook-link">
					<img src={facebook} alt="facebook-icon" />
				</a>
				<a href="#" className="link instagram-link">
					<img src={instagram} alt="instagram-icon" />
				</a>
				<a href="#" className="link github-link">
					<img src={github} alt="github-icon" />
				</a>
			</div>
		</div>
	);
}
