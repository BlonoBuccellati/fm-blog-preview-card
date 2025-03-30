# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Blog preview card solution](#frontend-mentor---blog-preview-card-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Frontend Mentor Solutions](https://www.frontendmentor.io/profile/BlonoBuccellati/solutions)
- Live Site URL: [Blog Preview Card Deployed on Vercel](https://fm-blog-preview-card-nu.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework

### What I learned

I introduced prettier-plugin-tailwindcss to enable automatic class sorting. Additionally, I learned about the Image tag in Next.js. I initially struggled with its usage and took some time to understand how to handle it properly. Eventually, I found that using the fill property is necessary to make the Image tag adapt to any size.

```js
<div className="relative h-[200px]">
  <Image
    src="/assets/images/illustration-article.svg"
    alt="Blog illustration"
    fill
    className="rounded-2xl object-cover"
  />
</div>
```

I also experimented with implementing a design system in globals.css. However, I am unsure whether this approach aligns with Tailwind CSS's utility-first philosophy, making it a topic for further exploration.

```css
@theme {
  --color-custom-yellow: rgb(244, 208, 78);
  --color-custom-gray-500: rgb(107, 107, 107);
  --color-custom-gray-950: rgb(17, 17, 17);
}
```

### Continued development

I encountered a situation where I was unsure whether to use a div or a p tag. Based on my current understanding, a p tag represents a block of text, while it is not suitable for elements that function as labels or tags. However, I realized that my understanding of semantic HTML is still lacking and that I need to study it further.

Additionally, I struggled with determining the appropriate level of customization for a design system, which made me recognize that my understanding is still shallow. Moving forward, I want to deepen my knowledge of naming conventions and CSS meta-frameworks while gaining more practical experience to fully grasp the utility-first philosophy of Tailwind CSS.

### Useful resources

- [Using Images in Next.js (next/image examples)](https://www.youtube.com/watch?v=IU_qq_c_lKA) - This helped me for using Image tag in Next.js.

## Author

- GitHub - [BlonoBuccellati](https://github.com/BlonoBuccellati)
- Frontend Mentor - [@BlonoBuccellati](https://www.frontendmentor.io/profile/BlonoBuccellati)
- zenn - [@bln](https://zenn.dev/bln)
