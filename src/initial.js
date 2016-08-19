const initial = input => {
  const result = []

  if ( !(input instanceof Array) ) {
    return []
  }
    return input.slice(0, input.length-1)
  
}

export { initial }

