document.addEventListener('DOMContentLoaded', function () {
    var phone_number  = document.querySelector("#phone");
    window.intlTelInput(phone_number , {
        nationalMode: false,
        preferredCountries: ["us", "au"],
        autoHideDialCode: false,
        initialCountry: 'auto',
        hiddenInput: 'full',
        separateDialCode: true,
        geoIpLookup: function (success, failure) {
            success('au');
        },
        utilsScript: "build/js/utils.js"
    });

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
         var full_number = phone_number.getNumber(intlTelInputUtils.numberFormat.E164);
         console.log('full_number', full_number)
    });
});