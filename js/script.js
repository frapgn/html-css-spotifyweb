// NAVBAR NUTTONS active: Home - Cerca - La tua libreria
// Get the container element
var navBtnsContainer = document.getElementById("nav-btns-container");
// Get all buttons with class="nav-btn" inside the container
var navBtns = navBtnsContainer.getElementsByClassName("nav-btn");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// PLAYLIST active
var navPlaylistContainer = document.getElementById("playlist-items-container");
var navSongs = navPlaylistContainer.getElementsByClassName("playlist-item");
for (var i = 0; i < navSongs.length; i++) {
  navSongs[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("song-active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" song-active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " song-active";
  });
}

// ALBUM play rotation and green pulse
var mainContainer = document.getElementById("main-container");
var albums = mainContainer.getElementsByClassName("cover");
for (var i = 0; i < albums.length; i++) {
  albums[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("cover-active");
    current[0].className = current[0].className.replace(" cover-active", "");
    this.className += " cover-active";
  });
}
