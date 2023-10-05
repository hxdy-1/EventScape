import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";

function RootLayout() {
	const token = useLoaderData();
	const submit = useSubmit();
	useEffect(() => {
		if (!token) {
			return;
		}

		if (token === "EXPIRED") {
			submit(null, { method: "POST", action: "/logout" });
			return;
		}

		const tokenDuration = getTokenDuration();
		console.log(tokenDuration);

		setTimeout(() => {
			submit(null, { method: "POST", action: "/logout" });
		}, tokenDuration);
	}, [token, submit]);

	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
