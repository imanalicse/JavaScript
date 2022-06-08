// https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

let copiedPerson = JSON.parse(JSON.stringify(person));

// TODO - continue