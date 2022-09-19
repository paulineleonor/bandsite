let commentsSectionEl = document.querySelector(".comments");

let comments = [
  {
    name: "Connor Walton",
    message:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021",
  },
  {
    name: "Emilie Beach",
    message:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "01/09/2021",
  },
  {
    name: "Miles Acosta",
    message:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "12/20/2020",
  },
];

// Creates full list of comments
const displayComments = (array) => {
  commentsSectionEl.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    displayComment(array[i]);
  }
};

// Builds a comment block for each object in comment array
const displayComment = (comment) => {
  let commentBlockEl = document.createElement("article");
  commentBlockEl.classList.add("comment");
  commentsSectionEl.appendChild(commentBlockEl);
  let imgContainerEl = document.createElement("section");
  imgContainerEl.classList.add("comment__icons");
  commentBlockEl.appendChild(imgContainerEl);

  let commentImgEl = document.createElement("div");
  commentImgEl.classList.add("comment__img");
  imgContainerEl.appendChild(commentImgEl);

  let commentCopyEl = document.createElement("div");
  commentCopyEl.classList.add("comment__wrapper");
  commentBlockEl.appendChild(commentCopyEl);

  let commentNameDateEl = document.createElement("section");
  commentNameDateEl.classList.add("comment__user");
  commentCopyEl.appendChild(commentNameDateEl);

  let commentNameEl = document.createElement("p");
  commentNameEl.classList.add("comment__name");
  commentNameEl.innerText = comment.name;
  commentNameDateEl.appendChild(commentNameEl);

  let commentDateEl = document.createElement("p");
  commentNameDateEl.appendChild(commentDateEl);
  commentDateEl.classList.add("comment__date");
  commentDateEl.innerText = comment.date;

  let commentTextEl = document.createElement("p");
  commentCopyEl.appendChild(commentTextEl);
  commentTextEl.classList.add("comment__text");
  commentTextEl.innerText = comment.message;
};

displayComments(comments);

const form = document.querySelector(".form");

// Handles form submission to add comment to comments array
const addNewComment = (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const message = event.target.comment.value;

  const nameInputEl = document.getElementById("name");
  const messageInputEl = document.getElementById("comment");

  nameInputEl.classList.remove("form__input--error");
  messageInputEl.classList.remove("form__input--error");

  if (message === "" && name === "") {
    nameInputEl.classList.add("form__input--error");
    messageInputEl.classList.add("form__input--error");
    return;
  }

  if (name === "") {
    nameInputEl.classList.add("form__input--error");
    return;
  }

  if (message === "") {
    messageInputEl.classList.add("form__input--error");
    return;
  }

  const newComment = {
    name: name,
    message: message,
    date: new Date().toLocaleDateString(),
  };

  comments.unshift(newComment);
  displayComments(comments);

  event.target.name.value = "";
  event.target.comment.value = "";
};

form.addEventListener("submit", addNewComment);
