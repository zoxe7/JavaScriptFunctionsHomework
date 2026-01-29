function greet(name) {
    if (name) {
        return `Hello, ${name}`;
    } else {
        return 'Hello, stranger';
    }
}

console.log(greet('Alice'));      
console.log(greet());            
