// Q11. Student Management System Using Objects
let student = {
    name: "Ram",
    rollNumber: 101,
    section: "A",
    age: 20,
    marks: 75,
    address: "Kathmandu"
};

// 1. Display all student details
console.log("Student Details:", student);

// 2. Add phone number
student.phoneNumber = prompt("Enter phone number:");

// 3. Update address
student.address = prompt("Enter new address:");

// 4. Update marks
let newMarks = Number(prompt("Enter updated marks:"));
if (newMarks >= 0 && newMarks <= 100) {
    student.marks = newMarks;
} else {
    console.log("Invalid marks. Previous marks kept.");
}

// 5. Check pass or fail
if (student.marks >= 40) {
    console.log("Student Passed");
} else {
    console.log("Student Failed");
}

// 6. Add college
student.college = "ABC College";

// 7. Delete age
delete student.age;

// 8. Check rollNumber
if ("rollNumber" in student) {
    console.log("Roll number property exists");
} else {
    console.log("Roll number property does not exist");
}

// 9. Display all properties
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// 10. Display final object
console.log("Final Student Object:", student);
