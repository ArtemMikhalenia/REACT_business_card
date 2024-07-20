import photo from "../../assets/photo.png";
import Buttons from "../Buttons/Buttons";

export default function Info() {
	return (
		<div className="info-block">
			<img src={photo} alt="photo" />
			<h2 className="info-name">Laura Smith</h2>
			<h3 className="info-position">Frontend Developer</h3>
			<a href="#" className="info-link">
				laurasmith.website
			</a>
			<Buttons />
		</div>
	);
}
