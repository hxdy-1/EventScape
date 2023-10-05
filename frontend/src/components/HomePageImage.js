import image from "../assets/booking_schedule_isometric_illustration-05-removebg-preview.png";
import classes from "./HomePageImage.module.css";

const HomePageImage = () => {
	return (
		<div className={classes.container}>
			<img src={image} alt="events image"></img>
		</div>
	);
};

export default HomePageImage;
