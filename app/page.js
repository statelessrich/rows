import PlanetList from "./components/planetList";

/**
 *
 *  Home page to display a list of planets
 */
export default function Home() {
	return (
		<div className=" page flex justify-center flex-col mt-20">
			<div className="lg:px-20 align-center justify-center flex flex-col">
				<PlanetList />
			</div>
		</div>
	);
}
