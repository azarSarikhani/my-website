window.addEventListener("DOMContentLoaded", function(e) {
    const orderButtons = document.querySelectorAll("button[data-order]");

    orderButtons.forEach(function(button) {
      
      button.addEventListener("click", function(e) {
        const button = e.currentTarget;
        const container = button.parentNode;

        const request = {
          id:  button.getAttribute("data-order"),
          title: container.querySelector(".title").innerText,
          timeStamp: container.querySelector(".timeStamp").innerText,
          desc: container.querySelector(".desc").innerText
        };

        localStorage.setItem("request", JSON.stringify(request));

        const url = window.location.href.replace("aboutMe.html", "request.html");
        window.location.href = url;
      });
    });
  });