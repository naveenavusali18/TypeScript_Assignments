var Employee = [
    { id: 1, name: "Naveen" },
    { id: 2, name: "Panchal" },
    { id: 3, name: "Naveen" },
    { id: 4, name: "srikanth" },
    { id: 4, name: "ajay" },
    { id: 5, name: "haffeez" },
    { id: 7, name: "haffeez" },
];
console.log(typeof (Employee[1].id));
console.log(Employee[1]["name"]);
var UnqSet = new Set();
function UnqItms(Employee, name) {
    var Unq = Employee.filter(function (detail) {
        if (UnqSet.has(detail[name])) {
            return false;
        }
        else {
            UnqSet.add(detail[name]);
            return true;
        }
    });
    console.log(Unq);
}
UnqItms(Employee, 'name');
