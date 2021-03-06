'use strict';


$(document).ready(function () {

	$('.ba-hero-slider').slick({
		vertical: true,
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true
	});

	$('.ba-slider').slick({
		infinite: true,
		dots: true,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		autoplay: true
	});

	// $('.ba-slider').slick();

	// smooth scrolling
	$(document).ready(function () {
		$('a[href^="#"]').bind('click.smoothscroll', function (e) {
			e.preventDefault();

			let target = this.hash,
				$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 2000, 'swing', function () {
				window.location.hash = target;
			});
		});
	});

	// change menu color
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 700) {
				$(".ba-menu__link").css({
				'color': 'black'
			});
			$(".ba-menu__fab").css({
				'color': 'black'
			});
		
			$(".ba-logo").css({
				'filter': 'invert(1)'
			});
			
		}
		else 
		{
			$(".ba-menu__link").css({
			'color': 'white'
		});
		$(".ba-menu__fab").css({
			'color': 'white'
		});
	
		$(".ba-logo").css({
			'filter': 'invert(0)'
		});
		};
	});

});

var map;
function initMap() {
	//for 1 task
	let kharkivOffice = { lat: 40.700930, lng: -73.983728 };

	map = new google.maps.Map(document.getElementById('map'), {
		center: kharkivOffice,
		zoom: 12
		// ,
		// styles: [
		// 	{
		// 	  "elementType": "geometry",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#f5f5f5"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "elementType": "labels.icon",
		// 	  "stylers": [
		// 		{
		// 		  "visibility": "off"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "elementType": "labels.text.fill",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#616161"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "elementType": "labels.text.stroke",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#f5f5f5"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "administrative.land_parcel",
		// 	  "elementType": "labels",
		// 	  "stylers": [
		// 		{
		// 		  "visibility": "off"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "administrative.land_parcel",
		// 	  "elementType": "labels.text.fill",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#bdbdbd"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "poi",
		// 	  "elementType": "geometry",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#eeeeee"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "poi",
		// 	  "elementType": "labels.text",
		// 	  "stylers": [
		// 		{
		// 		  "visibility": "off"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "poi",
		// 	  "elementType": "labels.text.fill",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#757575"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "poi.business",
		// 	  "stylers": [
		// 		{
		// 		  "visibility": "off"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "poi.park",
		// 	  "elementType": "geometry",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#e5e5e5"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "poi.park",
		// 	  "elementType": "labels.text",
		// 	  "stylers": [
		// 		{
		// 		  "visibility": "off"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "poi.park",
		// 	  "elementType": "labels.text.fill",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#9e9e9e"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "road",
		// 	  "elementType": "geometry",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#ffffff"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "road.arterial",
		// 	  "elementType": "labels",
		// 	  "stylers": [
		// 		{
		// 		  "visibility": "off"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "road.arterial",
		// 	  "elementType": "labels.text.fill",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#757575"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "road.highway",
		// 	  "elementType": "geometry",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#dadada"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "road.highway",
		// 	  "elementType": "labels",
		// 	  "stylers": [
		// 		{
		// 		  "visibility": "off"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "road.highway",
		// 	  "elementType": "labels.text.fill",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#616161"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "road.local",
		// 	  "stylers": [
		// 		{
		// 		  "visibility": "off"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "road.local",
		// 	  "elementType": "labels",
		// 	  "stylers": [
		// 		{
		// 		  "visibility": "off"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "road.local",
		// 	  "elementType": "labels.text.fill",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#9e9e9e"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "transit.line",
		// 	  "elementType": "geometry",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#e5e5e5"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "transit.station",
		// 	  "elementType": "geometry",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#eeeeee"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "water",
		// 	  "elementType": "geometry",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#c9c9c9"
		// 		}
		// 	  ]
		// 	},
		// 	{
		// 	  "featureType": "water",
		// 	  "elementType": "labels.text.fill",
		// 	  "stylers": [
		// 		{
		// 		  "color": "#9e9e9e"
		// 		}
		// 	  ]
		// 	}
		//   ]
	});

	var marker = new google.maps.Marker({
		position: kharkivOffice,
		map: map,
		icon: {
			url: 'img/pin.png',
			origin: new google.maps.Point(0, 0),
			size: new google.maps.Size(160, 160)
		}
	});

}

