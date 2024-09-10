import FeaturePosts from "../components/home-page/feature-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
	return (
		<>
			<Hero />
			<FeaturePosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default HomePage;
