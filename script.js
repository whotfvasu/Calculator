const input = document.getElementById("input-number");
const result = document.getElementById("result");

function handleClickButton(e) {
  const exp = `${input.value}${e.innerText}`;
  input.value = exp;
  if (["+", "-", "/", "*"].includes(e.innerText)) return;
  result.value = eval(exp);
}

function reset() {
  input.value = "";
  result.value = "";
}
