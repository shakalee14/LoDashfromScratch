const toArray = (myObj) => {
  const newArray = []

  for(let index in myObj) {
    if(myObj.hasOwnProperty(index)){
      newArray.push(myObj[index]);
    }
  }
  
  return newArray
}


export { toArray }