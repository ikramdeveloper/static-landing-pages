const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

const rmBorder = () => {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
};

const rmShow = () => {
  tabContentItems.forEach((item) => item.classList.remove("show"));
};

function selectItem(e) {
  rmBorder();
  rmShow();
  const item = e.currentTarget;
  item.classList.add("tab-border");
  const tabId = item.id;
  const tabContentItem = document.querySelector(`#${tabId}-content`);
  tabContentItem.classList.add("show");
}

tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});
