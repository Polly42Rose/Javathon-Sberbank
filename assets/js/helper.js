export function generateString() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

export function generateFullName() {
    return generateString() + " " + generateString() + " " + generateString();
}

