let state = [["", "", ""], ["", "", ""], ["", "", ""]];
let current = "X";



window.onload = function() {
  const main = document.querySelectorAll("#board div");

  for (let i = 0; i < main.length; i++) {
    main[i].classList.add("square");
    main[i].id = `box-${i}`;

    main[i].addEventListener("click", function() { choice(main,i); });
  }
};

let choice = function(main,i) {
    const row = Math.floor(i / 3);
    const col = i % 3;

    if (state[row][col] === "") {
        state[row][col] = current;
        main[i].textContent = current;
        main[i].classList.add(current);

        current = current === "X" ? "O" : "X";
    };
};



