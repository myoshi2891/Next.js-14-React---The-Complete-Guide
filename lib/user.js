import RenderResult from "next/dist/server/render-result";
import db from "./db";

export function createUser(email, password) {
	db.prepare("INSERT INTO users ( email, password) VALUES (?, ?)").run(
		email,
		password
	);
	return RenderResult.lastInsertRowid;
}
