document.addEventListener("DOMContentLoaded", function(){
    initAutoComplete();
});

function initAutoComplete() {
    var lat = parseFloat(document.getElementById("latitude").value);
    var lng = parseFloat(document.getElementById("longitude").value);
    let markers = [];

    if (Number.isNaN(lat)) {
        lat = -37.81361100000001;  //Default Melbourne
    }
    if (Number.isNaN(lng)) {
        lng = 144.96305600000005;  //Default Melbourne
    }

    const geocoder = new google.maps.Geocoder();

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false
    });

    var location = { lat: lat, lng: lng };

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable:true
    });
    //if marker is dragged
    google.maps.event.addListener(marker, 'dragend', function (evt) {
        getAddressFromGeoCode(evt, geocoder);
    });
    google.maps.event.addListener(map, 'click', function(event) {
        //if marker exists and has a .setMap method, hide it
        if (marker && marker.setMap) {
            marker.setMap(null);
        }
        deleteMarkers();
        //set new marker
        marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
            draggable:true
        });

        getAddressFromGeoCode(event, geocoder);

        // if marker is again dragged
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            getAddressFromGeoCode(evt, geocoder);
        });
    });

    // Create the search box
    const input = document.getElementById("venue_title");
    const searchBox = new google.maps.places.SearchBox(input);

    // Bias the SearchBox results towards current map's viewport.
    searchBox.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener("places_changed", () => {
        var places = searchBox.getPlaces();
        if (places[0].name) {
            document.getElementById("venue_title").value = places[0].name;
        }

        if (places.length == 0) {
            return;
        }

        autofillAdrresses(places, []);

        if (marker && marker.setMap) {
            marker.setMap(null);
        }

        deleteMarkers();

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    title: place.name,
                    position: place.geometry.location
                })
            );

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    document.getElementById("venue_state").addEventListener("change", function () {
        var address = '';
        var state = document.querySelector('#venue_state').val()
        var country = document.querySelector('#VenuesCountry').val();
        address = state + ',' + country;
        geocoder.geocode({ 'address': address }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                    marker.setPosition(results[0].geometry.location);
                    map.setCenter(results[0].geometry.location);
                    var skipUpadete = [];
                    skipUpadete['state'] = true;
                    autofillAdrresses(results, skipUpadete);
                }
            }
        });
    });

    document.getElementById("venue_city").addEventListener("change", function () {
        var address = '';
        var city = $('#venue_city').val()
        var country = $('#VenuesCountry').val();
        address = city + ',' + country;
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {

                    marker.setPosition(results[0].geometry.location);
                    map.setCenter(results[0].geometry.location);

                    var skipUpadete = [];
                    skipUpadete['city'] = true;
                    autofillAdrresses(results, skipUpadete);

                }
            }
        });
    });

    document.getElementById("venue_postcode").addEventListener("change", function () {
        var address = getAddress();
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                    marker.setPosition(results[0].geometry.location);
                    map.setCenter(results[0].geometry.location);
                    var skipUpadete = [];
                    skipUpadete['postcode'] = true;
                    autofillAdrresses(results, skipUpadete);
                }
            }
        });
    });

    document.getElementById('VenuesCountry').addEventListener('change', function () {
        var address = document.getElementById('VenuesCountry').val();
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                    marker.setPosition(results[0].geometry.location);
                    map.setCenter(results[0].geometry.location);
                    var skipUpadete = [];
                    skipUpadete['VenuesCountry'] = true;
                    autofillAdrresses(results, skipUpadete);
                }
            }
        });
    });

    document.getElementById("address_line_1").addEventListener('change', function () {
        var address = getAddress();
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {

                    marker.setPosition(results[0].geometry.location);
                    map.setCenter(results[0].geometry.location);

                    var skipUpadete = [];
                    skipUpadete['address_line_1'] = true;
                    autofillAdrresses(results, skipUpadete);
                }
            }
        });
    })

    function setMapOnAll(map) {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
        setMapOnAll(null);
    }

    // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }
}

