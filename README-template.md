# Frontend Mentor - Interactive Rating Component Solution

This is a solution to the [Interactive Rating Component Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- the styling of the radio buttons was a pain in the butt. At first I used appearance: none; with the input. This however still showed the space where the radio button was.

Last time I selected elements from the HTML Document Object Model (DOM) by it's specified id with the method getElementById(). For this solution I used the querySelector and the querySelectorAll. They all let you find HTML elements. It means that it will find the first element in the document.

- querySelector() = grabs any First element on the document, you can pass any valid css selector to grab any element you want
- querySelectorAll() = is used to select multiple elements at one time, this used if you want to grab a selection/list of elements.

When you have control over the document use:
These are better for speed and performance.

- getElementByClassName() = grabs the element only by the Class
- getElementByTagName() = grabs the element only by the Tag
- getElementById() = grabs the element only by the ID

It is important to understand that all the content in the page is made of nodes. There are 13 kinds of nodes, but I will focus only on 3 nodes.

- Tags are element nodes
- Content in the elements are text nodes
- attribute nodes

When one speaks of nodes it can be referered to elements or text. They are both nodes. These three are used the most:

- document.getElementById(id) - returns 1 element node
- document.querySelector(css) - returns 1 element node
- document.querySelectorAll(css) - returns 1 nodeList

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

## Author

- Frontend Mentor - [@kxnzx](https://www.frontendmentor.io/profile/kxnzx)
