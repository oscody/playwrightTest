# Challenge: Arithmetic Sequence
Find the index of an outlier in an arithmetic sequence.

## Task
This task requires you to find the index of the first outlier in a given array. All numbers in an array are in an arithmetic sequence, except one number.

Write a program that uses an array and finds the index of the first outlier and stores it to the variable `idx`. The array is guaranteed to have at least 555 elements and the first two elements will be in the required arithmetic sequence. The value of the `idx` should be −1−1−1 if the array has no outlier, and should be 000 if the array length is less than 555.

* * *

### Sample input 1
array1 \= {5,8,11,13,17}

### The resulting value 1
idx \= 3

### Expected output 1
The outlier value is at the index: 3

* * *

### Sample input 2
array1 \= {1,6,11,16,20}

### The resulting value 2
idx \= 4

### Expected output 2
The outlier value is at the index: 4

* * *

### Sample input 3
array1 \= {1,6,11}

### The resulting value 3
idx \= 0

### Expected output 3
The array contains less than 5 elements.

* * *

### Sample input 4
array1 \= {2,4,6,8,10}

### The resulting value 4
idx \= \-1

### Expected output 4
There is no outlier in the array.

* * *

### How to test your program
When you click the “Test” button of the code widget, you get two options, as explained below:

*   **Show Results:** It shows the sample inputs and their respective results in comparison with the expected output. The actual output is the outlier index calculated to display the results. The word “Succeeded” in the last column indicates that the calculated output matches the expected output. For example, if `array1` is `[5,8,11,13,17]` and the `index` is `3`, then the last column shows “Succeeded”. Similarly, if `array1` is `[2,4,6,8,10]` and the `index` is `-1`, then the last column shows “Succeeded”.
    
*   **Show Console:** It shows the output from the `print` statements used in your code. You may use this to verify your calculations on the basis of sample test inputs. For example, if `array1` is `[5,8,11,13,17]`, then the output on the console should be `The outlier value is at the index: 3.`. Similarly, if `array1` is `[2,4,6,8,10]`, then the output on the console should be `There is no outlier in the array.`.
    

> **Note:** You don’t have to worry about the `static` keyword. For testing purposes, we have removed the `static` word from the `public void Main()` statement. We have added the word `partial` in the starting line in the below code. You don’t have to declare the variables, `array1` and `idx`. We have already declared them for you.

main.cs

C#

partial class Solution

{

    public void Main()

    {

        // Assume that the following variable is already defined:

        // array1

        // You are required to use the above variables to find 

        // the index of the first outlier in the array and display it.

        // You may start your code from here to store the correct result in 

        // the variable index

        idx = 1;     

    }

}

Mentor

Input

Enter the input below

Test

Show Solution

Save

Reset

Find the index of the outlier in an arithmetic sequence