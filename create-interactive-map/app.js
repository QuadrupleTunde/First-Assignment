
const newMap = {
    businesses: [],
    coordinates: [],
    map: {},
    markers: {},

    //createMap
    createMap(){
        this.map = L.map("map", {
        center: this.coordinates,
        zoom: 12,
    });
// Add OpenStreetMap tiles:
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
minZoom: '15',
}).addTo(this.map)

const marker = L.marker(this.coordinates).addTo(this.map).bindPopup('<p1><b>You are here</b></p1>').openPopup()

},
    //markers
    newMarkers(){

        for(let i=0; i<this.businesses.length; i++){
            this.markers = L.marker([this.businesses[i].lat, this.businesses[i].lng]).addTo(this.map).bindPopup('<p1>${businesses[i].name}<p1>').openPopup()

        
        }


    },






};