function showFullName(){
    return "Ryan Ray"
}

const user = {
    name: "ryan", //property
    lastname: "ray",
    age: 38,
    showFullName: showFullName,
    showAge(){
        return 38
    }
}

console.log(user.showFullName())
console.log(user.showAge())