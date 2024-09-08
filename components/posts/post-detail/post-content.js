import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
	slug: "getting-started-with-nextjs1",
	title: "Getting Started with Nextjs",
	image: "getting-started-nextjs.png",
	date: "2024-09-08",
	content: "# NextJS is a the React framework for production",
};

function PostContent() {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
