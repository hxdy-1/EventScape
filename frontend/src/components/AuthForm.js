import {
	Form,
	Link,
	useActionData,
	useNavigation,
	useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
	const [searchParams] = useSearchParams();
	const actionData = useActionData();
	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";
	// console.log(searchParams);
	// console.log(actionData?.errors.email);
	// console.log(actionData?.message);

	const isLogin = searchParams.get("mode") === "login";

	return (
		<>
			<Form method="post" className={classes.form}>
				<h1>{isLogin ? "Log in" : "Create a new user"}</h1>
				{actionData?.errors?.email && (
					<li>{actionData.errors.email}</li>
				)}
				{actionData?.message && <li>{actionData.message}</li>}
				<p>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" required />
				</p>
				<p>
					<label htmlFor="image">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						required
					/>
				</p>
				<div className={classes.actions}>
					<Link to={`?mode=${isLogin ? "signup" : "login"}`}>
						{isLogin
							? "Wanna post? Sign up!"
							: "Already a user? Login!"}
					</Link>
					<button disabled={isSubmitting}>
						{isSubmitting
							? "Submitting..."
							: isLogin
							? "Login"
							: "Save user"}
						{/* {isLogin ? "Login" : "Save user"} */}
					</button>
				</div>
			</Form>
		</>
	);
}

export default AuthForm;
