$(document).ready(function(){
    $("#dropButton").click(function(){
        $("#dropMenu").slideToggle("slow");
        $('.jumbotronMenu').toggleClass('clickedJumbotronMenu');
    });
});
//map API
function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(42.400588,-71.117485);
  var mapOptions = {center: myCenter, zoom: 18};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}

//notice
function noticeClose() {
  document.getElementById("notice").style.display = "none";
}