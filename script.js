let quotesText = document.querySelector('#text');
let quotesAuthor = document.querySelector('#author');
let body = document.querySelector('body');

const getQueotes = document.querySelector('#new-quote');
getQueotes.addEventListener('click', getData);
document.addEventListener('DOMContentLoaded', getData);

const shareBtn = document.querySelector('#twitter-icon');
shareBtn.addEventListener('click', () => {
    let url = `https://twitter.com/intent/tweet?url=https%3A%2F%2Ferensarac.github.io%2Frandom-quote&text=lorem!&hashtags=random%20%23queto`
    window.open(url, '_blank');
})

function getData() {
    // Get data with fetch api.
    fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(res => createQuotes(res))
        .catch(error => console.log(error));
}

function createQuotes(res) {
    let randomNumber = Math.floor(Math.random() * res.length);

    quotesText.innerHTML = res[randomNumber].text;
    quotesAuthor.innerHTML = res[randomNumber].author;

    if (res[randomNumber].author === null || res[randomNumber].author === '') {
        quotesAuthor.innerHTML = 'Unkown';
    }

    quotesText.style.background = colors[Math.floor(Math.random() * colors.length)];
    quotesText.style.webkitBackgroundClip = 'text';
    quotesText.style.webkitTextFillColor = 'transparent';
    // body.style.background = 'linear-gradient(45deg, #d4fc79, #96e6a1)';
    console.log(colors[2]);
}

// Every 5 sec getData function will start.
setInterval(getData, 5000);

// Gradient Colors Data
const colors = [
    "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
    "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
    "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
    "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
    "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
    "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
    "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)",
    "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
    "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)",
    "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
    "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
    "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
    "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
    "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
    "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
    "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
    "radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
    "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
    "linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)",
]
