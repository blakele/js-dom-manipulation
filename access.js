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

var firstPersonPhoto = document.querySelector('img.person-photo-img');
console.log("firstPersonPhoto:", firstPersonPhoto);

var allPersonPhotos = document.querySelectorAll('img.person-photo-img');
console.log("allPersonPhotos:", allPersonPhotos);

var loremCard = document.querySelector('.lorem-card');
console.log("loremCard.textContent:", loremCard.textContent);
console.log("loremCard.innerHTML:", loremCard.innerHTML);

console.log("links[0].href:", links[0].href);

console.log("loremCard.clientHeight:", loremCard.clientHeight);
console.log("loremCard.clientWidth:", loremCard.clientWidth);

console.log("loremCard.offsetHeight:", loremCard.offsetHeight);
console.log("loremCard.offsetWidth:", loremCard.offsetWidth);

console.log("loremCard.scrollHeight:", loremCard.scrollHeight);
console.log("loremCard.scrollWidth:", loremCard.scrollWidth);

console.log("loremCard.scrollLeft:", loremCard.scrollLeft);
console.log("loremCard.scrollTop:", loremCard.scrollTop);

console.log("window.scrollX:", window.scrollX);
console.log("window.scrollY:", window.scrollY);

function insertNewPhotoCard(url, caption) {
  var photoCardSection = document.createElement('section');
  photoCardSection.classList.add('photo-card');
  photoCardSection.classList.add('a-second-class');
  photoCardSection.classList.remove('a-second-class');
  photoCardSection.setAttribute('id', 'my-new-photo-card');
  // photoCardSection.style.border = '5px dashed orange';
  console.log("photoCardSection:", photoCardSection);

  var imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('img-container');
  photoCardSection.appendChild(imgContainerDiv);
  console.log("imgContainerDiv:", imgContainerDiv);

  var personPhotoImg = document.createElement('img');
  personPhotoImg.classList.add('person-photo-img');
  personPhotoImg.src = url;
  imgContainerDiv.appendChild(personPhotoImg);

  photoCardContainer.appendChild(photoCardSection);
}

insertNewPhotoCard('http://placekitten.com/480/480?image=4', 'Luke as a cat');
