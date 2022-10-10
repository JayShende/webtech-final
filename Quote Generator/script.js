const api = "https://api.quotable.io/random";

      const quote = document.getElementById("quote");
      const author = document.getElementById("author");
      const btn = document.getElementById("btn");

      btn.addEventListener("click", main);
      

    function changebackgound(){
        
        document.body.style.backgroundImage =
      "url(https://source.unsplash.com/1600x900/?dark)";
    }
      function getQuote() {
        fetch(api)
          .then((res) => res.json())
          .then((data) => {
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = `- ${data.author}`;
          });
      }

      function main(){
        changebackgound();
        getQuote();
      }

      