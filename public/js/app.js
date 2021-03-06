// const url = "http://puzzle.mead.io/puzzle";

// fetch(url).then((response) => {
//   response.json().then((data) => {
//     const { puzzle } = data;
//     console.log(puzzle);
//   });
// });

const weather = document.querySelector("form");
const searchInput = document.querySelector("input");

weather.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchInput.value;
  const message_1 = document.querySelector("#message-1");
  const message_2 = document.querySelector("#message-2");

  message_1.textContent = "Loading ...";
  message_2.textContent = "";

  const url2 = "/weather?address=" + encodeURIComponent(location);

  fetch(url2).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        return (document.querySelector(".error").textContent = data.error);
      }

      message_1.textContent = data.place + " Local Time: " + data.time;
      message_2.textContent = data.currently;
    });
  });
});
