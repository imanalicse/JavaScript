const sessionStorage = Object.create(null, {
  get: {
    value: key => {
      const itemValue = window.sessionStorage && window.sessionStorage.getItem(key)
      try {
        return JSON.parse(itemValue)
      } catch (error) {
        console.error(error)
      }
    },
  },
  set: {
    value: (key, itemValue) => {
      try {
        return window.sessionStorage && window.sessionStorage.setItem(key, JSON.stringify(itemValue))
      } catch (error) {
        console.error(error)
      }
    },
  },
})

const UUID_REGEXP = /(\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b)/gi

// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// console.log(capitalizeFirstLetter('foo')); // Foo

// Convert string to Title Case with JavaScript
//https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

// https://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
const convertToSlug = (str) => {
  return str.toLowerCase().trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    // .replace(/ /g,'-') // Replace spaces with -
    .replace(/[-]+/g, '-') // To avoid multiple sequential hyphens
    .replace(/[^\w-]+/g,'') // Replace special characters. another removes anything not alphanumeric, underscore, or hyphen
}

function isEmpty(value) {

    if (value === undefined || typeof value === "undefined" || value === null) {
        return true;
    }

    if (Array.isArray(value)) {
        return value.length === 0;
    }
    else if (typeof value == "object") {
        return Object.keys(value).length === 0 && value.constructor === Object;
    }
    else if (typeof value == "string") {
        return value.trim().length === 0;
    }
    else if (typeof value == "boolean") {
        return value === false;
    }
    else if (!isNaN(value)) {
        return value * 1 === 0
    }
    else if (value === true || value === false) {
        return value;
    }

    return JSON.stringify(value) === JSON.stringify({});
}

function isEmptyObject(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}