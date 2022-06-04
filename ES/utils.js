export const sessionStorage = Object.create(null, {
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

export const UUID_REGEXP = /(\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b)/gi


// sleep time expects milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('Hello')
sleep(2000)
  .then(() => console.log('world!'))
  .then(() => sleep(2000))
  .then(() => console.log('Goodbye!'))