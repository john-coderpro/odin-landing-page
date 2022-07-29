// Nothing here for now but maybe there'll be something soon
function pascalTriangle(row, col) {
    if (col == 0) {
        return 0;
    } else if (row == 0) {
        return 1;
    } else {
        return pascalTriangle(row - 1, col) + pascalTriangle(row - 1,
            col - 1);
    }
}