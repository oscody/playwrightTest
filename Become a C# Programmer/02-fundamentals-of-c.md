# Fundamentals of C
Learn commonly used data types and operators in C#.

## Data types in C#
Every variable in C# needs to be declared with the help of a **data type**. It indicates whether a variable can store only numbers or can also store other symbols as its value.

### Common data types
The following are the commonly used data types in C#:

*   `int`: Integer values (`5`, `0`, `-1`, etc.)
*   `double`: Floating-point values (`2.33333`, `-2500.001`, `20.0`, etc.)
*   `bool`: Boolean values (`true`, `false`).
*   `char`: Character values (`a`, `0`, `＄` etc)
*   `string`: String values (`educative`, `C#`, etc.)

### Variable declaration
The C# language requires the programmer to indicate the data type of the variables used in a program. The following code demonstrates the declaration of variables to input their values with suitable prompts and to display them with suitable labels:

Program.cs

```
class Test
{
    static void Main()
    {
        string str; // Declaring a variable of type string
        int number; // Declaring a variable of type integer
        double real; // Declaring a variable of type double
        bool isTrue; // Declaring a variable of type bool
        char letter; // Declaring a variable of type char

        System.Console.WriteLine("Please input a word: ");
        str = System.Console.ReadLine();
        System.Console.WriteLine("Please input an integer: ");
        number = int.Parse(System.Console.ReadLine());
        System.Console.WriteLine("Please input a real number: ");        
        real = double.Parse(System.Console.ReadLine());
        System.Console.WriteLine("Please input a boolean value true or false: ");
        isTrue = bool.Parse(System.Console.ReadLine());
        System.Console.WriteLine("Please input any character: ");
        letter = char.Parse(System.Console.ReadLine());

        System.Console.WriteLine("The value of each variable is enclosed in brackets: ");
        System.Console.WriteLine("str (" + str + ")");
        System.Console.WriteLine("number (" + number + ")");
        System.Console.WriteLine("fraction (" + real + ")");
        System.Console.WriteLine("isTrue (" + isTrue + ")");
        System.Console.WriteLine("letter (" + letter + ")");
    }
```

Mentor

Mentor

Variable declaration

**Explanation**

*   **Lines 5–9:** In these lines, the variables are declared so that they can be used to store values input by the user. There are different types of variables that are declared;
    *   `str` is a variable of the `string` type.
    *   `number` is a variable of the `int` type.
    *   `real` is a variable of the `double` type.
    *   `isTrue` is a variable of the `bool` type.
    *   `letter` is a variable of the `char` type.
*   **Lines 11–20:** These lines output a prompt using `System.Console.WriteLine()`, demand input from the user using `System.Console.ReadLine()`, and then store them in the relevant variable.
*   **Lines 22–27:** These lines output the variable name as a label and the value enclosed in a bracket.

The following code demonstrates the declaration of the variables without inputting their values from the user:

main.cs

C#

```
class Test
{
    static void Main()
    {
        string str; // Declaring a variable of type string
        int number; // Declaring a variable of type integer
        double real; // Declaring a variable of type double
        bool isTrue; // Declaring a variable of type bool

        System.Console.WriteLine("The value of each variable is enclosed in brackets: ");
        System.Console.WriteLine("str (" + str + ")");
        System.Console.WriteLine("number (" + number + ")");
        System.Console.WriteLine("fraction (" + real + ")");
```

Mentor

Demonstrating four basic types of variables

In the above code, **lines 5–8** declare the variables `str`, `number`, `real`, and `isTrue`, with the `string`, `int`, `double`, and `bool` data types, respectively. When we execute the code, we see the error, “Use of unassigned local variable.” This shows, that in C# programs, it is essential to assign some value to the variable before using it.

### Variable initialization
Storing a value to a variable at the time of its declaration is called **initialization**. The following code demonstrates the initialization of variables in C#:

main.cs

C#

```
class Test
{
    static void Main()
    {
        int persons = 5; // Defining a variable of type int to store the number of persons
        double totalWeight = 350.6; // Defining a variable of type double to store the total weight of 5 persons
        char team = 'A'; // Defining a variable of type character
        string status = "winner"; // Defining a variable of  type str to store the team status
        bool flag = true; // Defining a variable of bool type
        System.Console.WriteLine("Total weight of " + persons + " persons of the " + status + " team " + team + " is: " + totalWeight + ", and" +
                                " the value of flag is: " + flag);
    }
}
```

Mentor

Initialization of variables

In the code above, we have initialized all the variables to avoid errors and to ensure a known value is stored in them.

### Operations depend on the data type
The data type also tells which operations are permissible on a specific piece of data and what are the semantics (or meaning) of those operations. The following code demonstrates the semantics of the `+` operation on various data types along with declaring two or more variables in a single statement:

main.cs

C#

```
class Test
{
    static void Main()
    {
      int a = 5, b = 7, sum1 = 0; // Defining three variables on a single line
      sum1 = a + b; // Sum of a and b
      System.Console.WriteLine("The sum of integers: " + sum1);
      double e = 3.2, f = 1.5; // Defining two variables on a single line
      double sum2 = e + f; // Sum of e and f
      System.Console.WriteLine("The sum of doubles: " + sum2);

      string c = "5", d = "7"; // Defining two strings on a single line
      string result = c + d; // Concatenates c and d, to store in result
```

