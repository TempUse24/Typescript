let firstName = "Madhu";
firstName = "Jayana";
console.log(firstName);
let language: any;

function greeting() {
  alert("Hello");
}

greeting();

let result = (a: number, b: number, c?: number) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(a + b);
};

const a = result;
a(10, 20, 30);
