const quoteDiv = document.getElementById("quote");
const authorDiv = document.getElementById("author");
const mainWrappperDiv = document.querySelector(".maindinhlam");
const backImage = document.querySelector('.back-img');

const getQuote = () => {
  fetch("https://quotes.rest/qod.json")
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);

      const quoteData = res.contents.quotes[0];
      quoteDiv.innerText = quoteData.quote;
      authorDiv.innerText = quoteData.author;
      mainWrappperDiv.style.backgroundImage = `url(${quoteData.background})`;
    })
    .catch((err) => console.log(err));
};

// Call the function initially
getQuote();

const downloadImage = () => {
  html2canvas(mainWrappperDiv, {
    onrendered: function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "html_image.png";
      link.href = canvas.toDataURL("image/png");
      link.target = "_blank";
      link.click();
      
      // document.body.appendChild(canvas)
    }
  });
};

const downloadBtn = document.querySelector(".download-image");
downloadBtn.addEventListener("click", downloadImage);
