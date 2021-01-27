class myPlugin {
    constructor({ name, age }) {
        console.log(name, age)
    }
    apply(complier) {
       console.log('complier')
       console.log(complier)
       console.log('complier')
    }
}
module.exports = myPlugin