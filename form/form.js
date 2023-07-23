document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("clear_file").addEventListener("click", function () {
        let file_input = document.querySelector(".picture");
        console.log('file_input', file_input.value)
        file_input.value = '';
    });

    var formElem = document.getElementById("file_form");
    formElem.addEventListener('submit', function(ev) {
        ev.preventDefault();
        var myFormData = new FormData(formElem);
        myFormData.append("password", "123456");
        myFormData.append("test", "filename.txt");
        for (var keyValue of myFormData) {
            console.log(keyValue[0] + ': ', keyValue[1]);
        }
        for (var p of myFormData.entries()) {
            console.log(p)
        }
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost/codehub/JavaScript/form/submit.php", true);
        request.onload = function (oEvent) {
            if (request.status == 200) {
                let response = request.response;
                console.log('response', response);
            }
            else {

            }
        }
        request.send(myFormData);
    }, false);
});