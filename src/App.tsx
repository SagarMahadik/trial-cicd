import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<p>Hello world</p>
			<p>changes to the app</p>
			<p>This fixes issue in prod</p>
		</>
	);
}

export default App;
