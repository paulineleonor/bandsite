let commentsSection = document.querySelector(".comments");

// let commentsCopy = document.createElement("p");

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

// commentsCopy.innerText = comments.name + comments.message + comments.date;
// commentsSection.appendChild(commentsCopy);

const displayComment = (array) => {
  for (let i = 0; i < array.length; i++) {
    let comment = document.createElement("article");
    comment.classList.add("comment");
    commentsSection.appendChild(comment);
    let imgContainer = document.createElement("section");
    imgContainer.classList.add("comment__icons");
    comment.appendChild(imgContainer);
    let commentsImg = document.createElement("div");
    commentsImg.classList.add("comment__img");
    imgContainer.appendChild(commentsImg);
    let commentsCopy = document.createElement("div");
    commentsCopy.classList.add("comment__wrapper");
    comment.appendChild(commentsCopy);
    let commentsNameDate = document.createElement("section");
    commentsNameDate.classList.add("comment__user");
    commentsCopy.appendChild(commentsNameDate);
    let commentsName = document.createElement("p");
    commentsName.classList.add("comment__name");
    commentsName.innerText = array[i].name;
    commentsNameDate.appendChild(commentsName);
    let commentsDate = document.createElement("p");
    commentsNameDate.appendChild(commentsDate);
    commentsDate.classList.add("comment__date");
    commentsDate.innerText = comments[i].date;
    let commentsText = document.createElement("p");
    commentsCopy.appendChild(commentsText);
    commentsText.classList.add("comment__text");
    commentsText.innerText = comments[i].message;
  }
};

displayComment(comments);

// Object.keys(array[0])[0]
