/* eslint-disable no-unused-vars */
const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
const headerElement = document.createElement('div');
const dateElement= document.createElement('span');
const titleElement= document.createElement('h1');
const tempElement = document.createElement('span');

headerElement.classList.add('header');

dateElement.classList.add('date');
dateElement.textContent = date;
headerElement.appendChild(dateElement);

titleElement.textContent= title;
headerElement.appendChild(titleElement);

tempElement.classList.add('temp');
tempElement.textContent = temp;
headerElement.appendChild(tempElement);

return headerElement;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let select = document.querySelector(selector);
  select.appendChild(Header());
  
  console.log(document.querySelector('.header'))
  return select;
}

export { Header, headerAppender }
