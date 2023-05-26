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
		</>
	);
};

export default App;
