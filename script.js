const body = document.querySelector('body');
// Quotes Text HTML Element
const quotesText = document.querySelector('#text');
// Quotes Author HTML Element
const quotesAuthor = document.querySelector('#author');
// Quotes Icon HTML Element
const quoteIcon = document.querySelector('#queto-icon');
// New Quote Button HTML Element
const getQueotes = document.querySelector('#new-quote');

// New Quote Button Event
getQueotes.addEventListener('click', getData);
// Page Loaded Event
document.addEventListener('DOMContentLoaded', getData);

// Share Button HTML Element ( Twitter Icon )
const shareBtn = document.querySelector('#twitter-icon');
// Twitter Icon Click Event
shareBtn.addEventListener('click', () => {
    let url = `https://twitter.com/intent/tweet?url=https%3A%2F%2Ferensarac.github.io%2Frandom-queto&text=Hadi%20%20sende%20%20yap!&hashtags=random%20%23queto`
    window.open(url, '_blank');
})

function getData() {
    // Get data with fetch api.
    fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(res => createQuotes(res))
        .catch(error => console.log(error));
}

// Create Quote Function
function createQuotes(res) {
    // Getting Random Number Between 0 - Quotes Array Length
    let randomNumber = Math.floor(Math.random() * res.length);
    let gradientColor = colors[Math.floor(Math.random() * colors.length)];
    quotesText.innerHTML = res[randomNumber].text.toUpperCase();
    quotesAuthor.innerHTML = res[randomNumber].author;
    if (res[randomNumber].author === null || res[randomNumber].author === '') {
        quotesAuthor.innerHTML = 'Unkown';
    }
    // Quote Text Gradient Cover
    quotesText.style.background = gradientColor;
    quotesText.style.webkitBackgroundClip = 'text';
    quotesText.style.webkitTextFillColor = 'transparent';
}

// Every 10 sec getData function will work, for new quote
setInterval(getData, 10000);

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
    "linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)",
    "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
    "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)",
    "linear-gradient(-225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%)",
    "linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)",
    "linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)",
    "linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)",
    "linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)",
    "linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%)",
    "linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)",
    "linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)",
    "linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)",
    "linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)",
    "linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%)",
    "linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%)",
    "linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)",
    "linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%)",
    "linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)",
    "linear-gradient(-225deg, #B6CEE8 0%, #F578DC 100%)",
    "linear-gradient(-225deg, #B6CEE8 0%, #F578DC 100%)",
    "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
    "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)",
    "linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)",
    "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
    "linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%)",
    "linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%)",
    "linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)",
    "linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)",
    "linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%)",
    "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)",
    "linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)",
    "linear-gradient(to top, #007adf 0%, #00ecbc 100%)",
    "linear-gradient(to right, #ec77ab 0%, #7873f5 100%)",
    "linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)",
    "linear-gradient(to top, #b224ef 0%, #7579ff 100%)",
    "linear-gradient(to top, #e14fad 0%, #f9d423 100%)",
    "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
    "linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)",
    "linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)",
    "linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)",
    "linear-gradient(to right, #0acffe 0%, #495aff 100%)",
    "linear-gradient(to top, #50cc7f 0%, #f5d100 100%)",
    "linear-gradient(to right, #f9d423 0%, #ff4e50 100%)",
    "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)"
]
