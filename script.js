document.addEventListener("DOMContentLoaded", () => {       
  const allElement = document.querySelectorAll("*");

  allElement.forEach((element) => {
    element.classList.forEach((clas) => {
      if (clas.startsWith("chai-")) {
        chaiClass(element, clas);
      }
    });
  });
});

function chaiClass(element, clas) {
  const parts = clas.split("-");
  const custom = parts[1];
  const value = parts.slice(2).join("-");
  const addPx = (val) => (isNaN(val) ? val : val + "px");

  if (custom === "text") {
    element.style.color = value;
  }

  if (custom === "wd") {
    element.style.width = addPx(value);
  }

  if (custom === "ht") {
    element.style.height = addPx(value);
  }

  if (custom === "p") {
    element.style.padding = addPx(value);
  }

  if (custom === "pl") {
    element.style.paddingLeft = addPx(value);
  }

  if (custom === "pr") {
    element.style.paddingRight = addPx(value);
  }

  if (custom === "pt") {
    element.style.paddingTop =addPx(value);
  }

  if (custom === "pb") {
    element.style.paddingBottom = addPx(value);
  }

  if (custom === "m") {
    element.style.margin = addPx(value);
  }

  if (custom === "ml") {
    element.style.marginLeft =addPx(value);
  }

  if (custom === "mr") {
    element.style.marginRight = addPx(value);
  }

  if (custom === "mt") {
    element.style.marginTop = addPx(value);
  }

  if (custom === "mb") {
    element.style.marginBottom =addPx(value);
  }

  if (custom === "shadow") {
    element.style.boxShadow = value;
  }

  if (custom === "d") {
    element.style.display = value;
  }

  if (custom === "ai") {
    element.style.alignItems = value;
  }

  if (custom === "jc") {
    element.style.justifyContent = value;
  }

  if (custom === "bg") {
    element.style.backgroundColor = value;
  }

  if (custom === "fs") {
    element.style.fontSize = addPx(value);
  }

  if (custom === "br") {
    element.style.borderRadius = addPx(value);
  }

  if (custom === "b") {
    const borderVal=parts.slice(2).join(" ")
    element.style.border = borderVal
  }

  if (custom === "ta") {
    element.style.textAlign = value;
  }

  if (custom === "fd") {
    element.style.flexDirection = value;
  }

  if (custom === "cr") {
    element.style.cursor = value;
  }

  if (custom === "pos") {
    element.style.position = value;
  }

  if (custom === "top") {
    element.style.top = addPx(value);
  }

  if (custom === "bottom") {
    element.style.bottom = addPx(value);
  }

  if (custom === "left") {
    element.style.left = addPx(value);
  }

  if (custom === "right") {
    element.style.right = addPx(value);
  }

  if (custom === "gap") {
    element.style.gap = addPx(value);
  }

  if(parts[1]==='gd' && parts[2]==="cols"){
    element.style.gridTemplateColumns=`repeat(${parts[3]},1fr)`
  }

 
  if (custom === "hoverbg") {
    const original = element.style.backgroundColor;
    element.addEventListener("mouseenter", () => {
      element.style.backgroundColor = value;
    });

    element.addEventListener("mouseleave", () => {
      element.style.backgroundColor = original;
    });
  }

  if (custom === "hoverText") {
    const original = element.style.color;
    element.addEventListener("mouseenter", () => {
      element.style.color = value;
    });

    element.addEventListener("mouseleave", () => {
      element.style.color = original;
    });
  }

  if (custom === "dk") {
    element.style.color = "white";
    element.style.backgroundColor = "black";
  }

  if (custom === "lt") {
    element.style.color = "black";
    element.style.backgroundColor = "white";
  }
}
