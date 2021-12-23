//constructor for person object

function Person(fname, lname, age, occu, city){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.occu = occu;
    this.city = city;
}

const myfather = new Person('Ram', 'Singh', 45, 'Teacher', 'Varanasi');
console.log(myfather);
const yourfather = new Person('Heera', 'Yadav', 43, 'BDC', 'Ghazipur');
console.log(yourfather);