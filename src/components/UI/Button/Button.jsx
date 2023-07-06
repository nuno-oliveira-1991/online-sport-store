import style from "./style.module.scss";

function Button({ icon, text, onlyIcon = false, iconRight = false }) {
	// cria uma variavel com icon/text que pegue no valor com essa chave
	const styleBtn = iconRight ? `${style.btn} ${style.iconRight}` : style.btn;

	return (
		<button className={styleBtn}>
			{icon && <img src={icon} />}
			{!onlyIcon && (text ? text : "Button")}
		</button>
	);
}

export default Button;
