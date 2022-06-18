/**
 * The localStorage read-only property of the window interface allows you to access a
 * Storage object for the Document's origin; the stored data is saved across browser sessions.
 *
 * localStorage is similar to localStorage, except that while localStorage data has no expiration time,
 * localStorage data gets cleared when the page session ends — that is, when the page is closed.
 * (localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared
 * when the last "private" tab is closed.)
 * Description:
 * The keys and the values stored with localStorage are always in the UTF-16 string format,
 * which uses two bytes per character. As with objects, integer keys are automatically converted to strings.
 */


 localStorage.setItem('name', 'Iman')
 // localStorage.removeItem('name')
 console.log(localStorage.getItem('name'));

/** The syntax for removing all the localStorage items is as follows:
 * localStorage.clear();
 */

const localStore = Object.create(null, {
  set: {
    value: (key, itemValue) => {
      try {
        return window.localStorage && window.localStorage.setItem(key, JSON.stringify(itemValue))
      } catch (error) {
        console.error(error)
      }
    },
  },
  get: {
    value: key => {
      const itemValue = window.localStorage && window.localStorage.getItem(key)
      try {
        return JSON.parse(itemValue)
      } catch (error) {
        console.error(error)
      }
    },
  },
  remove: {
    value: (key) => {
      try {
        return window.localStorage && window.localStorage.removeItem(key)
      } catch (error) {
        console.error(error)
      }
    },
  },
  clear: {
    value: () => {
      try {
        return window.localStorage && window.localStorage.clear()
      } catch (error) {
        console.error(error)
      }
    },
  },
})

const person = {
    name: 'John Doe',
    age: 40
}
const cartKey = 'cart';

localStore.set(cartKey, person);
console.log(localStore.get('person'))