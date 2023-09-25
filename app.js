const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create our first shop
const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

seattle.calculateSales();
console.log(seattle);

const seattleSalesList = document.createElement("ul");
seattleSalesList.innerHTML = "<h2>Seattle</h2>";

for (let i = 0; i < hours.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `${hours[i]}: ${Math.round(
    seattle.cookiesPerHour[i]
  )} cookies`;
  seattleSalesList.appendChild(listItem);
}

const smokySalmon = document.getElementById("seattle-sales");
smokySalmon.appendChild(seattleSalesList);

// Tokyo
const tokyo = {
  location: "tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

tokyo.calculateSales();

const tokyoSalesList = document.createElement("ul");
tokyoSalesList.innerHTML = "<h2>Tokyo</h2>";

for (let i = 0; i < hours.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `${hours[i]}: ${Math.round(
    tokyo.cookiesPerHour[i]
  )} cookies`;
  tokyoSalesList.appendChild(listItem);
}

const tokyoSmokySalmon = document.getElementById("tokyo-sales");
tokyoSmokySalmon.appendChild(tokyoSalesList);

// Dubai
const dubai = {
  location: "dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

dubai.calculateSales();

const dubaiSalesList = document.createElement("ul");
dubaiSalesList.innerHTML = "<h2>Dubai</h2>";

for (let i = 0; i < hours.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `${hours[i]}: ${Math.round(
    dubai.cookiesPerHour[i]
  )} cookies`;
  dubaiSalesList.appendChild(listItem);
}

const dubaiSmokySalmon = document.getElementById("dubai-sales");
dubaiSmokySalmon.appendChild(dubaiSalesList);

// Paris
const paris = {
  location: "paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

paris.calculateSales();

const parisSalesList = document.createElement("ul");
parisSalesList.innerHTML = "<h2>Paris</h2>";

for (let i = 0; i < hours.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `${hours[i]}: ${Math.round(
    paris.cookiesPerHour[i]
  )} cookies`;
  parisSalesList.appendChild(listItem);
}

const parisSmokySalmon = document.getElementById("paris-sales");
parisSmokySalmon.appendChild(parisSalesList);

// Lima
const lima = {
  location: "lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

lima.calculateSales();

const limaSalesList = document.createElement("ul");
limaSalesList.innerHTML = "<h2>Lima</h2>";

for (let i = 0; i < hours.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `${hours[i]}: ${Math.round(
    lima.cookiesPerHour[i]
  )} cookies`;
  limaSalesList.appendChild(listItem);
}

const limaSmokySalmon = document.getElementById("lima-sales");
limaSmokySalmon.appendChild(limaSalesList);
