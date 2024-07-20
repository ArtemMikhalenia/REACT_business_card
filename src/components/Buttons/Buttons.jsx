import email from "../../assets/email-icon.svg";
import linkedin from "../../assets/linkedin-icon.svg";
import "./buttons.css";

export default function Buttons() {
	return (
		<div className="buttons-block">
			<a href="#" className="button-link email-button">
				<img src={email} alt="email-icon" />
				Email
			</a>
			<a href="#" className="button-link linkedin-button">
				<img src={linkedin} alt="linkedin-icon" />
				LinkedIn
			</a>
		</div>
	);
}
