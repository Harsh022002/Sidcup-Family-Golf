let crsr = document.getElementById("cursor");
let blr = document.getElementById("cursor-blur");
document.addEventListener("mousemove", function (num) {
    crsr.style.left = num.x + "px";
    crsr.style.top = num.y + "px";
    blr.style.left = num.x - 125 + "px";
    blr.style.top = num.y - 125 + "px";
});

gsap.to("#navbar", {
  backgroundColor: "#000",
  duration: 1,
  height: "90px",
  scrollTrigger: {
    trigger: "#navbar",
    scroller: "body",
    start: "top -20%",
    end: "top -12%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -90%",
    scrub: 2,
  },
});
