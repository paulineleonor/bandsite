let shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

let showsSection = document.querySelector(".shows");

let showsTitle = document.createElement("h2");
showsTitle.classList.add("shows__title");
showsSection.appendChild(showsTitle);
showsTitle.innerText = "Shows";

let showsDetails = document.createElement("section");
showsDetails.classList.add("shows__details");
showsSection.appendChild(showsDetails);

let showsHeadings = document.createElement("div");
showsHeadings.classList.add("shows__headings");
showsDetails.appendChild(showsHeadings);

let showKeys = ["date", "venue", "location"];

const buildHeadings = (array) => {
  for (let i = 0; i < array.length; i++) {
    let header = document.createElement("h3");
    header.classList.add("show__heading");
    showsHeadings.appendChild(header);
    header.innerText = array[i];
  }
};

buildHeadings(showKeys);

// let showsHeadingDate = document.createElement("h3");
// showsHeadingDate.classList.add("shows__heading");
// showsHeadings.appendChild(showsHeadingDate);
// showsHeadingDate.innerText = "Date";

// let showsHeadingVenue = document.createElement("h3");
// showsHeadingVenue.classList.add("shows__heading");
// showsHeadings.appendChild(showsHeadingVenue);
// showsHeadingVenue.innerText = "Venue";

// let showsHeadingLocation = document.createElement("h3");
// showsHeadingLocation.classList.add("shows__heading");
// showsHeadings.appendChild(showsHeadingLocation);
// showsHeadingLocation.innerText = "Location";

const displayShows = (array) => {
  for (let i = 0; i < array.length; i++) {
    displayShow(array[i]);
  }
};

const displayShow = (shows) => {
  let show = document.createElement("article");
  show.classList.add("show");
  showsDetails.appendChild(show);
  let dateLabel = document.createElement("h3");
  dateLabel.classList.add("show__label");
  show.appendChild(dateLabel);
  dateLabel.innerText = Object.keys(shows)[0];
  let showDate = document.createElement("p");
  showDate.classList.add("show__info");
  showDate.classList.add("show__info--bold");
  show.appendChild(showDate);
  showDate.innerText = shows.date;
  let venueLabel = document.createElement("h3");
  venueLabel.classList.add("show__label");
  show.appendChild(venueLabel);
  venueLabel.innerText = Object.keys(shows)[1];
  let showVenue = document.createElement("p");
  showVenue.classList.add("show__info");
  show.appendChild(showVenue);
  showVenue.innerText = shows.venue;
  let locationLabel = document.createElement("h3");
  locationLabel.classList.add("show__label");
  show.appendChild(locationLabel);
  locationLabel.innerText = Object.keys(shows)[2];
  let showLocation = document.createElement("p");
  showLocation.classList.add("show__info");
  show.appendChild(showLocation);
  showLocation.innerText = shows.location;

  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("show__button");
  show.appendChild(buttonContainer);
  let buyButton = document.createElement("a");
  buyButton.classList.add("show__link");
  buttonContainer.appendChild(buyButton);
  buyButton.innerText = "Buy tickets";

  // show.addEventListener("click", function () {
  //   show.classList.toggle("show--active");
  // });
};

displayShows(shows);

// let tableRow = document.querySelector(".show");

// tableRow.addEventListener("click", function () {
//   tableRow.classList.toggle("show--active");
// });

const showsList = document.querySelectorAll(".show");

for (let i = 0; i < showsList.length; i++) {
  showsList[i].addEventListener("click", () => {
    for (let i = 0; i < showsList.length; i++) {
      showsList[i].classList.remove("show--active");
    }
    showsList[i].classList.toggle("show--active");
  });
}
