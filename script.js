document.addEventListener("DOMContentLoaded", function () {
  const prizesContainer = document.getElementById("prizes");
  const flyersContainer = document.getElementById("flyers");
  const flyerImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

  function displayPrizes(prizes) {
    prizes
      .filter((prize) => prize.isFeatured)
      .reverse()
      .forEach((prize) => {
        const prizeCard = document.createElement("div");
        prizeCard.className = "col-md-12";

        prizeCard.innerHTML = `
                    <div class="card">
                        <img src="./assets/logos/${
                          prize.Logo
                        }" class="card-img-top" alt="${prize.Name}">
                        <div class="card-body">
                            <h5 class="card-title">${prize.Name}</h5>
                            <p class="card-text">${prize.Prize || "TBD"}</p>
                            <a href="https://api.whatsapp.com/send/?phone=96181685499&text=Hello+I+want+to+buy+a+tombola+ticket&type=phone_number&app_absent=0" class="btn buy-ticket-btn">Buy Tombola For Only 100,000L.L</a>
                        </div>
                    </div>
                `;

        prizesContainer.appendChild(prizeCard);
      });
    prizes
      .filter((prize) => !prize.isFeatured)
      .sort((a, b) => a.Class.localeCompare(b.Class))
      .forEach((prize) => {
        const prizeCard = document.createElement("div");
        prizeCard.className = "col-md-6";

        prizeCard.innerHTML = `
                    <div class="card">
                        <img src="./assets/logos/${
                          prize.Logo
                        }" class="card-img-top" alt="${prize.Name}">
                        <div class="card-body">
                            <h5 class="card-title">${prize.Name}</h5>
                            <p class="card-text">${prize.Prize || "TBD"}</p>
                            <a href="https://api.whatsapp.com/send/?phone=96181685499&text=Hello+I+want+to+buy+a+tombola+ticket&type=phone_number&app_absent=0" class="btn buy-ticket-btn">Buy Tombola For Only 100,000L.L</a>
                        </div>
                    </div>
                `;

        prizesContainer.appendChild(prizeCard);
      });

    document.getElementById(
      "prizes-title"
    ).innerHTML = `Tombola Prizes - (${prizes.reduce(
      (acc, prize) => acc + prize.Number,
      0
    )} Prizes)`;
  }

  function displayFlyerImages(images) {
    images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = `./assets/flyers/${image}`;
      imgElement.alt = `Flyer ${image}`;
      imgElement.classList.add("img-fluid", "my-3");
      flyersContainer.appendChild(imgElement);
    });
  }

  fetch("./assets/data/prizes.json")
    .then((response) => response.json())
    .then((data) => {
      displayPrizes(data);
    });

  displayFlyerImages(flyerImages);
});
