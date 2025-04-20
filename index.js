"use strict";
// type annotation & union
let nama = "eko";
let usia = 27;
let isComplete = true;
let image = "image.png";
// image = 47 // error
console.log(nama);
// array
let daftarNilai = [100, 98, 99];
// daftarNilai.push("eko") // bakal error
let biodata = [100, 98, 99, "anjay"];
let biodata2 = [100, 98, 99, "anjay"];
let empty = [];
// object
let students = {
    name: "budi",
    age: 78,
    // error
};
students.isComplete = true;
// array of object
let book = { id: 1, item: "book", price: 10000, stock: 20 };
let pen = { id: 2, item: "pen", price: 10000, stock: 20 };
let pencil = { id: 3, item: "pencil", price: 10000 };
let items = [
    book,
    pen,
    pencil
];
// items[0].id = 100 // error
// function
function hello() {
    return "hello world \n";
}
