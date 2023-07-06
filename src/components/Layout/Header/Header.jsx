import style from "./header.module.scss";
import logoSrc from "../../assets/logo.svg";
import Button from "../../UI/Button/Button";

//Assets
import hamburgerIcon from "../../assets/icons/hamburger-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";

const Header = () => {
	return (
		<>
			<header className={style.header}>
				<div className={style.leftSide}>
					<Button onlyIcon={true} text="Menu" icon={hamburgerIcon} />

					<Button />

					<Button iconRight={true} icon={searchIcon} />
					<Button icon={searchIcon} />

					<input type="text" placeholder="Search..." />
				</div>
				<div className={style.logo}>
					<img src={logoSrc} alt="Logo" />
				</div>
				<div className={style.rightSide}>Secao 3</div>
			</header>
		</>
	);
};

export default Header;
