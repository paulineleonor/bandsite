let shows = [
  // {
  //   date: "Mon Sept 06 2021",
  //   venue: "Ronald Lane",
  //   location: "San Francisco, CA",
  // },
  // {
  //   date: "Tue Sept 21 2021",
  //   venue: "Pier 3 East",
  //   location: "San Francisco, CA",
  // },
  // {
  //   date: "Fri Oct 15 2021",
  //   venue: "View Lounge",
  //   location: "San Francisco, CA",
  // },
  // {
  //   date: "Sat Nov 06 2021",
  //   venue: "Hyatt Agency",
  //   location: "San Francisco, CA",
  // },
  // {
  //   date: "Fri Nov 26 2021",
  //   venue: "Moscow Center",
  //   location: "San Francisco, CA",
  // },
  // {
  //   date: "Wed Dec 15 2021",
  //   venue: "Press Club",
  //   location: "San Francisco, CA",
  // },
];

axios
  .get("https://project-1-api.herokuapp.com/showdates/?api_key=paulinejeremie")
  .then((response) => {
    shows = response.data;
    // console.log(response.data);
    // for (i = 0; i < response.data; i++) {
    //   shows.push(response.data[i]);
    //   console.log(shows);
    // }

    console.log(shows);

    displayShow(shows);
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
const displayShow = (array) => {
  for (let i = 0; i < array.length; i++) {
    let showEl = document.createElement("article");
    showEl.classList.add("show");
    showsDetailsEl.appendChild(showEl);

    let dateLabelEl = document.createElement("h3");
    dateLabelEl.classList.add("show__label");
    showEl.appendChild(dateLabelEl);
    dateLabelEl.innerText = Object.keys(shows)[0];

    let showsDateEl = document.createElement("p");
    showsDateEl.classList.add("show__info");
    showsDateEl.classList.add("show__info--bold");
    showEl.appendChild(showsDateEl);
    showsDateEl.innerText = array[i].date;

    let venueLabelEl = document.createElement("h3");
    venueLabelEl.classList.add("show__label");
    showEl.appendChild(venueLabelEl);
    venueLabelEl.innerText = Object.keys(shows)[1];

    let showVenueEl = document.createElement("p");
    showVenueEl.classList.add("show__info");
    showEl.appendChild(showVenueEl);
    showVenueEl.innerText = array[i].place;

    let locationLabelEl = document.createElement("h3");
    locationLabelEl.classList.add("show__label");
    showEl.appendChild(locationLabelEl);
    locationLabelEl.innerText = Object.keys(shows)[2];

    let showLocationEl = document.createElement("p");
    showLocationEl.classList.add("show__info");
    showEl.appendChild(showLocationEl);
    showLocationEl.innerText = array[i].location;
    console.log(array[i]);

    let buttonContainerEl = document.createElement("div");
    buttonContainerEl.classList.add("show__button");
    showEl.appendChild(buttonContainerEl);

    let buttonEl = document.createElement("a");
    buttonEl.classList.add("show__link");
    buttonContainerEl.appendChild(buttonEl);
    buttonEl.innerText = "Buy tickets";
  }
};

displayShow(shows);

const showsList = document.querySelectorAll(".show");

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

selectShow(showsList);
