import { useState } from "react";
import Rectangle from "./components/Shapes/Rectangle";
import Container from "./components/UI/Container";
import Button from "./components/UI/Button";

function App() {
	const [width, setWidth] = useState(0);

	const increase = () => {
		setWidth((prevWidth) => {
			return prevWidth + 10;
		});
	};

	const decrease = () => {
		if (width === 0) return;
		setWidth((prevWidth) => {
			return prevWidth - 10;
		});
	};

	const clear = () => {
		setWidth(0);
	};

	return (
		<>
			<Rectangle width={width} />
			<br />
			<Container>
				<Button onClick={increase}>Increase</Button>
				<Button onClick={clear}>Clear</Button>
				<Button onClick={decrease}>Decrease </Button>
			</Container>
		</>
	);
}

export default App;
