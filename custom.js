// Create a "Close" button and append it to each list item
const myNodeList = document.getElementsByTagName("li");
var i;
for (i = 1; i < myNodeList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt); // appendChild means Insert into the list
  myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var closey = this.parentElement;
    closey.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
// ev.target.tagName === "LI" <-- Elements must be CAPITALIZE
/*child.addEventListener("click", second);
parent.addEventListener("click", first, true);
when clicking child element, first method will be called before second.
By default, the useCapture flag is set to false which means you handler will only be called during event bubbling phase.*/

// Create a new list item when clicking on the "Add" button

function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t); // appendChild means Insert into the list
  if (inputValue === "") {
    alert("you must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const closey = this.parentElement;
      closey.style.display = "none";
    };
  }
}
