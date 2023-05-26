import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<p>Hello world</p>
			<p> changes to the app </p>
			<p>Some changes after the prod movement</p>
		</>
	);
}

export default App;
