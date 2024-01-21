import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { BASE_URL } from "../env";
console.log(BASE_URL);

function AuthenticationPage() {
	return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams;
	const mode = searchParams.get("mode") || "login";

	if (mode !== "login" && mode !== "signup") {
		throw json({ message: "This mode is not supported" }, { status: 422 });
	}

	const data = await request.formData();
	const authData = {
		email: data.get("email"),
		password: data.get("password"),
	};

	const response = await fetch(BASE_URL + mode, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(authData),
	});

	if (response.status === 422 || response.status === 401) {
		return response;
	}

	if (!response.ok) {
		throw json(
			{ message: "Couldn't authenticate the user" },
			{ status: 500 }
		);
	}

	const resData = await response.json();
	const token = resData.token;

	localStorage.setItem("token", token);

	const expiration = new Date();
	expiration.setHours(expiration.getHours() + 1);
	localStorage.setItem("expiration", expiration.toISOString());

	return redirect("/events");
};
