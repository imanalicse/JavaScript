

// Get form data as json object
var loginFormData = loginForm.serializeFormObject();
$.fn.serializeFormObject = function () {
    var formData = $(this).serializeArray();
    var result = {};
    $.each(formData, function (index, value) {
        result[value.name] = value.value;
    });
    return result;
};