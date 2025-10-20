window.onload = function boxes() {
  
    const main = document.querySelectorAll("#board div")

    for (const x of main) {
        x.classList.add("square")
    };
};