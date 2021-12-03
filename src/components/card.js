//import { headerAppender } from './header'

//import { headerAppender } from './header';

/* eslint-disable no-unused-vars */
const axios = require('axios');
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const cardContainer = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const authorPhotoContainer = document.createElement('div');
const authorPhoto = document.createElement('img');
const authorName = document.createElement('span');

cardContainer.classList.add('card');
headline.classList.add('headline');
headline.textContent = article.headline
author.classList.add('author');
authorPhotoContainer.classList.add('.img-container');
authorPhoto.src = article.authorPhoto 
authorName.textContent =article.authorName;

cardContainer.appendChild(headline);
cardContainer.appendChild(author);
author.appendChild(authorPhotoContainer);
authorPhotoContainer.appendChild(authorPhoto);
author.appendChild(authorName);

return cardContainer;

}

const arrayOfTopics = []
function arrayOfTopicsCreator () {
  axios.get('http://localhost:5000/api/topics')
  .then((resp)=> {
     const topics = resp.data.topics
     topics.forEach((element) =>{
       arrayOfTopics.push(element)
     })
  })
  .catch((error)=>{
    console.log("There was in error in retrieving Topics")
    return error;
  })
}
arrayOfTopicsCreator();


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

//takes an array of the 5 topics previously obtained. used those topics to access to respective properties 
//since the topic name is also name of the object  I need from the response
//I then iterated through each object that has the the name of each topic to access every single one
  
  let entry = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/articles`)
    .then((resp) => {
      arrayOfTopics.forEach((element)=>{
        let articlesObj = resp.data.articles[element];
        console.log(articlesObj
        let n = articlesObj.length;
        for (let i = 0; i <= n; i++){
          console.log(i)
          let finishedCard = Card(articlesObj);
          //console.log(finishedCard)
          entry.appendChild(finishedCard);
        }
    })
  })
    .catch((error)=>{
      return error
    })
return entry
}

export { Card, cardAppender }
