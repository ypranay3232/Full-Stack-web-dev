console.log(window)
// console.log(document)
console.dir(document)

// modifying dom with js 
document.body.children[1].children[0].href = 'https://www.google.com'

// instead of drilling a element then adding a link we can use query selector elements
document.getElementById("#link")