const apiKey = "55925818-32b8-44e9-a2bc-5fbdc5153bb7";
let shows = [];
let showsList = [];

const dateFormatting = (timeStamp) => {
  let date = new Date(timeStamp).toString().split(" ").splice(0, 4);
  let formattedDate = `${date[0]} ${date[1]} ${date[2]} ${date[3]}`;
  return formattedDate;
};

axios
  .get(
    "https://project-1-api.herokuapp.com/showdates/?api_key=55925818-32b8-44e9-a2bc-5fbdc5153bb7"
  )
  .then((response) => {
    shows = response.data;
    displayShows(shows);

    selectShow(showsList);
  });

// Build shows section structure
let showsSectionEl = document.querySelector(".shows__container");

let showsTitleEl = document.createElement("h2");
showsTitleEl.classList.add("shows__title");
showsSectionEl.appendChild(showsTitleEl);
showsTitleEl.innerText = "Shows";

let showsDetailsEl = document.createElement("section");
showsDetailsEl.classList.add("shows__details");
showsSectionEl.appendChild(showsDetailsEl);

let showsHeadingsEl = document.createElement("div");
showsHeadingsEl.classList.add("shows__headings");
showsDetailsEl.appendChild(showsHeadingsEl);

// Generates series of headers for desktop version
let showKeys = ["date", "venue", "location", ""];

const buildHeadings = (array) => {
  for (let i = 0; i < array.length; i++) {
    let headerEl = document.createElement("h3");
    headerEl.classList.add("shows__heading");
    showsHeadingsEl.appendChild(headerEl);
    headerEl.innerText = array[i];

    if (i === 0) {
      headerEl.classList.add("shows__heading--width");
    }
  }
};

buildHeadings(showKeys);

// Creates full list of shows
const displayShows = (array) => {
  for (let i = 0; i < array.length; i++) {
    displayShow(array[i]);
  }
};

// Builds a block for each object in shows array
const displayShow = (show) => {
  let showEl = document.createElement("article");
  showEl.classList.add("show");
  showsDetailsEl.appendChild(showEl);

  let dateLabelEl = document.createElement("h3");
  dateLabelEl.classList.add("show__label");
  showEl.appendChild(dateLabelEl);
  dateLabelEl.innerText = showKeys[0];

  let showsDateEl = document.createElement("p");
  showsDateEl.classList.add("show__info");
  showsDateEl.classList.add("show__info--bold");
  showsDateEl.innerText = dateFormatting(show.date);
  showEl.appendChild(showsDateEl);

  let venueLabelEl = document.createElement("h3");
  venueLabelEl.classList.add("show__label");
  showEl.appendChild(venueLabelEl);
  venueLabelEl.innerText = showKeys[1];

  let showVenueEl = document.createElement("p");
  showVenueEl.classList.add("show__info");
  showEl.appendChild(showVenueEl);
  showVenueEl.innerText = show.place;

  let locationLabelEl = document.createElement("h3");
  locationLabelEl.classList.add("show__label");
  showEl.appendChild(locationLabelEl);
  locationLabelEl.innerText = showKeys[2];

  let showLocationEl = document.createElement("p");
  showLocationEl.classList.add("show__info");
  showEl.appendChild(showLocationEl);
  showLocationEl.innerText = show.location;

  let buttonContainerEl = document.createElement("div");
  buttonContainerEl.classList.add("show__button");
  showEl.appendChild(buttonContainerEl);

  let buttonEl = document.createElement("a");
  buttonEl.classList.add("show__link");
  buttonContainerEl.appendChild(buttonEl);
  buttonEl.innerText = "Buy tickets";

  showsList.push(showEl);
};

// Allows shows to be selected and have styling applied
const selectShow = (array) => {
  for (let i = 0; i < showsList.length; i++) {
    showsList[i].addEventListener("click", () => {
      for (let i = 0; i < showsList.length; i++) {
        showsList[i].classList.remove("show--active");
      }
      showsList[i].classList.add("show--active");
    });
  }
};

// selectShow(showsList);
