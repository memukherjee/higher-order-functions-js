function reduce(iterable, callback) {
    let result = iterable[0];
    for (let i = 1; i < iterable.length; i++) {
        result = callback(result, iterable[i]);
    }
    return result;
}

export default reduce;