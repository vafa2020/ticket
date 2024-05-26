const formBoxDom = document.querySelector(".formBox");
const formDom = document.querySelector("#form");
const nameDom = document.querySelector("#name");
const PassportNumberDom = document.querySelector("#PassportNumber");
const countryDom = document.querySelector("#country");
const dateTicketDom = document.querySelector("#dateTicket");
const fromDom = document.querySelector("#from");
const toDom = document.querySelector("#to");
const priceTicketDom = document.querySelector("#priceTicket");
const numberFlyDom = document.querySelector("#numberFly");
const numberChairDom = document.querySelector("#numberChair");
const dateTravelDom = document.querySelector("#dateTravel");
const dateExistDom = document.querySelector("#dateExist");
const numberTicketDom = document.querySelector("#numberTicket");
const resultDom = document.querySelector("#result");

function refresh() {
  window.location.reload();
}
formDom.addEventListener("submit", (e) => {
  e.preventDefault();
  const wrapper = document.createElement("div");

  const formValue = {
    name: nameDom.value,
    PassportNumber: PassportNumberDom.value,
    country: countryDom.value,
    dateTicket: dateTicketDom.value,
    from: fromDom.value,
    to: toDom.value,
    priceTicket: priceTicketDom.value,
    numberFly: numberFlyDom.value,
    numberChair: numberChairDom.value,
    dateTravel: dateTravelDom.value,
    dateExist: dateExistDom.value,
    numberTicket: numberTicketDom.value,
  };
  const print = ` <div class="printSectionOne">
  <p>${nameDom.value}</p>
  <p>${PassportNumberDom.value}</p>
  <p>${countryDom.value}</p>
  <p>${dateTicketDom.value}</p>
</div>
<div class="printSectionTwo">
  <p>${fromDom.value}</p>
  <p>${toDom.value}</p>
</div>
<div class="printSectionThree">
  <p>${priceTicketDom.value}</p>
</div>
<div class="printSectionFour">
  <p>${numberFlyDom.value}</p>
  <p>${numberChairDom.value}</p>
  <p>${dateTravelDom.value}</p>
  <p>${dateExistDom.value}</p>
</div>
<div class="printSectionFive">
  <p>${numberTicketDom.value}</p>
  <p>${nameDom.value}</p>
  <div class="splitBox">
    <p>${numberFlyDom.value}</p>
    <p>${numberChairDom.value}</p>
  </div>
  <p>${dateTravelDom.value}</p>
  <p>${dateTicketDom.value}</p>
</div>`;

  //   console.log("formValue", formValue);
  wrapper.innerHTML = print;
  resultDom.appendChild(wrapper);
  formBoxDom.style.display = "none";
  window.print();
});

window.onload = formBoxDom.style.display = "flex";
