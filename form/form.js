document.addEventListener("DOMContentLoaded", function(event) {
    var form = document.getElementById("file_form");
    form.addEventListener('submit', function(ev) {
        var myFormData = new FormData(form);
        myFormData.append("password", "123456");
        for (var keyValue of myFormData) {
            console.log(keyValue[0] + ': ', keyValue[1]);
        }
        for (var p of myFormData.entries()) {
            console.log(p)
        }
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost/codehub/JavaScript/form/save.php");
        request.send(myFormData);

        ev.preventDefault();
    }, false);
});