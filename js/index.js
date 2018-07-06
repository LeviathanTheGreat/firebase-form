//test all of this


const resources = {
  elemsToSubmit: document.getElementsByClassName(".toSubmit"),
  sendable: function(node) {
    switch (node.tagName) {
      case "INPUT":
        if (!node.value.length < 0) {
          return false;
        }
        return true;
      case "TEXTAREA":
        return true;
      case "FORM":
        return true;
      default:
        return false;
    }
  }
};




//need to make a way to conditioanlly send just on textbox or all

function setDefKeyCommands(e) {
  //need alternative to forEach funtion as it is not available on html collections
  resources.elemsToSubmit.forEach(inputElement => {
    inputElement.removeEventListener("");
  });
}

function setTextboxShortcuts(e) {
  //command one

  if (e.keyCode.ctrlKey === 13 && e.ctrlKey && sendable(e.target)) {
    console.log("ctrl and enter pressed");
    submitText(e);
  }
  //command two - help dialogue for the element currently selected
}

function submitText(e) {
  //this sets the conditions that need to be met in order to send
  console.log("submitText function fired");
  //if it should be allowed to bubble, use the form element onSubmit function
  if (!e.bubbles) {
  } else if (event.target.tagName === "form") {
    let form = event.target;
    form.onSubmit();
    e.stopPropagation();
  }
}

$(".text_input").on("focus", function(e) {
  //check to see how event object is passed if there is more than one function parameters
  e.target.addEventListener("keydown", setTextboxShortcuts);
});

$(".text_input").on("focusout", function(e) {
  let target = e.target;
  console.log("focus out on:" + target);
  setDefKeyCommands();
});

//add in simple scroll plugin