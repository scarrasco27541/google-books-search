import React, { Component } from "react";

class GoogleBookList extends Component {
	
  state = {
    books: [
	{
		title:"Huck Finn", author:"Mark Twain"		
	}
	,
	{
		title:"Jane Eyre", author:"Charlotte Bronte"		
	}
	],
  };
	
	
  render() {	 
	/*
	Do some Google API stuff here to look up books based on :query parameter in url
	*/  
	const listItems = this.state.books.map((book) =>
		<li>{book.title} by {book.author}</li>
	);	  
	return (
		<div>
		<h1>Welcome to the book list</h1>
		<ul>{listItems}</ul>
		</div>
	);
  }
}

export default GoogleBookList;
