function filter(iterable, callback) {
    const result = [];
    for (let i = 0; i < iterable.length; i++) {
        if (callback(iterable[i])) {
            result.push(iterable[i]);
        }
    }
    return result;
}

export default filter;