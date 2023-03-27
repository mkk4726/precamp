const menu = {
  Home: () => {
    document.getElementById("contentFrame").setAttribute("src", "home.html")
    document.getElementById("menuHome").style = "color: black; background-color:white";
    document.getElementById("menuJukebox").style = "color: white; background-color:#298eb5";
    document.getElementById("menuGame").style = "color: white; background-color:#298eb5";
  },
  Jukebox : () => {
    document.getElementById("contentFrame").setAttribute("src", "jukebox.html")
    document.getElementById("menuJukebox").style = "color: black; background-color:white";
    document.getElementById("menuHome").style = "color: white; background-color:#298eb5";
    document.getElementById("menuGame").style = "color: white; background-color:#298eb5";
  },
  Game : () => {
    document.getElementById("contentFrame").setAttribute("src", "game.html")
    document.getElementById("menuGame").style = "color: black; background-color:white";
    document.getElementById("menuJukebox").style = "color: white; background-color:#298eb5";
    document.getElementById("menuHome").style = "color: white; background-color:#298eb5";
  }
}