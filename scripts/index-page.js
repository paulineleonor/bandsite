let commentsSection = document.querySelector(".comments");

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

const displayComments = (array) => {
  commentsSection.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    displayComment(array[i]);
  }
};

const displayComment = (comment) => {
  let commentBlock = document.createElement("article");
  commentBlock.classList.add("comment");
  commentsSection.appendChild(commentBlock);
  let imgContainer = document.createElement("section");
  imgContainer.classList.add("comment__icons");
  commentBlock.appendChild(imgContainer);

  let commentsImg = document.createElement("div");
  commentsImg.classList.add("comment__img");
  imgContainer.appendChild(commentsImg);

  let commentsCopy = document.createElement("div");
  commentsCopy.classList.add("comment__wrapper");
  commentBlock.appendChild(commentsCopy);

  let commentsNameDate = document.createElement("section");
  commentsNameDate.classList.add("comment__user");
  commentsCopy.appendChild(commentsNameDate);

  let commentsName = document.createElement("p");
  commentsName.classList.add("comment__name");
  commentsName.innerText = comment.name;
  commentsNameDate.appendChild(commentsName);

  let commentsDate = document.createElement("p");
  commentsNameDate.appendChild(commentsDate);
  commentsDate.classList.add("comment__date");
  commentsDate.innerText = comment.date;
  let commentsText = document.createElement("p");
  commentsCopy.appendChild(commentsText);
  commentsText.classList.add("comment__text");
  commentsText.innerText = comment.message;
};

displayComments(comments);

const form = document.querySelector(".form");

const addNewComment = (event) => {
  event.preventDefault();
  console.log(event.target);

  const name = event.target.name.value;
  const message = event.target.comment.value;

  const newComment = {
    name: name,
    message: message,
    date: new Date().toLocaleDateString(),
  };

  comments.unshift(newComment);
  displayComments(comments);
};

form.addEventListener("submit", addNewComment);
