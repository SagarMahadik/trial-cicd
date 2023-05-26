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
			<h1>Hot fix after UI reavamp</h1>
			<h1>Bug found and bug resolved</h1>
		</>
	);
};

export default App;
