let str = "";
let btns = document.querySelectorAll(".btn");
let input = document.querySelector(".input");
let pair = false;
btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "=") {
      if (str.search("[(]") > 0) {
        str = str.replace("(", "*");
        // add multiple if no operation afer )
        str = str.replace(")", "");
        console.log(str);
      }
      str = eval(str);
      input.value = str;
    } else if (e.target.innerHTML == "C") {
      str = "";
      input.value = "";
    } else if (e.target.innerHTML == "⌫") {
      str = str.slice(0, str.length - 1);
      input.value = str;
    } else if (e.target.innerHTML == "()") {
      let para = str.search("[(]");
      if (para > -1 && pair === false) {
        str = str + ")";
        pair = true;
      } else {
        str = str + "(";
        if (pair === true) {
          pair = false;
        }
      }
      input.value = str;
    } else {
      str = str + e.target.innerHTML;
      input.value = str;
    }
  })
);
