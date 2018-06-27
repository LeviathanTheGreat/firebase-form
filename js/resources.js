const resources = {
  elemsToSubmit : document.getElementsByClassName(".toSubmit"),
  sendableNode: function(node){
    switch(node.tagName){
      case "INPUT":
          if(node.value.length > 0){
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
