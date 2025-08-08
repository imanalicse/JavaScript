app.autoCompleteAddress = (function () {
    var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        sublocality_level_2: 'long_name',
        locality: 'long_name',
        administrative_area_level_2: 'short_name',
        administrative_area_level_1: 'long_name',
        country: 'short_name',
        postal_code: 'short_name'
    };

    function fillInAddress(autoComplete, form, elm) {
        // Get the place details from the autocomplete object.
        var place = autoComplete.getPlace();
        elm.addClass("fill_in_address_triggered");
        var countrySelect = form.find(".contact-country-selector");
        if (countrySelect.length) {
            for (var i = 0; i < place.address_components.length; i++) {
                var addressType = place.address_components[i].types[0];
                if (componentForm[addressType] && addressType === "country") {
                    var valId = $("._country_iso_2_name.name_" + place.address_components[i][componentForm[addressType]]).val();
                    if (!countrySelect.find("[value='" + valId +"']").length) {
                        app.commonTasks.markInvalidInput(form.find("[name='autoCompleteAddress']"),
                            $.i18n.encodeProp("unable.to.use.this.x0(comma).this.x0.is.disabled", [$.i18n.prop('country')]));
                        return;
                    }
                }
            }
        }
        form.find(".address_line_1").val("");
        for (var addressType in componentForm) {
            form.find("." + addressType).val("");
        }
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if(addressType == 'colloquial_area'){
                addressType = 'locality';
            }
            var val = componentForm[addressType] ? place.address_components[i][componentForm[addressType]] : place.address_components[i]["long_name"];
            if (componentForm[addressType]) {
                var dataKey = addressType.replace("administrative_area_level_1", "contact-state").replace("locality", "contact-city").replace("postal_code", "contact-post-code");
                if (addressType === "route" || addressType === "sublocality_level_2") {
                    addressType = "street_number";
                }
                if (addressType === "country") {
                    var valId = $("._country_iso_2_name.name_" + val).val();
                    form.find(".contact-country-selector").val(valId).trigger("change");
                    form.data(dataKey, val);
                }
                else if (addressType === "administrative_area_level_1" || addressType === "locality" || addressType === "postal_code") {
                    form.data(dataKey, val);
                    form.find("." + dataKey + "-selector").addClass("auto-complete-value").removeClass("is-dirty");
                }
                else if (addressType === "street_number") {
                    var bVal = form.find(".address_line_1").val();
                    form.find(".address_line_1").val(bVal + " " + val).trigger("keyup.form_enabler_disabler");
                }
                else {
                    var bVal = form.find("." + addressType).val();
                    form.find("." + addressType).val(bVal + " " + val).keydown();
                }
            }
        }
        form.addClass("autofill_completed");
    }

    return {
        initialize: function(popupElement) {
            popupElement.find("input[oname=addressLine1]").addClass("street_number");
            popupElement.find("input[oname=postCode]").addClass("postal_code");
            popupElement.find("input[oname=city]").addClass("locality");
            popupElement.find("input[oname=state]").addClass("administrative_area_level_1");

            popupElement.find(".auto-complete-address:not(.initialized)").each(function() {
                var elm = $(this);
                elm.addClass("initialized");
                if(google.maps !== undefined) {
                    console.log("Initializing auto complete");
                    var acm = new google.maps.places.Autocomplete(
                        /** @type {HTMLInputElement} */(document.getElementById(elm.attr("id"))),
                        { types: ['geocode'] });
                    google.maps.event.addListener(acm, 'place_changed', function () {
                        fillInAddress(acm, elm.closest(".create-new-address-block"), elm);
                    });
                    elm.focus(function () {
                        $(".pac-container").css({
                            zIndex: 10000000
                        });
                    });
                }
            });
        }
    }
}());
