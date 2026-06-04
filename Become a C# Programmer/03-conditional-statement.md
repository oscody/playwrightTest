# Conditional Statement
Learn the conditional statement in C#.
The most commonly used conditional statement in C# is the `if` statement. It contains a conditional expression and a true branch, and it may contain a false branch. The true branch is executed when the conditional expression is true. The false branch, if present, is executed when the conditional expression is false. The following program demonstrates the use of the conditional statement.
> **Note:** The `true` branch of the `if` statement starts the execution after the starting brace `{` and executes all the statements until the ending brace `}`.

## Syntax
if (conditional statement) // no semicolon here

{

// execution starts from here if the conditional statement is true

//until here

}

else

{

//if the true branch is not executed then this part of the code is executed

//until here

}

We want to write a program that determines eligibility for a driver’s license based on the `age` input by the user. The eligible age should be 181818 or above.

Program.cs

```
class Test
{
    static void Main()
    {
        System.Console.WriteLine("Enter your age: ");
        int age = int.Parse(System.Console.ReadLine()); // Taking input
        if (age >= 18) // If age is greater than or equal to 18
        {
            System.Console.WriteLine("You are eligible for a driver's license.");
        }
        else
        {
            System.Console.WriteLine("You are not eligible for a driver's license.");
        }
    }
}
```

Mentor

Mentor

Example program for the if statement

The conditional statement used in the program above starts with `if` followed by a conditional expression.

> **Note:** There is no semicolon (`;`) at the end of **line 7**.

*   The true branch begins with the opening brace `{` in **line 8** and ends with `}` in **line 10**.
*   **Line 9** contains the code to be executed if the condition is true.
*   The word `else` in **line 11** is a separator between the true and the false branch.
*   The false branch begins with the opening brace `{` in **line 12** and ends with `}` in **line 14**.
*   **Line 13** is the code that will be executed if the condition is false.

## Example of various operators
The following example program demonstrates the use of various operators in a C# program.

### Sum of the digits
We want to write a program that takes an input number and displays the sum of its digits. We assume that the user will enter a positive number up to four digits.

Program.cs

```
class Test
{
    static void Main()
    {
        int sum = 0;
        int number = 0;
        System.Console.WriteLine("Enter a number with at most 4 digits: ");
        number = int.Parse(System.Console.ReadLine()); // Taking input in variable number
        if (number > 0 && number <= 9999) // Checking number range between 0 and 9999
        {
            sum +=  number % 10; // Adding remainder to variable sum
            number = number / 10; // Adding quotient to the number
            if (number > 0 )
            {
                sum +=  number % 10; // Adding remainder to variable sum
                number = number / 10; // Adding quotient to the number
            }
            if (number > 0 )
            {
                sum +=  number % 10; // Adding remainder to variable sum
                number = number / 10; // Adding quotient to the number
            }
            if (number > 0 )
            {
                sum +=  number % 10; // Adding remainder to variable sum
                number = number / 10; // Adding quotient to the number
            }
            System.Console.WriteLine ("Sum of digits is: " + sum);
```

Mentor

Mentor

Calculate the sum of digits

**Explanation**

*   **Line 5–6:** We declare two integer variables, `sum` and `number`.
*   **Line 7:** We request to input an integer value.
*   **Line 8:** We take an integer value in a variable, `number`, as input.
*   **Line 9:** We use comparison and logical operators in a conditional expression using an `if` statement. **Lines 10–29** are part of a true branch of this `if` statement. **Lines 13, 18,** and **23** are considered a nested `if`, since their respective true branches are in **curly braces**.
*   **Line 9:** We use comparison and logical operators in a conditional expression using an `if` statement. **Lines 10–29** are part of a true branch of this `if` statement. **Lines 13, 18,** and **23** are considered **nested if**.
*   **Line 11:** We use compound assignment, `+=`, and the arithmetic operator, `%`.
*   **Line 12:** We use assignment and integer division as indicated by `/`.
*   **Lines 13–27:** We perform the operations of **lines 11–12** repeatedly.
*   **Line 28:** We print the computed value of `sum`.
*   **Line 30:** We represent the false branch of the decision using `else`.
*   **Line 32:** We print an error message when the user inputs an invalid value.

## C# operators and data types practice
Here are a few examples that can be used to practice writing programs in C#. The “Show Solution” button will display a program that solves the respective problem. You may copy and paste this solution into the code widget to execute it. Use the “Show Solution” function to verify that your solution returns the same result as the given solution. If you get the right result but in a different way, your program is still good! There can be several ways to write correct solutions in programming.

### Two digits
Write a program that takes a number from the user as input. If it’s between 101010 and 999999, both inclusive, it will display `two digits`. Otherwise, it will display `not two digits`.

**Sample input 1**

**Sample output 1**

two digits

**Sample input 2**

**Sample output 2**

not two digits

Program.cs

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

Mentor

Check the input between a specific range

Show Solution

### Pay calculator
This program should calculate the pay of an employee based on hours worked. The input includes the employee’s total hours worked per week and their hourly pay rate. The employee will be paid a base wage for the first 40 hours worked and time-and-a-half (150% of base pay) for any hours past 40 as overtime pay. Output the regular pay, overtime pay, and total pay for the week on the screen.

If the employee worked 40 hours or less, don’t show any output regarding overtime pay.

**Sample input 1**

**Sample output 1**

Regular pay: 300

**Sample input 2**

**Sample output 2**

Regular pay: 400

Overtime pay: 150

Total pay: 550

Program.cs

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

Mentor

Calculate the regular and overtime pay of an employee

Show Solution

### Find the quadrant
Write a program that takes a point (x,y)(x, y)(x,y) from the user and finds the quadrant where the point lies on a Cartesian plane.

The following illustration will help us understand where each point lies in the Cartesian plane.

**Sample input 1**

**Sample output 1**

The point lies in the 1st Quadrant.

**Sample input 2**

\-2

\-6

**Sample output 2**

The point lies in the 3rd Quadrant.

Program.cs

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

Mentor

Find the quadrants for a given point (x,y)

Show Solution