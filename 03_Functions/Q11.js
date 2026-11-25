function getStudentName() {
    return prompt("Enter student name:");
}

function getMarks() {
    let marks = [];
    for (let i = 1; i <= 3; i++) {
        let mark = Number(prompt("Enter marks for subject " + i + ":"));
        marks.push(mark);
    }
    return marks;
}

function calculateTotal(mark1, mark2, mark3) {
    return mark1 + mark2 + mark3;
}

function calculatePercentage(total) {
    return (total / 300) * 100;
}

function calculateGrade(percentage) {
    if (percentage < 0 || percentage > 100) return "Invalid";
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    else if (percentage >= 60) return "C";
    else if (percentage >= 50) return "D";
    else return "F";
}

function checkResult(marks) {
    if (marks[0] >= 40 && marks[1] >= 40 && marks[2] >= 40) {
        return "PASS";
    } else {
        return "FAIL";
    }
}

function displayResult(name, marks, total, percentage, grade, result) {
    console.log("Student Name:", name);
    console.log("Subject 1:", marks[0]);
    console.log("Subject 2:", marks[1]);
    console.log("Subject 3:", marks[2]);
    console.log("Total Marks:", total);
    console.log("Percentage:", percentage.toFixed(2) + "%");
    console.log("Grade:", grade);
    console.log("Result:", result);
}

let name = getStudentName();
let marks = getMarks();
let total = calculateTotal(marks[0], marks[1], marks[2]);
let percentage = calculatePercentage(total);
let grade = calculateGrade(percentage);
let result = checkResult(marks);
displayResult(name, marks, total, percentage, grade, result);
