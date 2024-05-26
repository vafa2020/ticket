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
const e2a = (s) => s?.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
function refresh() {
  window.location.reload();
}
formDom.addEventListener("submit", (e) => {
  e.preventDefault();
  const wrapper = document.createElement("div");
  const print = ` <div class="printSectionOne">
  <p>${e2a(`${nameDom.value}`)}</p>
  <p>${e2a(`${PassportNumberDom.value}`)}</p>
  <p>${e2a(`${countryDom.value}`)}</p>
  <p>${e2a(`${dateTicketDom.value}`)}</p>
</div>
<div class="printSectionTwo">
  <p>${e2a(`${fromDom.value}`)}</p>
  <p>${e2a(`${toDom.value}`)}</p>
</div>
<div class="printSectionThree">
  <p>${e2a(`${priceTicketDom.value}`)}</p>
</div>
<div class="printSectionFour">
  <p>${e2a(`${numberFlyDom.value}`)}</p>
  <p>${e2a(`${numberChairDom.value}`)}</p>
  <p>${e2a(`${dateTravelDom.value}`)}</p>
  <p>${e2a(`${dateExistDom.value}`)}</p>
</div>
<div class="printSectionFive">
  <p>${e2a(`${numberTicketDom.value}`)}</p>
  <p>${e2a(`${nameDom.value}`)}</p>
  <div class="splitBox">
    <p>${e2a(`${numberFlyDom.value}`)}</p>
    <p>${e2a(`${numberChairDom.value}`)}</p>
  </div>
  <p>${e2a(`${dateTravelDom.value}`)}</p>
  <p>${e2a(`${dateTicketDom.value}`)}</p>
</div>`;

  wrapper.innerHTML = print;
  resultDom.appendChild(wrapper);
  formBoxDom.style.display = "none";
  window.print();
});

window.onload = formBoxDom.style.display = "flex";
