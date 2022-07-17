function showFullName(){
    return "Ryan Ray"
}

const user = {
    name: "Juan", //property
    lastname: "Perez",
    age: 38,
    showFullName(){
        return (this.name + " " + this.lastname).trim()
    },
    account: {
        number: "",
        amount: 100,
        deposit(quantity){
            this.amount = this.amount + quantity
        },
        withdrawl(quantity){
            this.amount = this.amount - quantity
        }
    }
}

console.log(user.account.amount)
user.account.deposit(100)

console.log(user.account)
user.account.withdrawl(50)

console.log(user.account)
