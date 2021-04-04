# Get a Dad Joke

Hello from Brno! 🇨🇿 Get a Dad Joke is a personal mini project created by [Héctor Sosa](http://codepen.io/ekqt).

## Under the hood

The project is pretty minimalistic, it was build mainly  with the intention of testing an API with [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js.

### Background
Created an animated background with a dynamic hue-rotational filter (from 0 to 360 deg) from [Material Design's Color System](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) library.

```bash
filter: hue-rotate(360deg);
```

### Buttons
Animated with JavaScript. Within the button area there's a span embedded that expands at mouse/touch events fired from the user.

```bash
button.addEventListener('mouseenter', (e) => {
   span.style.top = Y;
   span.style.left = X;
});
```

### Live Clock
Build with JavaScript Date objects which represent a single moment in time in a platform-independent format. The function has a continuous running interval to updated as desired.

```bash
new Date().getUTCHours();
```

## Powered by Icanhazdadjoke
icanhazdadjoke.com by [C653 Labs](https://c653labs.com/).

[icanhazdadjoke.com](https://icanhazdadjoke.com/) is the largest selection of dad jokes on the internet. Now supporting many different integrations to ensure you can access the dad jokes that you need wherever you are.

## License
@ekheinquarto 2021 For more info: [ekheinquarto@gmail.com](mailito:ekheinquarto@gmail.com)