Mentor

The operation + on basic data types

We can declare multiple variables as a comma-separated list in a single statement, as shown in **line 5**. Each variable can have a separate initial value.

## Operators in C#
Like any other programming language, C# supports several types of operators. We have already seen the assignment operator, `=`, that assigns a value to a variable in our programs. The following code demonstrates the use of compound assignment (aka cascaded assignment) and the variable declaration without initialization:

main.cs

C#

```
class Test
{
    static void Main()
    {
        int a, b;
        a = b = 5; // Cascaded assignment
        System.Console.WriteLine("a = " + a + "\nb = " + b);
    }
}
```

Mentor

Various ways of assignment in C#

**Explanation**

*   **Line 5:** We declare two variables, `a` and `b`.
*   **Line 6:** We assign `5` to both `a` and `b`. This assignment syntax is called **cascaded** or **chained** assignment.
*   **Line 7:** The code outputs a string `a =` and then prints the value stored in variable `a` i.e. `5`. It also outputs a string `b =` using `\n` so that it prints `b` on a new line and then prints the value stored in variable `b` i.e. `5`.

### Commonly used operators
There are several other commonly used operators in C#, including:

*   **Arithmetic operators:** These are used for arithmetic operations (addition, subtraction, multiplication, etc.).
    
*   **Comparison operators:** These are used in conditional expressions (less than, greater than, etc.) .
    
*   **Logical operators:** These are used to combine conditional expressions (and, or, not).
    
*   **Compound assignment operators:** These are the combinations of arithmetic and assignment operators.
    

## Arithmetic Operators

Operator

Description

Syntax

Results

x=7 and y=4

+

Addition: Adds two operands

x + y

\-

Subtraction: Subtracts two operands

x - y

\*

Multiplication: Multiplies two operands

x \* y

/

Integer division: Divides the first operand by the second and gives an integer quotient because both operands are integers

x / y

/

Non-integer division: This divides the first operand by the second and gives a floating-point quotient. A quotient is a floating-point number when the dividend or the divisor or both are floating-point numbers

x / 4.0

1.75

%

Modulo: Returns the remainder when the first operand is divided by the second

x % y

++

Increment: Updates the variable with the value that is one more than the already stored value

x++

\--

Decrement: Updates the variable with the value that is one lesser than the already stored value

x--

## Comparison Operators

Operator

Description

Syntax

Results

x=7 and y=4

Greater than: True if the left operand is greater than the right

x > y

True

<

Less than: True if the left operand is less than the right

x < y

False

\==

Equal to: True if both operands are equal

x == y

False

!=

Not equal to: True if both operands are not equal

x != y

True

\>=

Greater than or equal to: True if the left operand is greater than or equal to the right

x >= y

True

<=

Less than or equal to: True if the left operand is less than or equal to the right

x <= y

False

## Logical Operators

Operator

Description

Syntax

Results

x=7 and y=4

&&

Logical AND: True if both the operands are true

x > 4 && y > 4

False

Logical OR: True if either of the operands is true

x > 4 || y > 4

True

!

Logical NOT: True if the operand is false

! (x > 4)

False

## Compound Assignment Operators

Operator

Description

Syntax

Results

x=7 and y=4

+=

Add and assign: Add the right-side operand with the left-side operand and then assign the result to the left operand (x = x + y)

x += y

x = 11

\-=

Subtract and assign: Subtract right-side operand from the left-side operand and then assign result to left operand (x = x - y)

x -= y

x = 3

\*=

Multiply and assign: Multiply the right-side operand with the left-side operand and then the assign result to the left operand (x = x \* y)

x \*= y

x = 28

/=

Divide and assign: Divide the left operand with the right operand, and then assign it to the left operand (x = x / y)

x /= y

x = 1

%=

Modulo and assign: Take modulo after dividing the left operand with the right operand, and, then assign the result to the left operand (x = x % y)

x %= y

x = 3

### Square root and power
There are some operations in mathematics that are difficult to replicate in C# programs using symbols, for example, calculating the power or the square root of a number. In math, the power of xxx is represented as xnx^nxn and the square root of xxx is represented as x\\sqrt xx​. However, C# enables its user to perform these operations in the following way:

main.cs

C#

```
class Test
{
    static void Main()
    {
        double a,b;
        a = System.Math.Pow(25,2);
        b = System.Math.Sqrt(25);
        System.Console.WriteLine("a: " + a);
        System.Console.WriteLine("b: " + b);
    }
}
```

Mentor

Example of math operations like power and square root

> **Note:** We have to add `System.Math` at **lines 6–7** to allow the use of `Math` operations, `Pow()` and `Sqrt()`.

**Explanation**

*   **Line 5:** We declare two variables of the `double` type.
*   **Line 6:** We perform the `Pow()` operation and store 25225^2252 as the result in `a`.
*   **Line 7:** We perform the `Sqrt()` operation and stores the square root of 25\\sqrt {25}25​ as the result in `b`.
*   **Line 8:** The code outputs the string, `a =`, and then prints the value stored in variable `a` i.e. `625`.
*   **Line 9:** The code outputs the string, `b =`, and then prints the value stored in variable `b` i.e. `5`.

Why learn to code