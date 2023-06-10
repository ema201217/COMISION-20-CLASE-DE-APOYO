Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

module.exports = {
  foreach2: (array, callback) => {
    for (let i = 0; i < array.length; i++) {
      callback(array[i],i);
    }
  }
}
