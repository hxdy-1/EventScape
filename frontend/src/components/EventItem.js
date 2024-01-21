import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

function formatDate(dateString) {
	const options = { day: "2-digit", month: "2-digit", year: "numeric" };
	const [day, month, year] = new Date(dateString)
		.toLocaleDateString("en-GB", options)
		.split("/");

	return `${day}-${month}-${year}`;
}

function EventItem({ event }) {
	const token = useRouteLoaderData("root");
	const submit = useSubmit();

	function startDeleteHandler() {
		const proceed = window.confirm("Are you sure?");

		if (proceed) {
			submit(null, { method: "delete" });
		}
	}

	return (
		<article className={classes.event}>
			<img src={event.image} alt={event.title} />
			<h1>{event.title}</h1>
			{/* <time>{event.date}</time> */}
			<time>{formatDate(event.date)}</time>
			<p>{event.description}</p>
			{token && (
				<menu className={classes.actions}>
					<Link to="edit">Edit</Link>
					<button onClick={startDeleteHandler}>Delete</button>
				</menu>
			)}
		</article>
	);
}

export default EventItem;
