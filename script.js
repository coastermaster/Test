

const form = document.querySelector('form');
const input = document.querySelector('input');





form.addEventListener('submit', async event => {
  event.preventDefault();
  window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    event.preventDefault();
    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

    // Create an iframe element
    const iframe = document.createElement('iframe');
    iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    iframe.width = '100%'; // Set the width as needed
    iframe.height = '400px'; // Set the height as needed

    // Append the iframe to a container element in your HTML
    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.innerHTML = ''; // Clear previous iframe, if any
    iframeContainer.appendChild(iframe);
  });
});

function isUrl(val = '') {
  event.preventDefault();
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};

function loadMario() {
  window.location.replace('g4mescreen/supermario64.html');
}

function loadFireboyWatergirl() {
  window.location.replace('g4mescreen/fbwg.html');
}
function myFunction() {
  event.preventDefault();
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function showTime() {
  event.preventDefault();
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);

}
function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  console.log(profile.getId()); //user ID
  console.log(profile.getName()); // name of user
  console.log(profile.getImageUrl()); //url of pfp
  console.log(profile.getEmail()); //email (if you asked for permission)
}

showTime();












