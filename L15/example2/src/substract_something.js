// === DEFAULT EXPORT ===
import _ from 'lodash';

// code
// code

const logNumbers = (a, b) => {
    console.log(a, b);
}

export default function subtractSomething(a, b) {
    logNumbers(a, b);
    return _.subtract(a, b);
}


