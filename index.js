const body = document.querySelector("body");
body.style.background = "grey";
body.style.margin = "0px";
body.style.padding = "0px";
body.style.overflowX = "hidden";

const p = document.createElement("p");
p.textContent =
  "€ I Talk to people the way I want to be spoken to, respect people as I wish to be respected, My status, religion, race, political views, or culture don't matter – being a good person really is as simple as following the golden rule and treating others as I would like them to treat Me. €";
p.style.display = "flex";
p.style.justifyContent = "center";
p.style.paddingRight = "30px";
p.style.paddingTop = "25px";
p.style.paddingBottom = "30px";
p.style.fontSize = "30px";
p.style.width = "100vw";
p.style.height = "100vh";
p.style.textAlign = "center";
p.style.alignItems = "center";
document.querySelector("body").appendChild(p);
