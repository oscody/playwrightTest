# Challenge: The Nearest Power of 2
Find the nearest power of 2 for a number that has been input.

## Task
Write a program that takes a positive number (`num`) and finds the power of 222 nearest to that number. The program stores the resulting value to `pwr`.

If there are two candidate values, display the smaller one. For example, 222 and 444 are both the powers of 222 nearest to 333. The function should display 222 because it’s smaller than 4.

* * *

### Sample input 1
num \= 40

### The resulting value 1
pwr \= 32

### Expected output 1
The 32 is the power of 2 nearest to 40.

* * *

### Sample input 2
num \= 50

### The resulting value 2
pwr \= 64

### Expected output 2
The 64 is the power of 2 nearest to 50.

* * *

### How to test your program
When you click the “Test” button under the code widget, you’ll get the two options explained below:

*   **Show Results:** It shows the sample inputs and their respective results in comparison with the expected output. The actual output is the power calculated to display the results. The word “Succeeded” in the last column indicates that the calculated output matches the expected output. For example, if `num` is `50` and the `pwr` is `64`, then the last column shows “Succeeded”.
    
*   **Show Console:** It shows the output from the `print` statements used in your code. You can use this to verify your calculations on the basis of sample test inputs. For example, if `num` is `50`, then the output on the console should be `The 64 is the power of 2 nearest to 50.`. You don’t have to declare the variables `num` and `pwr`. We have already declared them for you.
    

> **Note:** You don’t have to worry about the `static` keyword for testing purposes. We have removed `static` from the `public void Main()` statement. We have added the word `partial` in the starting line in the below code.

main.cs

C#

partial class Solution

{

    public void Main()

    {

        // Assume that the variable number is already defined.

        // The variable num contains the value to be tested.

        pwr = 0; // The variable to store the result calculated with the help of number.

        // You are required to calculate the value of power as

        // The power of 2 nearest to the number.

        // You may start your code from here onwards.

    }

}

Mentor

Input

Enter the input below

Test

Need Hint?

Show Solution

Save

Reset

Find the nearest power of 2 of a given number