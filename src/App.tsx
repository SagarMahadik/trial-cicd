import React from "react";
import "./App.css";

const App: React.FC = () => {
	return (
		<>
			<p>Hello world</p>
			<p>changes to the app</p>
			<p>This fixes issue in prod</p>
			<div>Change introdcued in hotfix</div>
			<p>Changes after the hotfix</p>
			<div>Add a button normal release</div>
			<div>Add a card normal release</div>
			<div>Changes fixed in card</div>
			<p>Change after 1.2.0</p>
			<h1>changes to the react query</h1>
		</>
	);
};

export default App;
