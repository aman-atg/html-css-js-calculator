window.addEventListener("load", function() {
  var textView = this.document.getElementById("textview");
  // iterate over all the inputs and add addEventListener to it
  var inputs = this.document.getElementsByTagName("input");
  //   console.log(inputs);
  Array.prototype.map.call(inputs, input => {
    input.addEventListener("click", () => insert(input.value));
  });
  inputs[0].removeEventListener("click", () => insert(inputs[0].value));

  function insert(num) {
    if (num === "=") equal();
    else if (num === "C") clear();
    else if (num === "<") back();
    else textView.value = textView.value + num;
  }

  // ============================================
  function equal() {
    var exp = textView.value;
    if (exp) textView.value = eval(exp);
  }
  function clear() {
    textView.value = "";
  }
  function back() {
    textView.value = textView.value.slice(0, textView.value.length - 1);
  }
});
