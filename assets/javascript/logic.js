$(document).ready(function() {
// Initial array of buttons
var gifButtons = ["hello", "goodbye", "farewell"]

// creating a random number and adding it to the end of my URL via offset. Offset number specifies the starting position of the giphy results. Defaults to 0.
var offsetNumber = Math.floor(Math.random() * 15) + (Math.floor(Math.random() *20));
var offset = `&offset=${offsetNumber}`;

function displayGifInfo() {
    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=lEx6ZgPLV9L7TcvzndJKaxwOljBoyPXj=10" + offset;
    // creating an AJAX call for giphy buttons
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        // creating variables that will help add gif to html
        var gifDiv = $("<div class='gif'>");
        var rating = response.rating;
        var title = response.title;
        // var's that will display rating and title of gif
        var displayRating = $("<p>").text(`Rating: ${rating}`);
        gifDiv.append(displayRating);
        var displayTitle = $("<p>").text(`Title: ${title}`);
        gifDiv.append(displayTitle);
        var animated = $("<img>").attr("src",images.fixed_height.url);
        gifDiv.append(animated);
        var still = $("<img>").attr("src",images.fixed_height_still.url);
        gifDiv.append(still);
        // adding gifs above previous gifs
        console.log(gifDiv)
        $("#gif-container").prepend(gifDiv);

    })

}
})