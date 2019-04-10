var images = [
    {
        name: "Plane",
        link: "../images/seal.JPG"
    },
	{
        name: "Jaen",
        link: "../images/birds.jpg"
    },
	{
        name: "Village",
        link: "../images/bob.jpg"
    },
	{
        name: "Village",
        link: "../images/landscape_2.jpg"
    },
	{
        name: "Boat",
        link: "../images/landscape_3.JPG"
    },
    {
        name: "Girl and parrot",
        link: "../images/landscape.jpg"
    },
    {
        name: "Juice Bar",
        link: "../images/mommy_and_bob.JPG"
    },
    {
        name: "Monkey",
        link: "../images/penguin_2.jpg"
    },
    {
        name: "Harry and Fish",
        link: "../images/penguin.jpg"
    }
	
	];
					
	
var navigationsPlaceOne = [{
		name: "About Me",
		link: "../index.html"
	},
	{
		name: "Trip One",
		link: "index.html"
	},
	{
		name: "Trip Two",
		link: "mission/index.html"
	},
	{
		name: "Trip Four",
		link: "recipes/index.html"
	},
	{
		name: "Contact Me",
		link: "mailto:bigwalruss@gmail.com?Subject=Peppers"
	}
];
	

displayPics(images);		
		
		
function initMap() {
  var myLatLng = {lat: -72.8628, lng: 135.0000};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}            