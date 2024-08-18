import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

function MainHeader() {
	return (
		<header className={classes.header}>
			<Link className={classes.logo} href="/">
				<img src={logoImg.src} alt="A Plate with food on it" />
				NextLevel food
			</Link>

			<nav className={classes.nav}>
				<ul>
					<li>
						<Link href="/meals">Browse Meals</Link>
					</li>
					<li>
						<Link href="/community">Foodies Community</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainHeader;
