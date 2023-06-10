const forEach2 = (arr,cb) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    cb(element,index)
  }
}

module.exports = {
  forEach2
}