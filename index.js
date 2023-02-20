const listItem = document.getElementsByClassName("list-item");

for (const item of listItem) {
  const onLabelClicked = () => {
    // if the clicked element has the active class, remove it
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      return;
    }

    //remove active class from all elements
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }

    // add active class to the clicked element
    item.classList.add("active");
  };

  item.addEventListener("click", onLabelClicked);
}
