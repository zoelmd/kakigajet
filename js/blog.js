$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("nQkZtiTz13AY5YBulsOWNdmupWpl1JLrnykc4dYW", "jRGFMGaqXwvo1rHBxRAQARDVgJTDU0RCkd2u7XtS");

 
   // Declare the types.
	var Post = Parse.Object.extend("Post");
	var Comment = Parse.Object.extend("Comment");

	// Create the post
	var myPost = new Post();
	myPost.set("title", "Sample blog post");
	myPost.set("content", "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.");

	// Create the comment
	var myComment = new Comment();
	myComment.set("content", "Let's do Sushirrito.");

	// Add the post as a value in the comment
	myComment.set("parent", myPost);

	// This will save both myPost and myComment
	myComment.save();

	var post = fetchedComment.get("parent");
	post.fetch({
	success: function(post) {
    var title = post.get("title");
	}
	});
