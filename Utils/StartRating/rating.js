document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("input[name='rate']").forEach(function (item) {
        item.addEventListener("click", function () {
            let ratingValue = document.querySelector("input[name='rate']:checked")?.value;
            console.log('ratingValue', ratingValue)
        });
    })
})