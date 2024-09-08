import AllPosts from "../../components/posts/all-posts";
const DUMMY_POSTS = [
	{
		slug: "getting-started-with-nextjs1",
		title: "Getting Started with Nextjs",
		image: "getting-started-nextjs.png",
		excerpt: "NextJS is a the React framework for production",
		date: "2024-09-08",
	},
	{
		slug: "getting-started-with-nextjs2",
		title: "Getting Started with Nextjs",
		image: "getting-started-nextjs.png",
		excerpt: "NextJS is a the React framework for production",
		date: "2024-09-08",
	},
	{
		slug: "getting-started-with-nextjs3",
		title: "Getting Started with Nextjs",
		image: "getting-started-nextjs.png",
		excerpt: "NextJS is a the React framework for production",
		date: "2024-09-08",
	},
	{
		slug: "getting-started-with-nextjs4",
		title: "Getting Started with Nextjs",
		image: "getting-started-nextjs.png",
		excerpt: "NextJS is a the React framework for production",
		date: "2024-09-08",
	},
];

function AllPostsPage() {
	return (
		<>
			<AllPosts posts={DUMMY_POSTS} />
		</>
	);
}

export default AllPostsPage;
