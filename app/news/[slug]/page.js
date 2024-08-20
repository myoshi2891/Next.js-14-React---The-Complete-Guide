import { DUMMY_NEWS } from "@/dummy-news";

function NewsDetailPage({ params }) {
	const newsSlug = params.slug;
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
	return (
		<article className="news-article">
			<header>
				<img
					src={`/images/news/${newsItem.image}`}
					alt={newsItem.title}
				/>
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>News ID: {newsItem.slug}</p>
		</article>
	);
}

export default NewsDetailPage;
