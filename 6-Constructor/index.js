const user = {
    name: "Juan", //property
    lastname: "Perez",
    age: 38,
    showFullName(){
        return (this.name + " " + this.lastname).trim()
    },
}

// Constructor
function Person() {
    this.name =""
    this.lastname=""
    this.age=""
    this.showFullName = function(){
        return `${this.name} ${this.lastname}`
    }
}

const user2 = new Person()
user2.name = "Carl"
user2.lastname = "Sagan"
user2.age = 59 
console.log(user2)