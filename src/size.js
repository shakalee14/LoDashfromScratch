const size = collection => {
		let count = 0

    for( let key in collection) {
			if ( collection.hasOwnProperty(key)) {
				count++
		}
  }
  return count
}


export { size }