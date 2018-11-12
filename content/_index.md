+++
date = "2015-10-17T18:03:08+01:00"
title = "Prague Christian Fellowship"
description = "English Speaking Congregation in Prague"
type = "homepage"
tint = "blue"
background = "/img/wideangle.jpg"
class = "homepage"
#headerstyle = "test"
+++


<div class="row">
    <div class="col-md-10 ml-auto mr-auto text-center">
        <h2 class="title">Who we are?</h2>
        <h5 class="description">Independent, indigenous Czech churches (registered with the Czech Ministry of Culture) formally established in 1990. With contemporary worship services, Bible-based teaching, and an emphasis on meeting regularly in small groups to build relationships, the denomination has grown quickly. There are now about a dozen KS congregations in Prague and close to fifty throughout the Czech Republic. Each local church has its own pastor and elders. A council of KS pastors addresses national issues and provides oversight for the churches. Since the end of 1996 our English-speaking community has been led by Pastors John and Kelsie Mullen.</h5>
    </div>
</div>
<div class="separator separator-info"></div>
<div class="section-story-overview">
    <div class="row">
        <div class="col-md-6">
            <!-- First image on the left side -->
            <div class="image-container image-left" style="background-image: url('img/overflow_room.jpg')">
                <p class="blockquote blockquote-info" style="width:350px">"This ministry is supported via donations through <b>Antioch Mercy Ministries, Inc</b> (a State of Texas Non-profit Corporation). Your partnership is greatly appreciated."
                    <br>
                    <br>
                    <small>-FPC</small>
                </p>
            </div>
            <!-- Second image on the left side of the article -->
            <div class="image-container image-left-bottom" style="background-image: url('img/worshipteam.jpg')"></div>
        </div>
        <div class="col-md-5">
            <!-- First image on the right side, above the article -->
            <div class="image-container image-right" style="background-image: url('img/beseda-front.jpg')"></div>
            <h3>Where we meet</h3>
            <p>Every <strong><em>Sunday at 11:00 am</em></strong> we have an English Language service in <!--a href='https://goo.gl/maps/RTvMn8aiERD2'--> <a href="#" data-toggle="modal" data-target="#myModal"><span data-toggle="tooltip" data-placement="bottom" title="Click for map" data-container="body" data-animation="true">Malostranská Beseda at Malostranské náměstí 21, 110 00 Praha 1.</span></a> at 2nd floor. We pray at 10:30 am. Come early!</p>
            <p>Everyone is welcome to join us in our services. Our community consists of Christians from all over the world from many different denominational backgrounds. Czech translation is available. Because relationships are very important to us, after the service we hang out at the coffee bar for fellowship and great coffee. Come join us! </p>
        </div>
    </div>
</div>
<div class="separator separator-info"></div>
<div class="section section how-can-you-help" data-background-color="black">
<h2>test</h2>
</div>
<!-- Sart Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header justify-content-center">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    <i class="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 class="title title-up p-0">Malostranská Beseda at Malostranské náměstí 21</h4>
            </div>
            <div class="modal-body">
                <div id="map-container" class="z-depth-1" style="height: 500px"></div>
            </div>
<!--             <div class="modal-footer">
                <button type="button" class="btn btn-default">Nice Button</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div> -->
        </div>
    </div>
</div>
<!--  End Modal -->

<script src="https://maps.google.com/maps/api/js?key=AIzaSyDSV4ftz7QnQ093i-7eqrIxf91MlwBGbek"></script>
<script>
  // Regular map
function regular_map() {
    var var_location = new google.maps.LatLng(50.0883399,14.4049);
    var var_mapoptions = {
        center: var_location,
        zoom: 16
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"), var_mapoptions);
    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Malostranská Beseda"
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);
</script>