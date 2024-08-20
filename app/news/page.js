import Link from "next/link";

function NewsPage() {
	return (
		<ul>
			<Link href={`/news/${id}`}>test</Link>
			<Link href={`/news/${id}`}>test</Link>
			<Link href={`/news/${id}`}>test</Link>
		</ul>
	);
}

export default NewsPage;
