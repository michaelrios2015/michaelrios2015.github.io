var images = [
    {
        name: "Plane",
        link: "../images/seal.jpg"
    },
	{
        name: "Jaen",
        link: "../images/birds.jpeg"
    },
	{
        name: "Village",
        link: "../images/bob.jpeg"
    },
	{
        name: "Village",
        link: "../images/landscape_2.jpeg"
    },
	{
        name: "Boat",
        link: "../images/landscape_3.jpg"
    },
    {
        name: "Girl and parrot",
        link: "../images/landscape.jpeg"
    },
    {
        name: "Juice Bar",
        link: "../images/mommy_and_bob.jpg"
    },
    {
        name: "Monkey",
        link: "../images/penguin_2.jpeg"
    },
    {
        name: "Harry and Fish",
        link: "../images/penguin.jpeg"
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