/**
 * https://www.sitepoint.com/delay-sleep-pause-wait/
 */

// sleep time expects milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('Hello')
sleep(2000)
  .then(() => console.log('world!'))
  .then(() => sleep(2000))
  .then(() => console.log('Goodbye!'))