function map(iterable, callback) {
    let result = [];
    for (let i = 0; i < iterable.length; i++) {
        result.push(callback(iterable[i]));
    }
    return result;
}

export default map;