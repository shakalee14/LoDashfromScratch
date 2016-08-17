const initial = input => {
  const result = []

  if ( !(input instanceof Array) ) {
    return []
  }
    return input.splice(0, input.length-1)
  
}

export { initial }

