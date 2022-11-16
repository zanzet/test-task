//maps
function initMap() {
    const pos = {
        lat: 50.383773,  
        lng: 30.475878 
    }
    const opt = { 
        center: pos,
        zoom:17,
        styles:[
            {
                "featureType": "landscape",
                "stylers": [
                  {"visibility": "off"}
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                  {"visibility": "off"}
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                  {"visibility": "off"}
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  { "color": "#858585",
                  "visibility": "on"
                }
                ]
            }
        ]
    };
   
    const map = new google.maps.Map(document.getElementById("grid__map"), opt);
    
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: '../img/marker.svg'
    });

    const content =  '<div class="map">'+
                    '<h2 class="map__title">Voodoo</h2>'+
                    '<p class="map__adres">137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine</p>'+
                    '<div class="map__tel">'+
                        '<img src="img/feather-icon/phone.svg" alt="phone" class="map__tel-icon">'+
                        '<a href="tel:+38018004809597" class="map__tel-link">1-800-480-9597</a>'+
                    '</div>'+
                    '<div class="map__mail">'+
                        '<img src="img/feather-icon/mail.svg" alt="mail" class="map__mail-icon">'+
                        '<a href="#" class="map__mail-link">info@voodoo.com</a>'+
                    '</div>'+
                '</div>';

    
    const info = new google.maps.InfoWindow({
        content: content
    });
    
    marker.addListener("click", () => {
        
        info.open({
            anchor: marker,
            map: map
        });
    });
  }

window.initMap = initMap;


