//EXAMINE THE DOCUMENT OBJECT//

console.log(document.domain);
console.log(document.URL);
console.log(document.title);

document.title = new title;

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[2]);



console.log(document.forms[0]);
console.log(document.links);

console.log(document.images);

//Get element by ID

console.log(document.getElementById('header-title'));

var headerTitle =document.getElementById('header-title');

console.log(headerTitle);

headerTitle.textContent = 'Hello';//doesn't pay attention to style
headerTitle.innerText = 'Goodbye';//pays attention to style

console.log(headerTitle.innerText);

headerTitle.innerHTML = '<h3>Hello</h3>';

header.style.borderBottom = 'solid 3px #000';
