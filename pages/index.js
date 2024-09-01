import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<>
			<EventsSearch />
			<EventList items={featuredEvents} />
		</>
	);
}

export default HomePage;
