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

// let showsTable = document.createElement("table");
// showsTable.classList.add("shows__table");
// showsSection.appendChild(showsTable);

let showsDetails = document.createElement("section");
showsDetails.classList.add("shows__details");
showsSection.appendChild(showsDetails);

let showsHeadings = document.createElement("div");
showsHeadings.classList.add("shows__headings");
showsDetails.appendChild(showsHeadings);
let showsHeadingDate = document.createElement("h3");
showsHeadingDate.classList.add("shows__heading");
showsHeadings.appendChild(showsHeadingDate);
showsHeadingDate.innerText = "Date";
let showsHeadingVenue = document.createElement("h3");
showsHeadingVenue.classList.add("shows__heading");
showsHeadings.appendChild(showsHeadingVenue);
showsHeadingVenue.innerText = "Venue";
let showsHeadingLocation = document.createElement("h3");
showsHeadingLocation.classList.add("shows__heading");
showsHeadings.appendChild(showsHeadingLocation);
showsHeadingLocation.innerText = "Location";

function displayShows(array) {
  for (let i = 0; i < array.length; i++) {
    let show = document.createElement("article");
    show.classList.add("show");
    showsDetails.appendChild(show);
    let dateLabel = document.createElement("h3");
    dateLabel.classList.add("show__label");
    show.appendChild(dateLabel);
    dateLabel.innerText = Object.keys(array[0])[0];
    let showDate = document.createElement("p");
    showDate.classList.add("show__date");
    show.appendChild(showDate);
    showDate.innerText = array[i].date;
    let venueLabel = document.createElement("h3");
    venueLabel.classList.add("show__label");
    show.appendChild(venueLabel);
    venueLabel.innerText = Object.keys(array[0])[1];
    let showVenue = document.createElement("p");
    showVenue.classList.add("show__venue");
    show.appendChild(showVenue);
    showVenue.innerText = array[i].venue;
    let locationLabel = document.createElement("h3");
    locationLabel.classList.add("show__label");
    show.appendChild(locationLabel);
    locationLabel.innerText = Object.keys(array[0])[2];
    let showLocation = document.createElement("p");
    showLocation.classList.add("show__location");
    show.appendChild(showLocation);
    showLocation.innerText = array[i].location;
    let buyButton = document.createElement("a");
    buyButton.classList.add("show__button");
    show.appendChild(buyButton);
    buyButton.innerText = "Buy tickets";
  }
}

displayShows(shows);
