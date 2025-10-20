let state = [["", "", ""], ["", "", ""], ["", "", ""]];
let current = "X";



window.onload = function () {
    const main = document.querySelectorAll("#board div");

    for (let i = 0; i < main.length; i++) {
        main[i].classList.add("square");
        main[i].id = `box-${i}`;

        main[i].addEventListener("mouseover", function () { hoverOver(main, i); });
        main[i].addEventListener("mouseout", function () { hoverOff(main, i); });
        main[i].addEventListener("click", function () { choice(main, i); });
        document.getElementsByTagName("button")[0].addEventListener("click", function () {clicked(main); });

    }
};

let choice = function (main, i) {
    const row = Math.floor(i / 3);
    const col = i % 3;

    if (state[row][col] === "") {
        state[row][col] = current;
        main[i].textContent = current;
        main[i].classList.add(current);
        check = checkWin();

        if (check !== null) {
            stats = document.getElementById("status");
            stats.classList.add("you-won");
            stats.innerHTML = `Congratulations! ${current} is the Winner!`
        };

        current = current === "X" ? "O" : "X";
    };
};

let hoverOver = function (main, i) {
    main[i].classList.add("hover");
}

let hoverOff = function (main, i) {
    main[i].classList.remove("hover");
}

let checkWin = function () {
    for (let i = 0; i < 3; i++) {
        if (state[i][0] !== "" &&
            state[i][0] === state[i][1] &&
            state[i][1] === state[i][2]) {
            return state[i][0];
        }
    }

    for (let j = 0; j < 3; j++) {
        if (state[0][j] !== "" &&
            state[0][j] === state[1][j] &&
            state[1][j] === state[2][j]) {
            return state[0][j];
        }
    }

    if (state[0][0] !== "" &&
        state[0][0] === state[1][1] &&
        state[1][1] === state[2][2]) {
        return state[0][0];
    }

    if (state[0][2] !== "" &&
        state[0][2] === state[1][1] &&
        state[1][1] === state[2][0]) {
        return state[0][2];
    }

    return null;
}

let clicked = function(main) {
    state = [["", "", ""], ["", "", ""], ["", "", ""]];
    current = "X";

    for (let i = 0; i < main.length; i++) {
        main[i].textContent = "";
        main[i].classList.remove("X","O");
    };

    stats = document.getElementById("status");
    stats.classList.remove("you-won");
    stats.innerHTML = "Move your mouse over a square and click to play an X or an O.";
};

