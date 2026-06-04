# Sentinel Loops
Learn and practice loops controlled by a sentinel value.

## The sentinel value
Sometimes, the loop doesn’t have a fixed number of repetitions. Instead, an indicator value stops the loop. This special value is called the **sentinel value**. For example, we don’t know how much data is in a file without reading it all. However, we know that every file ends with an end-of-file (EOF) mark. So, the EOF mark is the sentinel value in this case.

> **Note:** We should select a sentinel value that’s not expected in the normal input.

### The `while` loop
We use the `while` loop when the termination of the loop depends on the sentinel value instead of a definite number of iterations. As a simple example, we want to display the reverse sequence of digits in a positive integer value input by the user.

Program.cs

```
class Test
{
  static void Main()
  {
      System.Console.WriteLine("Enter the number: ");
      int a = int.Parse(System.Console.ReadLine()); // Taking input in variable a

      while (a > 0) // This loop will terminate when the value is not greater than 0
      {
          System.Console.Write(a % 10);
          a /= 10; // Dividing a by 10 and assigning the result to variable a
      }
      System.Console.WriteLine("");
  }
}
```

Mentor

Reverse of an integer value

In the program above:

*   In **line 6**, we take input from the user, and then convert it into an integer value using `int.Parse()`.
    
*   The loop statement, `while`, followed by a conditional expression.
    
    > **Note:** There is no semicolon (`;`) at the end of **line 9**.
    
*   The next four statements after the `while` loop, **line 9 to 12**, are in the body of the loop indicated by the indentation.
    
*   The body of the loop executes if the condition expression `a > 0` is `true`. This statement tests the condition before entering the loop. Therefore, such a loop is called a **pretest loop**.
    
*   The loop terminates when the condition evaluates to `false`.
    
*   In the body of the loop, the first statement displays the value of the unit’s position using the modulo operation.
    
*   The second statement strips that unit’s value by using integer division.
    

#### Sum the values using the `while` loop
We want to sum the values provided by the user, stopping when the user inputs `0`. In this case, `0` is the sentinel value. Keep in mind that while writing the program, we don’t know whether `0` will be the first input or the 100th. **Before showing the code captioned “Calculate the sum of the user inputs”, let’s use the next two programs to demonstrate some common mistakes that new learners might experience.**

class Test
{
  static void Main()
  {
    while(a != 0) // This loop will terminate when the value of a is zero.
    {
      System.Console.WriteLine("Enter the number: "); // Taking input from user in variable a
      a = System.Console.ReadLine();
      sum += a; // Calculating the sum
    }
    System.Console.WriteLine("Sum is " + sum);
  }
}

Error of variable not assigned

First, let’s talk about the new elements that appear in the code above:

*   The loop statement, `while`, is followed by a conditional statement.
*   The body of the loop executes if the condition `a != 0` is `true`.
*   The loop terminates when the condition evaluates to `false`.
*   In the body of the loop, the second statement asks for input from the user and stores it to `a`.
*   The third statement adds that value to the running `sum` being updated in the variable `sum` on every iteration.
*   When the user inputs `0`, the loop terminates and moves to the `System.Console.WriteLine` statement outside the body of the loop.
*   The last statement displays the updated value of the `sum` variable.

What is the problem with the code above? There isn’t just a single problem.

The code has multiple syntax errors, which can be seen below:

*   The variable, `a`, is not declared before its first usage in the condition.
*   The `sum` variable is not defined before its first usage in `sum += a`. The expanded meaning of this assignment statement is `sum = sum + a`. The `sum` variable used on the RHS of the assignment must be defined first.

The following program fixes both syntax errors mentioned above. However, the code still doesn’t give the desired result. Now it has a logical error.

class Test
{
  static void Main()
  {
    int a = 0;
    int sum = 0;

    while(a != 0) // This loop will terminate when the value of a is zero.
    {
      System.Console.WriteLine("Enter the number: "); // Taking input from user in variable a
      a = int.Parse(System.Console.ReadLine());
      sum += a; // Calculating the sum
    }
    System.Console.WriteLine("Sum is " + sum);
  }
}

Logical error in the initial value of variable a

In the code above, there’s still the following problem:

*   The value of `a` is already `0`, which means the loop condition `a != 0` is `false` because 0!=0 isn’t `true`.
*   We need to store some nonzero value as an initial value to `a`.

The following code is the correct executable code:

class Test
{
  static void Main()
  {
    int a = 1;
    int sum = 0;
    while(a != 0) // This loop will terminate when the value of a is zero.
    {
      System.Console.WriteLine("Enter the number: "); // Taking input from user in variable a
      a = int.Parse(System.Console.ReadLine());
      sum += a; // Calculating the sum
    }
    System.Console.WriteLine("Sum is " + sum);
  }
}

Calculate the sum of the user input

Let’s understand the flow of the above program with the help of the following execution sheet. This execution sheet will use the following input values:

> **Note:** Usually, we use a `while` loop when the loop termination depends on a specific event, like encountering a sentinel value. The `for` loop is used when the number of iterations is definite. That’s why we call it a fixed iteration loop. However, both loops may be used interchangeably, and both are pretest loops because the condition is tested before entering the body of the loop.

## Practice for sentinel loops
The following are a few examples that can help you practice using the `while` loop. By clicking the “Show Solution” button, you’ll find a program that solves the respective problem. You may copy and paste the given solution into the code widget to make sure that the output of your solution matches the given solution. There can be several ways to write correct solutions in programming.

### Geometric sequence
Write a program that shows the terms of the geometric sequence 1,3,9...1, 3, 9...1,3,9... that stops before the value exceeds 100010001000.

main.cs

C#

class Test

{

    static void Main()

    {

        // Write your code here

    }

}

Mentor

Calculate the geometric sequence

Show Solution

### Average value
The **average** is calculated by dividing the sum of the values by their number. Write a program that calculates the average of the numbers provided by the user. The program should stop and display the result when the user inputs `0`.

**Sample input**

**Sample output**

Average of inputs is: 10

Show Hint

class Test
{
    static void Main()
    {
        // Write your code here
    }
}

Calculate the mean of user input

Show Solution

### Greatest common divisor
The **greatest common divisor** is the largest integer that is an exact divisor of each of the two other integers. Write a program that inputs two natural numbers from the user and displays their greatest common divisor (GCD) also known as the highest common factor (HCF).

**Sample input 1**

**Sample output 1**

The greatest common divisor is: 4

**Sample input 2**

**Sample output 2**

The greatest common divisor is: 200

Show Hint

class Test
{
    static void Main()
    {
        // Write your code here
    }
}

Calculate the greatest common divisor

Show Solution