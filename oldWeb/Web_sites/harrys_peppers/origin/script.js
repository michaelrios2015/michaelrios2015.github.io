var images = [
    {
        name: "Plane",
        link: "../images/flying_in.jpg"
    },
	{
        name: "Jaen",
        link: "../images/jaen.jpg"
    },
	{
        name: "Village",
        link: "../images/village.jpg"
    },
	{
        name: "Village",
        link: "../images/village_overview.jpg"
    },
	{
        name: "Boat",
        link: "../images/boat.jpg"
    },
    {
        name: "Girl and parrot",
        link: "../images/girl_and_parrot.jpg"
    },
    {
        name: "Juice Bar",
        link: "../images/juice_bar.jpg"
    },
    {
        name: "Monkey",
        link: "../images/monkey.jpg"
    },
    {
        name: "Harry and Fish",
        link: "../images/harry_and_fish.jpg"
    }
	
	];
					
	
	

displayPics(images);		
		
		
function initMap() {
  var myLatLng = {lat: -5.7094, lng: -78.7986};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}            