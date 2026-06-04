# Introduction to Loops
Learn the loops for a fixed number of iterations in C#.

## Repetition
The repetition of an instruction or a group of instructions is a commonly encountered phenomenon in programming. It is called a **loop**. As an example, say we want our program to perform the following tasks:

*   To read a document or data file line by line repeatedly until the end of the file.
*   To draw an image pixel by pixel repeatedly using color values that show it on the screen.
*   To iterate through a collection of variables one by one to process its values.
*   To compute a result by applying a formula to several values.

Let’s say we want to display integers from 000 to 444. We can simply display the numbers 000 to 444 one by one using the `WriteLine()` statement. We can also use one variable and print its value repeatedly by changing the value of the variable, as shown below. For a better understanding, you can take the AI mentor’s help.

main.cs

C#

```
// Multiple print statements with help of variable a
class Test
{
    static void Main()
    {
        int a = 0;
        System.Console.WriteLine(a);
        a = 1;
        System.Console.WriteLine(a);
        a = 2;
        System.Console.WriteLine(a);
        a = 3;
        System.Console.WriteLine(a);
```

Mentor

Repeated print statements

The code above clearly shows the repetitive use of `System.Console.WriteLine(a)`. The benefit of using a single variable is that we can convert this repetition into a loop in C#.

## The counter-controlled loop
The **counter-controlled loop** is used when a group of instructions needs to be repeated a fixed number of times. This loop has four parts after the `for` keyword as shown below:

main.cs

C#

```
for (initialization; condition; update)
{
    // body of loop 
}
```

Mentor

Syntax of for loop

The **initialization** value initializes the counter and is executed only once. The **condition** value checks the value of the counter at the start of each iteration before entering the body of the loop—if true, the body of the `for` loop is executed and if false, the `for` loop is terminated. The **update** value updates the value of the counter and again checks the condition. The three parts (initialization, condition, and update) are separated by `;` and enclose these parts in `(` and `)`. We don’t use a semicolon after `)`. The **body of loop** is a set of statements to be repeated.

> **Note:** If there is only one statement in the body of the loop, then curly braces `{` and `}` are not needed.

The following code demonstrates the same output as the above program in a compact way using the counter-controlled loop.

main.cs

C#

```
class Test
{
    static void Main()
    {
        for (int a = 0; a < 5; a++)
        {
            System.Console.WriteLine(a); // Body of the loop
        }
    }
}
```

Mentor

Repeated print statement with for loop

The `for` loop causes **lines 6–8** to be repeated five times. So, we can say the loop has five iterations.

In the code above:

*   We use an integer variable, `a`, as the counter and initialize it with `0`.
*   We use `a < 5` as a condition.
*   We update the value of `a` after each iteration.
*   The body of the loop starts after `)`.
*   The body of the loop contains only one statement, `System.Console.WriteLine(a);`.

There are only two repeatable lines in the loop, but when we unfold the loop and write out each step as it happens, there are eleven execution steps. The loop iterates all values based on the condition to execute each statement in the body of the loop.

Let’s take an example of generating the first five non-negative even numbers—`0`, `2`, `4`, `6` and `8`.

main.cs

C#

```
class Test
{
    static void Main()
    {
      for (int a = 0, e = 0; a < 5; a++)
      {
        e = a * 2; // Multiplying the value by 2
        System.Console.WriteLine(e);
      }
    }
}
```

Mentor

Displaying the first five even numbers

In the `for` loop, we can have the initialization of multiple variables separated by a comma, as shown in **line 5** in the above code.

The lines **7–8** are the body of the loop.

Let’s take another example of generating the first 100100100 non-negative even numbers: 000, 222, 444 ......... 198198198.

main.cs

C#

```
class Test
{
  static void Main()
  {
    for (int counter = 0; counter < 100; counter++) // Using range in for loop
    {
        int twice = counter * 2; // Multiply each value of a with 2
        System.Console.WriteLine(twice);
    }
  }
}
```

Mentor

Displaying the first hundred even numbers

In this program, the `counter` generates values from 000 to 999999, and we multiply each value by 222, calculating `0 * 2`, `1 * 2`, `2 * 2` … `99 * 2`. The **lines 6–9** constitute a block of two statements representing the body of the loop.

We may generate even numbers with the same sequence as above using an increment value of `2` in the counter. We may directly use the `for (int c = 0; c < 200; c+=2)`, as shown in the following program:

main.cs

C#

```
class Test
{
  static void Main()
  {
    for (int c = 0; c < 200; c += 2) // Using range function with step parameter
    {
      System.Console.WriteLine(c);
    }
  }
}
```

Mentor

Generate even numbers using a jump value in range

If we want to generate the multiples of `7` between `1` and `700`, we can use `(int c = 7; c < 700; c+=7)`. We use `7` as starting value so that every increment of `7` can take us to the next multiple of `7`. Incorporating this in the `for` loop will allow us to show the generated values as output.

## Programming practice for counter-controlled in loops
The following are a few examples to help you practice writing the programs in C# using the `for` loop. By clicking the “Show Solution” button (after you “Run” the code), you can see one of the possible solutions to the problem. There can be several ways to write correct solutions in programming.

### Odd numbers
Write a program that prints the first 100 positive odd numbers 1,3,5...1991,3,5 ... 1991,3,5...199.

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

Display the first 100 odd numbers

Show Solution

### Arithmetic sequence
An **arithmetic sequence** is an ordered set of numbers that have a common difference between each consecutive term.

Write a program that prints the terms of the arithmetic sequence 1,6,11,...<1001, 6, 11,...< 1001,6,11,...<100.

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

Display the arithmetic sequence

Show Solution

### Table of nnn
Write a program that takes an integer input by the user and prints a multiplication table for the first 20 multiples, as illustrated below.

**Sample input**

**Sample output**

5 x 1 = 5

5 x 2 = 10

5 x 20 = 100

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

Display the table of n

Show Solution

### Mean of nnn inputs
Write a program that calculates the average of the numbers input by the user. The program first asks the user how many values they want to average. The number of values should be greater than 000.

**Sample input**

**Sample output**

The average is: 25

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

Display mean of n inputs

Show Solution

### Factors of user input
Write a program that shows all the factors of a number provided by the user.

**Sample input**

**Sample output**

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

Display the factors of the user input

Show Solution

### Prime or not
A **prime number** is divisible only by itself and 111.

Write a program that shows whether or not the natural number input by the user is a prime number.

**Sample input 1**

**Sample output 1**

7 is a prime number

**Sample input 2**

**Sample output 2**

20 is not a prime number

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

Display whether or not the number is prime

Show Solution