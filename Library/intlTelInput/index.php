<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>International Telephone Input</title>
  <link rel="stylesheet" href="build/css/intlTelInput.css">
  <link rel="stylesheet" href="build/css/demo.css">
</head>

<body>
  <h1>International Telephone Input</h1>
  <form method="post">
<!--    <input id="phone_prefix" name="phone_prefix">-->
    <input id="phone" name="phone" type="tel">
    <button type="submit">Submit</button>
  </form>
<script src="http://iman.rgsapp.com/js/rgs4_assets/js/jquery-3.3.1.min.js"></script>
  <script src="build/js/intlTelInput.js"></script>

<!--  <script src="phone_script.js"></script>-->
  <script>
  document.addEventListener('DOMContentLoaded', function () {
    var phone_number  = document.querySelector("#phone");
    window.intlTelInput(phone_number , {
        nationalMode: false,
        preferredCountries: ["us", "au"],
        autoHideDialCode: false,
        initialCountry: 'auto',
        // hiddenInput: 'phone_full',
        separateDialCode: true,
        geoIpLookup: function (success, failure) {
            success('au');
        },
        // utilsScript: "build/js/utils.js",
    });

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(document.querySelector("form"));
         let iti = window.intlTelInputGlobals.getInstance(document.querySelector("#phone"));
         let only_input_value = iti.telInput.value;
         if (only_input_value) {
             let phone_number = iti.getNumber(intlTelInputUtils.numberFormat.E164);
             console.log('number ', phone_number)
             formData.set('phone', phone_number);
         }
         for (let d of formData) {
             console.log(d)
         }
    });
    });
  </script>
</body>

</html>
