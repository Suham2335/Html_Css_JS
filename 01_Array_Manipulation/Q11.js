// Q11. Student Marks Management System
let marks = [75, 45, 90, 32, 60];

// 1. Display all marks
for (let i = 0; i < marks.length; i++) {
    console.log("Student mark:", marks[i]);
}

// 2. Add a new mark
let newMark = Number(prompt("Enter the new student's mark:"));
if (newMark >= 0 && newMark <= 100) {
    marks.push(newMark);
} else {
    console.log("Invalid mark. No mark was added.");
}

// 3. Remove the last mark
marks.pop();

// 4. Calculate total
let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
console.log("Total Marks:", total);

// 5. Calculate average
console.log("Average Marks:", total / marks.length);

// 6 and 7. Find highest and lowest
let highest = marks[0];
let lowest = marks[0];
for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) highest = marks[i];
    if (marks[i] < lowest) lowest = marks[i];
}
console.log("Highest Mark:", highest);
console.log("Lowest Mark:", lowest);

// 8 and 9. Count and display passed students
let passed = 0;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
        passed++;
        console.log("Passed mark:", marks[i]);
    }
}
console.log("Number of students passed:", passed);

// 10. Display updated array
console.log("Updated Marks:", marks);
