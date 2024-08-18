import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

function MainHeader() {
	return (
		<>
			<MainHeaderBackground />

			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					<Image
						src={logoImg}
						alt="A Plate with food on it"
						priority
					/>
					NextLevel food
				</Link>

				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">
								Foodies Community
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default MainHeader;
