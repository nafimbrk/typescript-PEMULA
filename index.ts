// type annotation & union
let nama: string = "eko"
let usia = 27
let isComplete = true
let image: string | null = "image.png"

// image = 47 // error

console.log(nama);


// array
let daftarNilai: number[] = [100, 98, 99]

// daftarNilai.push("eko") // bakal error

let biodata: (number | string)[] = [100, 98, 99, "anjay"]
let biodata2 = [100, 98, 99, "anjay"]

let empty: [] = []

// object

let students: {name:string, age:number, address:string, isComplete?: boolean} = {
    name: "budi",
    age:78,
    // error
}

students.isComplete = true

// array of object
let book = {id: 1, item: "book", price: 10000, stock:20}
let pen = {id: 2, item: "pen", price: 10000, stock:20}
let pencil = {id: 3, item: "pencil", price: 10000}

let items: {readonly id: number, item: string, price: number, stock?: number}[] = [
    book,
    pen,
    pencil
]

// items[0].id = 100 // error



// function
function Hello(): string {
    return "hello world \n"
}

console.log(Hello())
console.log(Hello())
console.log(Hello())


// function with parameter
function pengenalan(name: string): string {
    return `hello ${name} \n`
}

console.log(pengenalan("eko"))
console.log(pengenalan("budi"))
console.log(pengenalan("herman"))

// function default parameter
function kelipatanNilai (num1: number, num2: number = 2): number {
    return num1 + num2
}

console.log(kelipatanNilai(2))
console.log(kelipatanNilai(2, 5))

// optional parameter
function discountItem (price: number, discount?: number): number {
    return price - (discount || 0)
}

console.log(discountItem(10000, 1000));
console.log(discountItem(20000));

// void function
function tampilkanPesan(message: string): void {
    console.log(message);
}

tampilkanPesan("ini pesan")



// type aliases
type User = { id: number, name: string, isActive: boolean }

const Adi: User = {
    id: 1,
    name: "adi",
    isActive: true
    // address: "makasar" // error
}

const Siti: User = {
    id: 2,
    name: "siti",
    isActive: false
}

type Theme = 'light' | 'dark'

let theme: Theme

theme = 'dark'
theme = 'light'

function setTheme(t:Theme) {
    theme = t
}

// setTheme('orange') // error
setTheme('dark')






// interface
// mirip type aliases
interface User {
    id: string,
    name: string,
    age: number
}

const userData: User = {
    id: "128686",
    name: "resky",
    age: 27 
}

// turunan
interface Bio {
    name: string,
    age: number
}

// interface FullBio extends Bio {
//     biodata: string,
//     address: string
// }

// const Resky: FullBio = {
//     name: "resky",
//     age: 78,
//     biodata: "hello world",
//     address: "makasar"
// }





// deklarasi ulang
interface Bio {
    address: string
}

// interface gk bisa union dan function type aliases




// enum
enum Role {
    Admin,
    User,
    Guest
}

let userRole: Role = Role.Admin
console.log(userRole); // 0

enum Status {
    Success = 200,
    NotFound = 404,
    Error = 500
}

let statusResponse: Status = Status.Success
console.log(statusResponse);

// tuple
let Person: [string, number, ...string[]] = ["resky", 28, "lamongan", "surabaya", "bojonegoro"] // boolean? // juga bisa

console.log(Person[0]);
console.log(Person[1]);
console.log(Person);







// import dan export
import Add from "./utils/MathUtils";
console.log(Add(2, 2)) 
console.log(Add(5, 5)) 




// generic
// function getData<T>(value: T): T {
//     return value
// }

// console.log(getData<number>(252));
// console.log(getData<string>("eko"));


// function getData<T, U>(obj: T, obj2: U): T & U {
//     return { ...obj, ...obj2}
// }

// const result = getData({name: "eko", address: "sudian"}, {age: 25})
// console.log(result);


function getLength<T extends {length: number}>(value: T): number {
    return value.length
}

console.log(getLength("eko khanedy"));
console.log(getLength([1, 2, 3]));
// console.log(getLength(25))


// oop
class Biodata {
    protected name: string
    protected age: string

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

   protected Pengenalan() : string {
        return `hello nama saya ${this.name} dan saya berumur ${this.age} tahun`
    }
}

class FullBiodata extends Biodata {
    constructor(name: string, age: number) {
        super(name, age)
    }

    public fullBiodataPengenalan(): string {
        return `hello ini fungsi full biodata name: ${this.name} umur: ${this.age}`
    } 
}

const resky = new FullBiodata("resky", 27)
console.log(resky.fullBiodataPengenalan());



