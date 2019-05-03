import React, { Component } from "react";

class Home extends Component {
  render() {
	return (
	<div>
		<h1>Welcome Home</h1>
		<form method="post" action="http://localhost:3000/">
			<input type="text" name="title" />
			<input type="text" name="author" />
			<input type="text" name="synopsis" />
			<input type="submit" name="whatever" />
		</form>
	</div>
	);
  }
}

export default Home;
