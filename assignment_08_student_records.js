// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require("readline-sync");

// Store student records
let students = [];

// Function to add a student
function addStudent() {
    const id = readlineSync.questionInt("Enter student ID: ");
    const name = readlineSync.question("Enter student name: ");
    const age = readlineSync.questionInt("Enter student age: ");
    const grade = readlineSync.questionFloat("Enter student grade: ");

    const student = {
        id: id,
        name: name,
        age: age,
        grade: grade
    };

    students.push(student);

    console.log("Student added successfully.");
}

// Function to display all students
function viewStudents() {
    if (students.length === 0) {
        console.log("No student records found.");
        return;
    }

    console.log("\n===== STUDENT RECORDS =====");

    for (let student of students) {
        console.log(`ID: ${student.id}`);
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);
        console.log("--------------------------");
    }
}

// Function to search for a student
function searchStudent() {
    const id = readlineSync.questionInt("Enter student ID to search: ");

    const student = students.find(function (student) {
        return student.id === id;
    });

    if (student) {
        console.log("\nStudent Found:");
        console.log(`ID: ${student.id}`);
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);
    } else {
        console.log("Student not found.");
    }
}

// Function to delete a student
function deleteStudent() {
    const id = readlineSync.questionInt("Enter student ID to delete: ");

    const index = students.findIndex(function (student) {
        return student.id === id;
    });

    if (index !== -1) {
        students.splice(index, 1);
        console.log("Student deleted successfully.");
    } else {
        console.log("Student not found.");
    }
}

// Main function
function main() {
    let running = true;

    while (running) {
        console.log("\n===== STUDENT RECORD MANAGEMENT =====");
        console.log("1. Add Student");
        console.log("2. View All Students");
        console.log("3. Search Student");
        console.log("4. Delete Student");
        console.log("5. Exit");

        const choice = readlineSync.questionInt("Choose an option: ");

        switch (choice) {
            case 1:
                addStudent();
                break;

            case 2:
                viewStudents();
                break;

            case 3:
                searchStudent();
                break;

            case 4:
                deleteStudent();
                break;

            case 5:
                console.log("Goodbye!");
                running = false;
                break;

            default:
                console.log("Invalid option. Please try again.");
        }
    }
}

// Start the program
main();