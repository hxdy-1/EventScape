import HomePageImage from "../components/HomePageImage";
import PageContent from "../components/PageContent";

function HomePage() {
	return (
		<PageContent title="Welcome!">
			<p>
				Browse all our amazing events:{" "}
				<span>click on the image :)</span>
			</p>
			<p>Join the platform to post new events!</p>
			<HomePageImage />
			<p>Make sure to delete the events once its done!</p>
		</PageContent>
	);
}

export default HomePage;
