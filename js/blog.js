$(function() {
 
    Parse.$ = jQuery;
    
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("nQkZtiTz13AY5YBulsOWNdmupWpl1JLrnykc4dYW", "jRGFMGaqXwvo1rHBxRAQARDVgJTDU0RCkd2u7XtS");

 
   var Blog = Parse.Object.extend("Blog");
   var blogs = Parse.Object.extend({
       model: kakigajet});

var blogs = new Blogs();
blogs.fetch({
    success: function(blogs) {
        console.log(blogs);
    },
    error: function(blogs, error) {
        console.log(error);
    }
});

});
