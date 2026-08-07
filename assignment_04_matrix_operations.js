// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");

// Function to add two matrices
function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

// Function to subtract two matrices
function subtractMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            result[i][j] = matrixA[i][j] - matrixB[i][j];
        }
    }

    return result;
}

// Function to multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixB[0].length; j++) {
            result[i][j] = 0;

            for (let k = 0; k < matrixB.length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

// Function to read a matrix from the user
function readMatrix(rows, columns, name) {
    let matrix = [];

    console.log(`\nEnter values for Matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];

        for (let j = 0; j < columns; j++) {
            matrix[i][j] = readlineSync.questionFloat(
                `Enter ${name}[${i}][${j}]: `
            );
        }
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let row of matrix) {
        console.log(row.join(" "));
    }
}

// Main function
function main() {
    const rows = readlineSync.questionInt("Enter number of rows: ");
    const columns = readlineSync.questionInt("Enter number of columns: ");

    const matrixA = readMatrix(rows, columns, "A");
    const matrixB = readMatrix(rows, columns, "B");

    console.log("\nMatrix A + Matrix B:");
    displayMatrix(addMatrices(matrixA, matrixB));

    console.log("\nMatrix A - Matrix B:");
    displayMatrix(subtractMatrices(matrixA, matrixB));

    // Matrix multiplication requires compatible dimensions.
    // For simplicity, this program uses square matrices.
    if (rows === columns) {
        console.log("\nMatrix A × Matrix B:");
        displayMatrix(multiplyMatrices(matrixA, matrixB));
    } else {
        console.log("\nMatrix multiplication requires square matrices in this program.");
    }
}

main();

