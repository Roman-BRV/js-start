
let input1 =  document.querySelector('#input1');
let button1 = document.querySelector('#b1');
let range1 = document.querySelector('#range1');
let textarea1 = document.querySelector('#textarea1');
let check1 = document.querySelector('#check1');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');

console.log(input1);
console.log(button1);
console.log(output1);

function f1(event){
  event.preventDefault();
  output1.innerText = input1.value;
  console.log(input1.value);

  let out2tex = textarea1.value;
  console.log(out2tex);
  let out2size = range1.value;
  console.log(range1);
  console.log(out2size);
  let out2bold = check1.checked;
  console.log(check1);
  console.log(out2bold);
  output2.style.fontSize = out2size + 'ex';
  output2.innerHTML = `${(out2bold ? "<b>" : "")} ${out2tex} +++`;
}

button1.onclick = f1;

document.querySelector('#range1').oninput = () => {
console.log(range1.value);
}

