// Buffer => Representação de um espaço na memoria do computador, usado para transitar dados de uma manneira muito rápida, salvar e ler de maneira performatica

const buf = Buffer.from("hello");

console.log(buf); // Hexa

console.log(buf.toJSON()); //Decimal
