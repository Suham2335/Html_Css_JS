
let students = ["Ram", "Hari", "Sita", "Gita", "John", "Asha", "Sam", "Mina"];
let searchName = prompt("Enter a student name:");

if (students.includes(searchName)) {
    console.log("Student Found");
} else {
    console.log("Student Not Found");
}
