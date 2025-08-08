function loadGalleryFullImage() {
    var is_found_image = false;
    var current_ie_link = 'https://content.archives.nsw.gov.au/delivery/DeliveryManagerServlet?dps_pid=IE23306';
    console.log('current_ie_link', current_ie_link)
    var imagesLinks = [];
    imagesLinks[0] = current_ie_link;
    var data = { images: JSON.stringify(imagesLinks) }
    var remote_url = 'http://localhost:8000';
    $.ajax({
        type: "POST",
        url: remote_url + "/api/gallery",
        data: data,
        async: false,
        success: function(resp) {
            var images = '';
            if(resp !== null && resp.length > 0){
                is_found_image = true;
                $.each(resp, function(index, item){
                    console.log('Found.........')
                    // $(current_item).attr("src", item.imagePath);
                    // $(current_item).attr("title", item.title);
                    // $(current_item).attr("alt", item.title);
                    // $(current_item).on('load', function() {
                    //     console.log('Image Loaded');
                    //     $(".js-gallery-popup-loader").hide();
                    // });
                    // $(current_item).addClass("loaded-original-image");
                    // showSlidesAction(slideIndex);
                });
            }
        },
        beforeSend: function(){
            $(".js-gallery-popup-loader").show();
            console.log("Gallery is loading...");
        },
        complete: function(){
            console.log("Gallery loaded");
        }
    });
    return is_found_image;
}


async function load() {
    for (let i = 1; i <= 5; i++) {
        console.log( i + ' - loading gallery item ');
        let is_found_image = loadGalleryFullImage();
        if (is_found_image) {
            console.log('Image found at try: ' + i);
            break;
        }
        await sleep(0);
    }
}
load();



function loadGalleryFullImageAwait() {
    var is_found_image = false;
    var current_ie_link = 'https://content.archives.nsw.gov.au/delivery/DeliveryManagerServlet?dps_pid=IE23306';
    console.log('current_ie_link', current_ie_link)
    var imagesLinks = [];
    imagesLinks[0] = current_ie_link;
    var data = { images: JSON.stringify(imagesLinks) }
    var remote_url = 'http://localhost:8000';
    $.ajax({
        type: "POST",
        url: remote_url + "/api/gallery",
        data: data,
        success: function(resp) {
            var images = '';
            if(resp !== null && resp.length > 0){
                is_found_image = true;
                $.each(resp, function(index, item){
                    console.log('Found.........')
                    // $(current_item).attr("src", item.imagePath);
                    // $(current_item).attr("title", item.title);
                    // $(current_item).attr("alt", item.title);
                    // $(current_item).on('load', function() {
                    //     console.log('Image Loaded');
                    //     $(".js-gallery-popup-loader").hide();
                    // });
                    // $(current_item).addClass("loaded-original-image");
                    // showSlidesAction(slideIndex);
                });
            }
        },
        beforeSend: function(){
            $(".js-gallery-popup-loader").show();
            console.log("Gallery is loading...");
        },
        complete: function(){
            console.log("Gallery loaded");
        }
    });
    return is_found_image;
}

async function callGalleryImage() {
    for (let i = 1; i <= 5; i++) {
        console.log( i + ' - loading gallery item ');
        let is_found_image = await loadGalleryFullImageAwait();
        if (is_found_image) {
            console.log('Image found at try: ' + i);
            break;
        }
    }
}

// callGalleryImage();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
    console.log('Start');
    await sleep(2000); // Sleep for 2000 milliseconds (2 seconds)
    console.log('End');
}
example();