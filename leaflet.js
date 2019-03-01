
//Leaflet code: declaring variables that will enable baseMaps for Layer Control
       var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/lanimrod/cj00bakxl008r2so240f8bvnm/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFuaW1yb2QiLCJhIjoiY2l5M2dwajc2MDAwNzJxczZqY3pubDhhNCJ9.9KULVW-m1sqXKuqRnopyVg', {
            id: 'mapId', 
            attribution: 'Imagery by <a href="https://www.mapbox.com/about/maps/">© Mapbox</a>, and by <a href="https://www.digitalglobe.com">© DigitalGlobe </a>'});
            
            citymap = L.tileLayer('https://api.mapbox.com/styles/v1/lanimrod/cj00czybu007z2rs68p4sbzbf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFuaW1yb2QiLCJhIjoiY2l5M2dwajc2MDAwNzJxczZqY3pubDhhNCJ9.9KULVW-m1sqXKuqRnopyVg', {id: 'mapId', 
            attribution: 'Tiles by <a href="http://openstreetmap.org">OpenStreetMap</a>'});  
//Adding the map in the website            
        var mymap = L.map('mapid',{center: [0, 0], zoom: 2,layers: [satellite, citymap]
            });
		
		var baseMaps = {
            "Imagem de Satelite":satellite,
            "Mapa": citymap};
            
            
//adding the Layer Control to switch between base maps
L.control.layers(baseMaps).addTo(mymap);
        
L.marker([51.5, -0.09])
		.addTo(mymap)
		.bindPopup("<b>London</b><br>England")

L.marker([13.40749837, 103.8666632])
        .addTo(mymap)
        .bindPopup("<b>Temple of Angkor</b><br>Cambodia")
     
L.marker([-41.58145, 145.93372])
        .addTo(mymap)
        .bindPopup("<b>Cradle Mountain</b><br>Australia")
     
		
L.marker([35.47260, 50.98914])
        .addTo(mymap)
        .bindPopup("<b>Naqsh e-Jahan</b><br>Iran")
     
		
L.marker([54.45, -3.1])
        .addTo(mymap)
        .bindPopup("<b>Lake District National Park</b><br>England")
     
		
L.marker([42.42973, 18.65319])
        .addTo(mymap)
        .bindPopup("<b>Bay of Kotor</b><br>Montenegro")
     
		
L.marker([27.19132, 100.11428])
        .addTo(mymap)
        .bindPopup("<b>Tiger Leaping Gorge</b><br>China")
     
		
L.marker([-12.67481, 132.81679])
        .addTo(mymap)
        .bindPopup("<b>Kakadu National Park</b><br>Australia")
     
		
L.marker([17.51098, -91.99305])
        .addTo(mymap)
        .bindPopup("<b>Palenque</b><br>Mexico")
     
     
L.marker([46.36360, 14.09381])
        .addTo(mymap)
        .bindPopup("<b>Lake Bled</b><br>Slovenia")
    
/*custom Maki markers
L.MakiMarkers.accessToken =  'pk.eyJ1IjoibGFuaW1yb2QiLCJhIjoiY2l5M2dwajc2MDAwNzJxczZqY3pubDhhNCJ9.9KULVW-m1sqXKuqRnopyVg';

var icon = L.MakiMarkers.icon({icon: "rocket", color: "#b0b", size: "m"});
    L.marker([51.5, -0.09], {icon: icon})
    .addTo(mymap)
*/
