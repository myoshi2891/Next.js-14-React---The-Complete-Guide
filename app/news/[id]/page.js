function NewsDetailPage({ params }) {
	const newsId = params.id;
	return (
		<>
			<h1>News Details Page</h1>
			<p>News ID: {newsId}</p>
		</>
	);
}

export default NewsDetailPage;
