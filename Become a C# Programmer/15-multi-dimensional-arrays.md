# Multi-dimensional Arrays
Learn to use multi-dimensional arrays in C#.
What is a multi-dimensional array?

## What is a multi-dimensional array?
In C#, a **multi-dimensional array** is an array that contains other arrays as its values or members. The container array is termed an **outer array**, and the member array is termed an **inner array**. An array is said to be a multi-dimensional array if it has another array as its members.

Can you think of some instances where we might have been using a structure that is the same as a multi-dimensional array? One such example is a crossword puzzle!

## Individual values in multi-dimensional arrays
The individual values in a multi-dimensional array are accessed through multiple index numbers. The following is an example of a two-dimensional array in the following format:

array1\[row number, column number\];

Let’s take the example of the following array:

int\[ , \] array1 \= {{10, 20, 30},

       {16, 18, 20}};

*   `array1` is a two-dimensional array.
*   The value, `20`, can be accessed as `array1 [1, 2]`.
*   The number of indexes depends on the level of dimensions.

The general concepts of two-dimensional arrays, or n-dimensional arrays are implemented in C# as follows. The following program illustrates the structure of a two-dimensional array:

main.cs

C#

```
class Test
{
    static void Main()
    {
        int[ , ] array = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}; //declaring a 2-dimensional array
        for (int i = 0; i < 3; i++) // printing a 2-dimensional array
        {
            for (int j = 0; j < 3; j++)
            {
                System.Console.Write(array[i, j] + " ");
            }
            System.Console.WriteLine(" ");
        }
```

Mentor

A two-dimensional array of three rows and three columns

The following illustration shows the structure of the array above:

The structure of a two-dimensional array of three rows and three columns

Here’s another example of the structure of a two-dimensional array:

main.cs

C#

```
class Test
{
    static void Main()
    {
        int[ , ] array = {{1, 2}, {4, 5}, {7, 8}}; //declaring a 2-dimensional array
        for (int i = 0; i < 3; i++) // printing a 2-dimensional array
        {
            for (int j = 0; j < 2; j++)
            {
                System.Console.Write(array[i, j] + " ");
            }
            System.Console.WriteLine(" ");
        }
```

Mentor

A two-dimensional array of three rows and two columns

The following illustration shows the structure of the array above:

The structure of a two-dimensional array of three rows and two columns

Here’s another example of a multi-dimensional array:

main.cs

C#

```
class Test
{
    static void Main()
    {
        char[ , ] array = {{'A','B'}, {'C','D'}, {'E','F'}};
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 2; j++)
            {
                System.Console.Write(array[i, j] + " ");
            }
            System.Console.WriteLine(" ");
        }
```

Mentor

A two-dimensional array of character values

The following illustration shows the structure of the above array.

The structure of a two-dimensional array of character values

A mathematical matrix is implemented as a multi-dimensional array in C#, as shown in the following example:

matrix A\=\[123456789101112\]\\text{matrix} \\ A= \\begin{bmatrix} 1 & 2 & 3 & 4 \\\\ 5 & 6 & 7 & 8 \\\\ 9 & 10 & 11 & 12 \\\\ \\end{bmatrix} matrix A\=⎣⎡​159​2610​3711​4812​⎦⎤​

main.cs

C#

```
class Test
{
    static void Main()
    {
        int[ , ] matrixA = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
        System.Console.WriteLine("Matrix A");
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 4; j++)
            {
                System.Console.Write(matrixA[i, j] + "\t");
            }
            System.Console.WriteLine(" ");
```

Mentor

A matrix

The variable, `matrixA`, is an array of three elements, and each element is itself an array of four elements.

The following code demonstrates a way to write values in the form of rows and columns:

main.cs

C#

```
class Test
{
    static void Main()
    {
        int[ , ] matrixB = {{10, 12, 13, 14},
                            {15, 16, 17, 18},
                            {19, 20, 21, 22}};
        System.Console.WriteLine("Matrix B");
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 4; j++)
            {
                System.Console.Write(matrixB[i, j] + "\t");
```

Mentor

B matrix

The result of the second program is exactly the same as that of the first program. Inside the computer’s memory, both variables (`matrixA` and `matrixB`) are stored in the same way—as linear sequences. Now, let’s say we want to add these two matrixes and store them into another matrix (`matrixC`).

main.cs

C#

```
class Test
{
    static void Main()
    {
        int[ , ] matrixA = {{1, 2, 3, 4}, 
                            {5, 6, 7, 8}, 
                            {9, 10, 11, 12}}; //declaring a matrixA
        int[ , ] matrixB = {{10, 12, 13, 14},
                            {15, 16, 17, 18},
                            {19, 20, 21, 22}}; //declaring a matrixB
        int[ , ] matrixC = {{0, 0, 0, 0},
                            {0, 0, 0, 0},
                            {0, 0, 0, 0}}; //declaring an empty matrixC
```

Mentor

Summation of two matrixes

The resulting matrix isn’t a sum of values of operands. Rather, it’s a matrix that has six members (three from `matrixA` and three from `matrixB`). We need to access the individual integer values in each matrix to produce their sum.

## Practice multi-dimensional arrays
Here are a few example programs to practice using two-dimensional arrays in C#. By clicking the “Show Solution” button, you can find a program that solves the respective problem. You can copy and paste the given solution into the code widget to make sure the output of your solution matches the given solution. There can be several ways of writing correct solutions in programming.

### Calculate the sum of each row in a matrix
Write a program to show the sum of each row of the matrix. The matrix must have two rows and three columns.

**Sample input 1**

{{10, 20, 30},

 {40, 50, 60}}

**Sample output 1**

Matrix: 

10   20   30

40   50   60

Sum of Row1: 60

Sum of Row2: 150

**Sample input 2**

{{1, 2, 3},

 {4, 5, 6}

**Sample output 2**

Matrix: 

1   2   3

4   5   6

Sum of Row1: 6

Sum of Row2: 15

main.cs

C#

```
class Test
{
    static void Main()
    {
        // Write your code here
    }
}
```

Mentor

Calculate the sum of each row of a matrix

Show Solution

### Calculate the sum of each column in a matrix
Write a program to show a matrix in the form of rows and columns, then show the sum of each column. The matrix must have five rows and ten columns.

**Sample input**

{{0, 1, 2, 3, 4, 5, 6, 7, 8, 9},

 {10, 11, 12, 13, 14, 15, 16, 17, 18, 19},

 {20, 21, 22, 23, 24, 25, 26, 27, 28, 29},

 {30, 31, 32, 33, 34, 35, 36, 37, 38, 39},

 {40, 41, 42, 43, 44, 45, 46, 47, 48, 49}}

**Sample output**

Displaying in the matrix form:

0   1   2   3   4   5   6   7   8   9   

10  11  12  13  14  15  16  17  18  19  

20  21  22  23  24  25  26  27  28  29  

30  31  32  33  34  35  36  37  38  39  

40  41  42  43  44  45  46  47  48  49  

Column sums are: 100 105 110 115 120 125 130 135 140 145

main.cs

C#

```
class Test
{
    static void Main()
    {
        // Write your code here
    }
}
```

Mentor

Calculate the sum of each column in a matrix

Show Solution