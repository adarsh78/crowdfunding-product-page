const menuBtn = document.querySelector(".icon-hamburger");
const closeMenuBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const backThisProjectBtn = document.querySelector(".backThisProject button");
const modal = document.querySelector(".modal-component");
const closeModalBtn = document.querySelector(".close-modal");
const thankyouModal = document.querySelector(".thank-you-component");
const gotItBtn = document.querySelector(".thankyou button");
const bookmark = document.querySelector(".bookmark");
const selectRewardBtn25 = document.querySelectorAll(".reward-btn25");
const selectRewardBtn75 = document.querySelectorAll(".reward-btn75");
const chkBoxNoReward = document.querySelector(".no-reward");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  menuBtn.style.display = "none";
  closeMenuBtn.style.display = "flex";
})

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  menuBtn.style.display = "flex";
  closeMenuBtn.style.display = "none";
})

backThisProjectBtn.addEventListener("click", () => {
  modal.style.display = "flex";
})

bookmark.addEventListener("click", (e) => {
  bookmark.style.color = "hsl(176, 72%, 28%)";
})

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
})

chkBoxNoReward.addEventListener("click", () => {
  if(chkBoxNoReward.checked){
    thankyouModal.style.display = "flex";
    modal.style.display = "none"
    document.body.style.overflow = "hidden";
  }
})

gotItBtn.addEventListener("click", () => {
  thankyouModal.style.display = "none";
  document.body.style.overflow = "auto";
})

let totalSum = 89914;
let backers = 5007;
let pledgeAmount;

const updateTotal = (amount) => {
  totalSum += amount;
  const money = document.querySelector(".money h2")
  const backersElement = document.querySelector(".backers h2");
  money.innerText = "$" + totalSum.toLocaleString("en-US");
  backers++;
  backersElement.innerText = backers.toLocaleString("en-US")
} 

const reward = (pledgeAmount) => {
  if(!isNaN(pledgeAmount))
  updateTotal(pledgeAmount);
}


document.querySelectorAll(".reward-btn").forEach((rewardBtn) => {
  rewardBtn.addEventListener("click", () => {
    const card = rewardBtn.closest('.sub-card');
    if (card) {
      const pledgeAmountElement = card.querySelector(".pledgeAmount");
      const quantityLeft = card.querySelector(".qty-left span")
      if (pledgeAmountElement) {
        quantityLeft.innerText--;
        pledgeAmount = parseFloat(pledgeAmountElement.innerText.replace(/[^0-9.]/g, ''));
        reward(pledgeAmount);
        thankyouModal.style.display = "flex";
      }
    }
  });
})


const manualReward = document.querySelectorAll(".reward");
const pledge = document.querySelectorAll(".enter-your-pledge");

manualReward.forEach((manRwd, index) => {
  manRwd.addEventListener("click", () => {
    pledge.forEach((plg, i) => {
      if(i == index){
        plg.style.display = "flex";
        manRwd.checked = true;
        const continueBtn = plg.querySelector("button");
        continueBtn.addEventListener("click", () => {
          reward(pledgeAmount);
          modal.style.display = "none";
          thankyouModal.style.display = "flex";
        })
      }
      else {
        plg.style.display = "none";
          if (manualReward[i]) {
            manualReward[i].checked = false;
          }
      }
    });
  })
})
