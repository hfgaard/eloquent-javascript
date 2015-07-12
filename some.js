function some(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return true;
    }
  }
  return false;
}
