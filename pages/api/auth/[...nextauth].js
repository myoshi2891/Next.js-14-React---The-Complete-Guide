import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassworrd } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
	session: {
		jwt: true,
	},
	providers: [
		Providers.Credentials({
			async authorize(credentials) {
				const client = await connectToDatabase();
				const usersCollection = client.db().collection("users");

				const user = await usersCollection.findOne({
					email: credentials.email,
				});

				if (!user) {
					client.close();
					throw new Error("No user founnd!");
				}

				const isValid = await verifyPassworrd(
					credentials.password,
					user.password
				);

				if (!isValid) {
					client.close();
					throw new Error("Could not log in...");
				}

				client.close();
				return { email: user.email };
			},
		}),
	],
});
