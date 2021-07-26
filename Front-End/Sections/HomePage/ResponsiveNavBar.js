function navBarToggle() {
    var x = document.getElementById("dropDownMenu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
