import { use } from "react";
import DetailsPage from "../../../components/detailsPage";

export default function Details({ params }) {
	const { id } = use(params);
	return <DetailsPage id={id} />;
}
