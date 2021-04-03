const Joke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    document.querySelector('#dadJoke').textContent = res.data.joke;
}
  
document.querySelector('#anotherOne').addEventListener('click', () => {
    Joke();
    document.querySelector('#dadJoke').style.transform = 'translateY(-5px)';
});

document.querySelector('#copyJoke').addEventListener('click', () => {
    let temp = document.createElement('textarea');
    temp.textContent = document.querySelector('#dadJoke').textContent;
    document.querySelector('body').append(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    document.querySelector('#dadJoke').style.transform = 'translateY(-5px)';
});

let buttons = document.querySelectorAll('.button');
let spans = document.querySelectorAll('.span');

buttons.forEach(button => {
  spans.forEach(span => {
      button.addEventListener('mouseenter', (e) => {
        let Y = e.pageY - button.offsetTop;
        let X = e.pageX - button.offsetLeft;
        span.style.top = Y+"px";
        span.style.left = X+"px";
      });
      button.addEventListener('mouseleave', (e) => {
        let Y = e.pageY - button.offsetTop;
        let X = e.pageX - button.offsetLeft;
        span.style.top = Y+"px";
        span.style.left = X+"px";
        document.querySelector('#dadJoke').style.transform = 'translateY(0px)';
      });
      button.addEventListener('touchstart', (e) => {
        let Y = e.pageY - button.offsetTop;
        let X = e.pageX - button.offsetLeft;
        span.style.top = Y+"px";
        span.style.left = X+"px";
      });
      button.addEventListener('touchmove', (e) => {
        let Y = e.pageY - button.offsetTop;
        let X = e.pageX - button.offsetLeft;
        span.style.top = Y+"px";
        span.style.left = X+"px";
      });
      button.addEventListener('touchend', (e) => {
        let Y = e.pageY - button.offsetTop;
        let X = e.pageX - button.offsetLeft;
        span.style.top = Y+"px";
        span.style.left = X+"px";
        document.querySelector('#dadJoke').style.transform = 'translateY(0px)';
      });
      button.addEventListener('touchcancel', (e) => {
        let Y = e.pageY - button.offsetTop;
        let X = e.pageX - button.offsetLeft;
        span.style.top = Y+"px";
        span.style.left = X+"px";
        document.querySelector('#dadJoke').style.transform = 'translateY(0px)';
      });
  });
});
  
function dateLoader() {
    const clock = `${(new Date().getUTCHours() + 2) % 12 || 12}:${new Date().getUTCMinutes().toString().padStart(2, "0")}:${new Date().getUTCSeconds().toString().padStart(2, "0")} ${(new Date().getUTCHours() + 2) < 12 ? "AM" : "PM"}`;

    document.querySelector('footer p').innerHTML = `Hello from Brno! It's ${clock} here! <br> <b>Get a Dad Joke!</b> is a personal mini project created by <a href="https://codepen.io/ekqt">Héctor Sosa</a>.`
}

dateLoader();

var timer;

function timeInterval () {
    timer = setInterval(dateLoader, 1000);
};

timeInterval();