function autofillAdrresses(place, skipUpdete) {

    let address1 = "";
    let postcode = "";
    let country = "";
    let state = "";
    let city = "";

    if (place[0]) {
        for (const component of place[0].address_components) {
            const componentType = component.types[0];

            switch (componentType) {
                case "street_number":
                    address1 = `${component.long_name} ${address1}`;
                    break;

                case "route":
                    address1 += component.short_name;
                    break;

                case "locality":
                    city = component.long_name;
                    break;

                case "postal_code":
                    postcode = `${component.long_name}${postcode}`;
                    break;

                case "postal_code_suffix":
                    postcode = `${postcode}-${component.long_name}`;
                    break;

                case "administrative_area_level_1":
                    state = component.long_name;
                    break;
                case "country":
                    country = component.long_name;
                    break;
            }
        }

        if (country.toLowerCase().indexOf("myanmar") > -1) {
            country = 'Myanmar';
        }

        if (!skipUpdete['postcode']) {
            if (postcode) {

                var ddOption =  document.getElementById('venue_postcode').options;
                if (ddOption) {

                    var isExist = checkIfExistsInOptions(ddOption, postcode)

                    if (!isExist) {
                        var postcodeInput = '<input type="text" id="venue_postcode" name="postcode" class="form-control color-black" value=' +postcode+ ' maxlength="255">';
                        $("#venue_postcode").replaceWith(postcodeInput);
                        $("#venue_postcode").siblings('span').remove();
                        $('#venue_postcode_dropdown_container').removeClass('select-style select select-country-mapper-arrow');
                    }
                    else {
                        document.getElementById('venue_postcode').value  = postcode;
                    }
                }
                else {
                    document.getElementById('venue_postcode').value  = postcode;
                }
            }
        }
        if (!skipUpdete['state']) {
            if (state) {
                var ddStateOption =  document.getElementById('venue_state').options;
                if (ddStateOption) {
                    var isStateExist = checkIfExistsInOptions(ddStateOption, state);

                    if (!isStateExist) {
                        var stateInput = '<input type="text" id="venue_state" name="venue_state" class="form-control color-black" value=' +state+ ' maxlength="255">';
                        $("#venue_state").replaceWith(stateInput);
                        $("#venue_state").siblings('span').remove();
                        $('#venue_state_dropdown_container').removeClass('select-style select select-country-mapper-arrow');
                        $('#venue_state_dropdown_container').parent().find('.text-red').remove();
                    }
                    else {
                        document.getElementById('venue_state').value  = state;
                    }
                }
                else {
                    document.getElementById('venue_state').value  = state;
                }
            }
        }
        if (!skipUpdete['VenuesCountry']) {
            document.querySelector('#VenuesCountry').value  = country;
            //document.getElementById('select2-VenuesCountry-container').innerHTML  = country;
        }

        if (!skipUpdete['address_line_1']) {
            document.getElementById('address_line_1').value  = address1;
        }
        if (!skipUpdete['city']) {
            if (city) {
                var ddCityOption =  document.getElementById('venue_city').options;
                if (ddCityOption) {
                    var isCityExist = checkIfExistsInOptions(ddCityOption, city);

                    if (!isCityExist) {
                        var cityInput = '<input type="text" id="venue_city" name="city" class="form-control color-black" value=' +city+ ' maxlength="255">';
                        $("#venue_city").replaceWith(cityInput);
                        $("#venue_city").siblings('span').remove();
                        $('#venue_city_dropdown_container').removeClass('select-style select select-country-mapper-arrow');
                    }
                    else {
                        document.getElementById('venue_city').value  = city;
                        document.getElementById('select2-venue_city-container').innerHTML  = city;
                    }
                }
                else {
                    document.getElementById('venue_city').value  = city;
                }
            }
        }

        document.getElementById('latitude').value = place[0].geometry.location.lat();
        document.getElementById('longitude').value = place[0].geometry.location.lng();
        document.getElementById('link').value = place[0].url;
    }

}

function getAddressFromGeoCode(event, geocoder) {
    const latlng = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
    };
    geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                autofillAdrresses(results, []);
                var addressArr = results[0].formatted_address.split(",");
                document.getElementById("venue_title").value = addressArr[0];
            }
        }
    });
}

function getAddress() {
    var state = $('#venue_state').val();
    var address1 = $('#address_line_1').val();
    var city = $('#venue_city').val();
    var postcode = $('#venue_postcode').val();
    var country = $('#VenuesCountry').val();

    var address = '';

    if (address1) {
        address += address1 + ',';
    }

    if (city) {
        address += city + ',';
    }

    if (state) {
        address += state + ',';
    }

    if (country) {
        address += country + ',';
    }

    if (postcode) {
        address += postcode + ',';
    }

    return address;
}

function checkIfExistsInOptions(dropDownOption, valueToCheck){
    var isExist = false;
    for (var i = 0; i < dropDownOption.length; i++){
        if (dropDownOption[i].value === valueToCheck){
            isExist = true;
            break;
        }
    }
    return isExist;
}