let Employee= [
    {id:1, name:"Naveen"},
    {id:2, name:"Panchal"},
    {id:3, name:"Naveen"},
    {id:4, name:"srikanth"},
    {id:4, name:"ajay"},
    {id:5, name:"haffeez"},
    {id:7, name:"haffeez"},
]
let UnqSet = new Set();
function UnqItms(Employee:object[], name: string){
    const Unq = Employee.filter(detail => {
        if(UnqSet.has(detail[name])){
            return false
        }
        else{
            UnqSet.add(detail[name])
            return true
        }
    })
    console.log(Unq)
}
UnqItms(Employee, 'name');