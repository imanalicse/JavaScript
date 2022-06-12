/**
 The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
 */

let regex = /org\/dashboard/;
let url = 'https://olive.doyour.events/b/org/dashboard';
console.log(regex.test(url));

function isEventPage() {
    let current_url = 'https://www.diywebsite.net.au/b/org/events/attendeeDetails/aac86c73-3cf6-4f77-94fa-6b72900f94d5';
    let event_pages_regex_arr = [
        /events\/overview/,
        /events\/event-attendees/,
        /events\/update/,
        /events\/attendeeDetails/,
        /surveys\/survey-details/,
        /events\/event-lobby/,
        /events\/breakout-room/,
        /events\/event-invitees/,
        /events\/campaign-list/
    ]
    let is_event_page = false;
    for (let i = 0; i < event_pages_regex_arr.length; i++) {
        let regex = event_pages_regex_arr[i];
        console.log(regex)
        if (regex.test(current_url)) {
            is_event_page = true;
            break;
        }
    }
    return is_event_page;
}


console.log('is_event_page', isEventPage())


// const regex2 = new RegExp('org\/dashboard');
// console.log(regex2.test(url));