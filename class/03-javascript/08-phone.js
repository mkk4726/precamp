const changeFocus = {
  forP1 : () => {
    let p1 = document.getElementById("p1").value;
    if (p1.length === 3) {
      document.getElementById("p2").focus();
    }
  },
  forP2 : () => {
    let p1 = document.getElementById("p2").value;
    if (p1.length === 4) {
      document.getElementById("p3").focus();
    }
  },
};


