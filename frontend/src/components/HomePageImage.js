import { useNavigate } from "react-router-dom";
import image from "../assets/booking_schedule_isometric_illustration-05-removebg-preview.png";
import classes from "./HomePageImage.module.css";

const HomePageImage = () => {
	const navigate = useNavigate();
	return (
		<div className={classes.container}>
			<img
				src={image}
				alt="events image"
				onClick={() => navigate("/events")}
			></img>
		</div>
	);
};

export default HomePageImage;
