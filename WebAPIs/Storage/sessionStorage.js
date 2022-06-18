/**
The read-only sessionStorage property accesses a session Storage object for the current origin.
sessionStorage is similar to sessionStorage; the difference is that while data in sessionStorage
doesn't expire, data in sessionStorage is cleared when the page session ends.

# Whenever a document is loaded in a particular tab in the browser, a unique page session gets
    created and assigned to that particular tab. That page session is valid only for that particular tab.
# A page session lasts as long as the tab or the browser is open, and survives over page reloads and restores.
# Opening a page in a new tab or window creates a new session with the value of the top-level browsing context,
    which differs from how session cookies work.
# Opening multiple tabs/windows with the same URL creates sessionStorage for each tab/window.
# Duplicating a tab copies the tab's sessionStorage into the new tab.
# Closing a tab/window ends the session and clears objects in sessionStorage.

The keys and the values are always in the UTF-16 string format, which uses two bytes per character.
As with objects, integer keys are automatically converted to strings.
*/

sessionStorage.setItem('name', 'Iman')
console.log(sessionStorage.getItem('name'));


const sessionStore = Object.create(null, {
  set: {
    value: (key, itemValue) => {
      try {
        return window.sessionStorage && window.sessionStorage.setItem(key, JSON.stringify(itemValue))
      } catch (error) {
        console.error(error)
      }
    },
  },
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
  remove: {
    value: (key) => {
      try {
        return window.sessionStorage && window.sessionStorage.removeItem(key)
      } catch (error) {
        console.error(error)
      }
    },
  },
  clear: {
    value: () => {
      try {
        return window.sessionStorage && window.sessionStorage.clear()
      } catch (error) {
        console.error(error)
      }
    },
  },
})

const person = {
    name: 'Session Iman',
    age: 40
}
 sessionStore.set('person', person);
// sessionStore.remove('person');
// sessionStore.clear();
console.log(sessionStore.get('person'))