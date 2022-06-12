/* eslint-disable no-alert */

function updateCoffeeView(coffeeQty) {
  let countSpan = document.getElementById("coffee_counter");
  countSpan.innerText = coffeeQty;
}

function clickCoffee(data) {
  data.coffee++;
  updateCoffeeView(data.coffee);
  if (renderProducers) {
    renderProducers(data);
  }
}

function unlockProducers(producers, coffeeCount) {
  producers.forEach((producer) => {
    if (coffeeCount >= producer.price / 2) {
      producer.unlocked = true;
    }
  });
  return producers;
}

function getUnlockedProducers(data) {
  let producers = data.producers;
  let filtered = producers.filter((producer) => producer.unlocked === true);
  return filtered;
}

function makeDisplayNameFromId(id) {
  const idSplit = id.split("_");
  const idJoined = idSplit
    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(" ");
  return idJoined;
}

// You shouldn't need to edit this function-- its tests should pass once you've written makeDisplayNameFromId
function makeProducerDiv(producer) {
  const containerDiv = document.createElement("div");
  containerDiv.className = "producer";
  const displayName = makeDisplayNameFromId(producer.id);
  const currentCost = producer.price;
  const html = `
  <div class="producer-column">
    <div class="producer-title">${displayName}</div>
    <button type="button" id="buy_${producer.id}">Buy</button>
  </div>
  <div class="producer-column">
    <div>Quantity: <span class="mono">${producer.qty}</span></div>
    <div>Coffee/second: <span class="mono">${producer.cps}</span></div>
    <div>Cost: <span class="mono">${currentCost}</span> coffee</div>
  </div>
  `;
  containerDiv.innerHTML = html;
  return containerDiv;
}

function deleteAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderProducers(data) {
  const producerContainer = document.getElementById("producer_container");
  deleteAllChildNodes(producerContainer);
  unlockProducers(data.producers, data.coffee);
  let unlockedProducers = getUnlockedProducers(data);
  unlockedProducers.forEach((producer) => {
    const producerDiv = makeProducerDiv(producer);
    producerContainer.appendChild(producerDiv);
  });
}


function getProducerById(data, producerId) {
  const producerById = data.producers.filter(
    (producer) => producer.id === producerId
  );
  return producerById[0];
}

function canAffordProducer(data, producerId) {
  let producerPrice = getProducerById(data, producerId).price;
  return producerPrice <= data.coffee;
}
function updateCPSView(cps) {
  const totalCps = document.getElementById("cps");
  totalCps.innerText = cps;
}

function updatePrice(oldPrice) {
  return Math.floor(oldPrice * 1.25);
}

function attemptToBuyProducer(data, producerId) {
  if (canAffordProducer(data, producerId)) {
    let producer = getProducerById(data, producerId);

    producer.qty++;
    data.coffee = data.coffee - producer.price;
    producer.price = updatePrice(producer.price);
    data.totalCPS += producer.cps;
    updateCoffeeView(data.coffee);
    updateCPSView(data.totalCPS);
    renderProducers(data);

    return true;
  }
  return false;
}

function buyButtonClick(event, data) {
  let DOMproducerId = event.target.id;
  DOMproducerId = DOMproducerId.slice(4);
  if (attemptToBuyProducer(data, DOMproducerId)) {
    attemptToBuyProducer(data, DOMproducerId);
  } else {
    window.alert(`Not enough coffee!`);
  }
}

function tick(data) {
  data.coffee += data.totalCPS;
  updateCoffeeView(data.coffee);
  renderProducers(data);
}

if (typeof process === "undefined") {
  const data = window.data;


  const bigCoffee = document.getElementById("big_coffee");
  bigCoffee.addEventListener("click", () => clickCoffee(data));

  const producerContainer = document.getElementById("producer_container");
  producerContainer.addEventListener("click", (event) => {
    const clickTarget = event.target;
    if (clickTarget.tagName === "BUTTON") {
      buyButtonClick(event, data);
    }
  });


  setInterval(() => tick(data), 1000);
}

else if (process) {
  module.exports = {
    updateCoffeeView,
    clickCoffee,
    unlockProducers,
    getUnlockedProducers,
    makeDisplayNameFromId,
    makeProducerDiv,
    deleteAllChildNodes,
    renderProducers,
    updateCPSView,
    getProducerById,
    canAffordProducer,
    updatePrice,
    attemptToBuyProducer,
    buyButtonClick,
    tick,
  };
}
