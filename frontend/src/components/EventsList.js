// import { useLoaderData } from 'react-router-dom';
import { Link } from "react-router-dom";

import classes from "./EventsList.module.css";

function formatDate(dateString) {
	const options = { day: "2-digit", month: "2-digit", year: "numeric" };
	const [day, month, year] = new Date(dateString)
		.toLocaleDateString("en-GB", options)
		.split("/");

	return `${day}-${month}-${year}`;
}

function EventsList({ events }) {
	// const events = useLoaderData();
	// console.log(events);
	// console.log(events?.date);
	return (
		<div className={classes.events}>
			<h1>All Events</h1>
			<ul className={classes.list}>
				{events.map((event) => (
					<li key={event._id} className={classes.item}>
						<Link to={`/events/${event._id}`}>
							<img src={event.image} alt={event.title} />
							<div className={classes.content}>
								<h2>{event.title}</h2>
								{/* <time>{event.date}</time> */}
								<time>{formatDate(event.date)}</time>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default EventsList;
