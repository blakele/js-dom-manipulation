console.log("document.body:", document.body);

console.log("document.body.childNodes:", document.body.childNodes);

var bodyFirstChild = document.body.childNodes[1];
console.log("bodyFirstChild:", bodyFirstChild);
console.log("bodyFirstChild.firstChild:", bodyFirstChild.firstChild);
console.log("bodyFirstChild.lastChild:", bodyFirstChild.lastChild);
console.log("bodyFirstChild.nextSibling:", bodyFirstChild.nextSibling);
console.log("bodyFirstChild.previousSibling:", bodyFirstChild.previousSibling);
console.log("bodyFirstChild.parentNode:", bodyFirstChild.parentNode);


var photoCardContainer = document.getElementById('photo-card-container');
console.log("photoCardContainer:", photoCardContainer);

var photoCards = document.getElementsByClassName('photo-card');
console.log("photoCards:", photoCards);

var links = document.getElementsByTagName('a');
console.log("links:", links);
for (var i = 0; i < links.length; i++) {
  console.log("links[" + i + "]:", links[i]);
}
