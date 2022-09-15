var currentTimeEl = document.querySelector(".lead");

setInterval(function() {
currentTimeEl.textContent = moment().format("LLLL");
},
1000);