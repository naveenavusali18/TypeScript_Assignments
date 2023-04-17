const Animal1:{name:string, colour:string} = {
    name: "Tiger",
    colour: "Greeen"
}
const Animal2:{colour:string, fly: boolean} = {
    colour: "Orange",
    fly: true
}
const Animal3:{fly: boolean, eat:boolean} = {
    fly: false,
    eat: true
}
const ResultAnimal = function(...args: object[]){
    return {
        ...Animal1,
        ...Animal2,
        ...Animal3
    }
}
console.log(ResultAnimal(Animal1, Animal2, Animal3))