const Joke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    document.querySelector('#dadJoke').textContent = res.data.joke;
  }
  
  Joke();
  
  document.querySelector('#anotherOne').addEventListener('click', () => {
    Joke();
  });