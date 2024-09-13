const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: "development",
				mongodb_password: "development",
				mongodb_clustername: "development",
				mongodb_database: "my-site-dev",
			},
		};
	}
	return {
		env: {
			mongodb_username: "production",
			mongodb_password: "production",
			mongodb_clustername: "production",
			mongodb_database: "my-site",
		},
	};
};
