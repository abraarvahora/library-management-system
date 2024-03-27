
//create variable of users
var users = [
	{
		"id":1,
		"name":"Jhon Doe",
		"password":"pass",
		"type":'ADMIN'
	},
	{
		"id":2,
		"name":"Joe Bloggs",
		"password":"pass",
		"type":'CUSTOMER'
	}
];

//create variable of books
var books = [
	{
		"id":1,
		"name":"Jane Eyre",
		"author":"Charlotte Bronte",
		"bookStatus":'AVAILABLE'
	},
	{
		"id":2,
		"name":"Wuthering Heights",
		"author":"Emily Brontë",
		"bookStatus":'BORROWED'
	}
];

//document.ready
$(function() {
	console.log(users);	  
})