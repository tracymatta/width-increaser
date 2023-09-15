import styles from "./Rectangle.module.css";
import Container from "../UI/Container";

const Rectangle = (props) => {
	return (
		<Container>
			<div className={styles.rectangle} style={{ width: `${props.width}px` }} />
		</Container>
	);
};

export default Rectangle;
