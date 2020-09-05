let payload = {
    token: "kwi1dWHzH1_yr40gXM9p_A",
    data: {
        name: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",
        _repeat: 300
    }
};

$.ajax({
    type: "POST",
    url: "https://app.fakejson.com/q",
    // url: "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=cfwwRqigGqkeV8pidrxL6ULkN0UFJLwd&limit=5",
    data: payload,
    success: function (resp) {
        // Do something with fake data
        console.log(resp);
        for (let index = 0; index < resp.length; index++) {
            document.getElementById("demo1").innerHTML += "<li>" + resp[index].email + "- " + resp[index].name + " , " + resp[index].phone + "</li>";

        }
    }
});








// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

    // Process our return data
    if (this.status >= 200 && this.status < 300) {
        // What do when the request is successful

        let data = JSON.parse(this.responseText)
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            document.getElementById("demo").innerHTML += "<li>" + data[index].id + "- " + data[index].name + " , " + data[index].year + " , " + data[index].rating + "</li>";

        }
        document.getElementById("demo").innerHTML += "-------";
    } else {
        // What do when the request fails
        console.log('The request failed!');
    }

    // Code that should run regardless of the request status
    console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'http://localhost:3000/movies', true);
xhr.send();