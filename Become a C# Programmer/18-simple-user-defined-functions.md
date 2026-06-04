# Simple User-defined Functions
Learn to divide a program into functions or subprograms in C#.

## Function
We can divide a program into procedural components or modules called **functions** in C#. We are already familiar with the `Main()` function. This function can be copied and reused in a programming technique called a **modular** or **procedural approach**, also known as the divide and conquer approach. We should always try to design functions that can be reused in other programs.

Broadly, there are two types of functions, which we’ll explore in the following sections.

### The structure of a function
The following slides illustrate various parts of a **function definition**:

1 / 4

Parts of a function

1 / 4

Parts of a function

1 / 4

Parts of a function

1 / 4

Parts of a function

> A **function name** can only contain letters (`A`—`Z` and `a`—`z`) and the underscore symbol (`_`). It may also contain digits (`0`–`9`), but the function name can’t start with those. For example, `Key_2` is a valid function name, but `2_key` is not. Function names are case-sensitive, meaning that `name`, `Name`, and `NAME` are three different functions.

There are two main parts of a function definition:

*   **Header:** The first line ending with closing parenthesis `)`
*   **Body:** The block of statements below the function header that start with an opening brace `{` and end with a closing brace `}`

The function header contains the keywords `static` and `void` (`void` means that the function does not have a return value), the function name, `sayHello`, and the parameters in `()`. All statements in the function body are written as a block of code, enclosed in `{` and `}`. We cannot write the body of the function without braces.

## Function call
The following program demonstrates the creation of a function and a function call.

main.cs

C#

class Test

{

    static void sayHello()

    {

      System.Console.WriteLine("Hello");

    }

    static void Main()

    {

      sayHello();

    }

}

Mentor

The sayHello() function

We can call a function by writing the function name, followed by `()` and ending with `;`. In **line 9**, we tell the program to call the function `sayHello()`. This line is known as a **function call** or calling the function.

## Example of function calls
Let’s look at the following code:

main.cs

C#

class Test

{

    static void first()

    {

      System.Console.WriteLine("Now inside the function 'first'.");

    }

    static void second()

    {

      System.Console.WriteLine("Now inside the function 'second'.");

    }

    static void Main()

    {

      System.Console.WriteLine("Main program is starting here.");

      first(); //calling first function

      System.Console.WriteLine("Back in main program.");

      second(); //calling second function

      System.Console.WriteLine("Back in the main program again.");

    }

}

Mentor

Calling functions

In the program:

*   We define two simple functions—`first()` and `second()`.
*   We demonstrate the sequence of execution with the help of `System.Console.WriteLine()` statements.

## Practice creating and calling functions
Here are a few example programs to practice creating and calling functions. By clicking the “Show Solution” button, you’ll find a program that solves the respective problem. You can copy and paste the given solution into the code widget to make sure that the output of your solution matches the given solution. There can be several ways of writing correct solutions in programming.

### Function to create a multiplication table
Write a function, `showTableOf4()`, which displays 20 terms from the table of `4`. Call your function from the `Main()` function to display the results.

**Sample output**

4 x 1 = 4

4 x 2 = 8

4 x 3 = 12

4 x 4 = 16

4 x 5 = 20

4 x 6 = 24

4 x 7 = 28

4 x 8 = 32

4 x 9 = 36

4 x 10 = 40

4 x 11 = 44

4 x 12 = 48

4 x 13 = 52

4 x 14 = 56

4 x 15 = 60

4 x 16 = 64

4 x 17 = 68

4 x 18 = 72

4 x 19 = 76

4 x 20 = 80

main.cs

C#

class Test

{

    // Write your code here

    static void Main()

    {

    }

}

Mentor

The function to create a multiplication table of four

Show Solution