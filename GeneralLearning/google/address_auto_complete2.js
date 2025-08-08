/**
 * in HTML
 * <script src="https://maps.googleapis.com/maps/api/js?key=<?=env('google_map_api')?>&libraries=places&v=weekly"></script>
 */
document.addEventListener("DOMContentLoaded", function(){
    surveyAddressAutoComplete();
});
function surveyAddressAutoComplete() {

    let input = document.querySelector(".js_survey_address");
    if (input) {
        const searchBox = new google.maps.places.SearchBox(input);
        searchBox.addListener("places_changed", () => {
            var places = searchBox.getPlaces();
            surveyAutofillAddresses(places)
        });
    }

    function surveyAutofillAddresses(place) {
        let address1 = "";
        let postcode = "";
        let country = "";
        let state = "";
        let city = "";

        if (place[0]) {
            for (const component of place[0].address_components) {

                const componentType = component.types[0];

                switch (componentType) {
                    case "street_number": {
                        address1 = `${component.long_name} ${address1}`;
                        break;
                    }

                    case "route": {
                        address1 += component.short_name;
                        break;
                    }
                    case "locality":
                        city = component.long_name;
                        break;

                    case "postal_code": {
                        postcode = `${component.long_name}${postcode}`;
                        break;
                    }

                    case "postal_code_suffix": {
                        postcode = `${postcode}-${component.long_name}`;
                        break;
                    }

                    case "administrative_area_level_1": {
                        state = component.long_name;
                        break;
                    }
                    case "country":
                        country = component.short_name;
                        break;
                }
            }

            console.log('country', country)
            console.log('state', state)
            console.log('postcode', postcode)
            console.log('address1', address1)

            // if (state) {
            //     var ddStateOption =  document.getElementById('attendee_state_' + attendee_index).options;
            //     if (ddStateOption) {
            //         var isStateExist = checkIfExistsInOptions(ddStateOption, state);
            //         if (!isStateExist) {
            //             var stateInput = '<input type="text" id="attendee_state_' + attendee_index + '" name="attendee_state[' + attendee_index + ']" class="form-control color-black" value=' +state+ ' maxlength="255">';
            //             $("#attendee_state_" + attendee_index).replaceWith(stateInput);
            //             $("#attendee_state_" + attendee_index).siblings('span').remove();
            //         }
            //         else {
            //             document.getElementById('attendee_state_' + attendee_index).value  = state;
            //             $("#attendee_state_" + attendee_index).trigger("change");
            //         }
            //     }
            //     else {
            //         document.getElementById('attendee_state_' + attendee_index).value  = state;
            //     }
            // }

            // if (postcode) {
            //
            //     var ddOption =  document.getElementById('attendee_post_code_' + attendee_index).options;
            //     if (ddOption) {
            //
            //         var isExist = checkIfExistsInOptions(ddOption, postcode)
            //
            //         if (!isExist) {
            //             var postcodeInput = '<input type="text" id="attendee_post_code_' + attendee_index + '" name="attendee_post_code[' + attendee_index + ']" class="form-control color-black" value=' +postcode+ ' maxlength="255">';
            //             $("#attendee_post_code_" + attendee_index).replaceWith(postcodeInput);
            //             $("#attendee_post_code_" + attendee_index).siblings('span').remove();
            //         }
            //         else {
            //             document.getElementById('attendee_post_code_' + attendee_index).value  = postcode;
            //         }
            //     }
            //     else {
            //         document.getElementById('attendee_post_code_' + attendee_index).value  = postcode;
            //     }
            // }

            // if (city) {
            //     var ddCityOption =  document.getElementById('attendee_city_' + attendee_index).options;
            //     if (ddCityOption) {
            //         var isCityExist = checkIfExistsInOptions(ddCityOption, city);
            //
            //         if (!isCityExist) {
            //             var cityInput = '<input type="text" id="attendee_city_' + attendee_index + '" name="attendee_city[' + attendee_index + ']" class="form-control color-black" value=' +city+ ' maxlength="255">';
            //             $("#attendee_city_" + attendee_index).replaceWith(cityInput);
            //             $("#attendee_city_" + attendee_index).siblings('span').remove();
            //         }
            //         else {
            //             document.getElementById('attendee_city_' + attendee_index).value  = city;
            //             // document.getElementById('select2-city-container').innerHTML  = city;
            //             $("#attendee_city_" + attendee_index).trigger("change");
            //         }
            //     }
            //     else {
            //         document.getElementById('attendee_city_' + attendee_index).value  = city;
            //     }
            // }
            // $('#attendee_address_line1_' + attendee_index).val(address1);
            // $('#attendee_address_line1_' + attendee_index).trigger("change");
            // $('#attendee_country_' + attendee_index).val(country).selectpicker('refresh');
        }
    }
}