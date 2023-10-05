import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function MainNavigation() {
	const token = useRouteLoaderData("root");
	// console.log(token);

	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/events"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Events
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/newsletter"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Newsletter
						</NavLink>
					</li>
					{!token && (
						<li>
							<NavLink
								to="/auth?mode=login"
								className={({ isActive }) =>
									isActive ? classes.active : undefined
								}
							>
								Login
							</NavLink>
						</li>
					)}
					{token && (
						<li>
							<Form method="POST" action="/logout">
								<button>
									Logout{" "}
									<FontAwesomeIcon icon={faSignOutAlt} />
								</button>
							</Form>
						</li>
					)}
				</ul>
			</nav>
			<NewsletterSignup />
		</header>
	);
}

export default MainNavigation;
