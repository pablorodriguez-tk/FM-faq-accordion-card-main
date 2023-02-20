# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./FinalProduct/mobile.png)
![](./FinalProduct/desktop.png)

### Links

- Live Site URL: [LIVE SITE](https://jocular-hummingbird-e98b36.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

#### Accordion using JS

```js
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
```

```html
<li>
  <label for="first" class="list-item"
    >How many team members can I invite?
    <img src="./images/icon-arrow-down.svg" alt=""
  /></label>
  <div class="content">
    <p>
      You can invite up to 2 additional users on the Free plan. There is no
      limit on team members for the Premium plan.
    </p>
  </div>
</li>
<div class="divider"></div>
<li>
  <label for="second" class="list-item"
    >What is the maximum file upload size?
    <img src="./images/icon-arrow-down.svg" alt=""
  /></label>
  <div class="content">
    <p>
      No more than 2GB. All files in your account must fit your allotted storage
      space.
    </p>
  </div>
</li>
```

```css
#accordion li label.active + .content {
  max-height: 400px;
  margin-top: 0.5rem;
}

#accordion li > label.active > img {
  transform: rotate(180deg);
}
```
