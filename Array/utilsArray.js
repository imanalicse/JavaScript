// How can I remove a specific item from an array? https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
Array.prototype.removeByValue = function (val) {
   const index = this.indexOf(val);
   if (index > -1) {
        this.splice(index, 1);
   }
  return this;
}

var fruits = ['apple', 'banana', 'carrot', 'orange'];
console.log('fruits', fruits)
fruits.removeByValue('banana');
console.log('fruits', fruits)