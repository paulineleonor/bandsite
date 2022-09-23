let commentsSectionEl = document.querySelector(".comments");
let comments = [];

const dynamicTimestamp = (timeStamp) => {
  const dateStringBuilder = (num, string) => {
    if (num !== 1) {
      return num + " " + string + "s ago";
    }
    return num + " " + string + " ago";
  };

  const secondsElapsed = Math.floor((Date.now() - timeStamp) / 1000);

  if (secondsElapsed === 0) {
    return "just now";
  }
  if (secondsElapsed < 60) {
    return dateStringBuilder(secondsElapsed, "second");
  }
  const inMinutes = Math.floor(secondsElapsed / 60);
  if (inMinutes < 60) {
    return dateStringBuilder(inMinutes, "minute");
  }
  const inHours = Math.floor(inMinutes / 60);
  if (inHours < 24) {
    return dateStringBuilder(inHours, "hour");
  }
  const inDays = Math.floor(inHours / 24);
  if (inDays < 7) {
    return dateStringBuilder(inDays, "day");
  }
  const inWeeks = Math.floor(inDays / 7);
  if (inWeeks <= 10) {
    return dateStringBuilder(inWeeks, "week");
  }
  const inMonths = Math.floor(inDays / 30.42); // Mean number of days in a month.
  if (inMonths < 12) {
    return dateStringBuilder(inMonths, "month");
  }
  const inYears = Math.floor(inWeeks / 52);
  return dateStringBuilder(inYears, "year");
};

const getComments = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments/?api_key=55925818-32b8-44e9-a2bc-5fbdc5153bb7"
    )
    .then((response) => {
      comments = response.data;
      console.log(comments);
      comments.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
      displayComments(comments);
    });
};

getComments();

// Creates full list of comments
const displayComments = (array) => {
  commentsSectionEl.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    displayComment(array[i]);
  }
};

const deleteComments = (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(comment.id);

  // axios
  //   .delete(
  //     `https://project-1-api.herokuapp.com/comments/${comment.id}/?api_key=55925818-32b8-44e9-a2bc-5fbdc5153bb7`
  //   )
  //   .then(() => {
  //     displayComments();
  //   });
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
  commentDateEl.innerText = dynamicTimestamp(comment.timestamp);

  let commentTextEl = document.createElement("p");
  commentCopyEl.appendChild(commentTextEl);
  commentTextEl.classList.add("comment__text");
  commentTextEl.innerText = comment.comment;

  let buttonsEl = document.createElement("div");
  buttonsEl.classList.add("comment__buttons");
  commentCopyEl.appendChild(buttonsEl);

  let deleteButtonEl = document.createElement("a");
  deleteButtonEl.classList.add("comment__delete");
  buttonsEl.appendChild(deleteButtonEl);
  deleteButtonEl.innerHTML = "Delete";
  console.log(comment.id);

  deleteButtonEl.addEventListener("click", deleteComments);
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
};

const postComment = (event) => {
  event.preventDefault();

  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };

  axios
    .post(
      "https://project-1-api.herokuapp.com/comments/?api_key=55925818-32b8-44e9-a2bc-5fbdc5153bb7",
      newComment
    )
    .then((response) => {
      console.log(response);

      getComments();
      // axios
      //   .get(
      //     "https://project-1-api.herokuapp.com/comments/?api_key=55925818-32b8-44e9-a2bc-5fbdc5153bb7"
      //   )
      //   .then((response) => {
      //     comments = response.data;
      //     console.log(comments);
      //     comments.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
      //     displayComments(comments);

      event.target.name.value = "";
      event.target.comment.value = "";
    });
};

form.addEventListener("submit", postComment);
