# Categories of Errors
Learn the error categories in C#.

## Errors in programming
**Errors** are the problems or faults that occur in the program and cause unexpected behavior. Some errors don’t allow the program to begin execution, some can interrupt the execution, and others can be detected only after analyzing the program’s output. Errors are a way through which our machines tell us that they do not understand what we want them to do. It is the same as if the people do not follow the rules and words of our language, we may not understand what they want to say or want us to do. Let’s explore the various types of programming errors and how they occur.

## Syntax errors
**Syntax errors** are the most basic type of errors. They arise when C# is unable to understand a line of code based on the rules of the language. For example, `2k` is neither a valid variable name nor a valid expression in C#, so it will return a syntax error.

Syntax errors are always fatal, which is to say that there is never a way to execute a piece of code containing syntax errors successfully. In C#, a syntax error doesn’t even allow the program to begin execution.

main.cs

C#

```
class Test
{
    static void Main()
    {
        int variable = 5+; // Assigning an invalid value to the variable
        System.Console.WriteLine(variable);
    }
}
```

Mentor

Example of a syntax error

The `+` written at the end of **line 5** causes a syntax error. Possible fixes to resolve this error include:

*   Removing the `+` symbol if it’s a simple assignment.
*   Adding a second operand after `+` if the `variable` ought to store the sum of two numbers.

## Logical errors
Most of the time, a program completes its execution despite an error in the code. In most cases, the unexpected output of the program is caused due to some mistake in the program logic. Such an error is called a **logical error**. A simple example of a logical error is demonstrated in the following program:

main.cs

C#

class Test

{

    static void Main()

    {

        int a = 8;

        if (a % 2 == 0) // If the number is divisible by 2

        {

            System.Console.WriteLine(a + " is an odd number");

        }

        else

        {

            System.Console.WriteLine(a + " is an even number");

        }

    }

}

Mentor

Demonstrating a logical error

Logical errors are only erroneous from the perspective of the programming goal. The above `if` statement works within the framework of C# but gives the opposite of the expected result. We can fix this error by inverting the conditional expression or by swapping the true and false branches.

## Exceptions
**Exceptions** arise when C# knows what to do with a piece of code but is unable to perform the action. For example, if C# attempts to access the internet but no internet connection is available, C# knows what to do with the command but is unable to perform it. The following program demonstrates an exception:

main.cs

C#

class Test

{

    static void Main()

    {

        int a = 5;

        int b = 0;

        int result;

        System.Console.WriteLine(a);

        System.Console.WriteLine(b);

        result = a / b; // Dividing a by b

        System.Console.WriteLine(result);

    }

}

Mentor

Exception ZeroDivisionError

The above program executes and shows the output up to **line 9**. Division by zero gives an undefined result. The divisor `b` in **line 10** interrupts the execution of the program with an exception. We can fix this error by using a non-zero divisor.

## C# error practice
Here are a few example programs to help us understand errors in C#.

### Greater of two numbers
We want a program that shows the greater of two distinct numbers. There is an error in the following code. Let’s try to trace and fix it to obtain the desired output. If you need a hint, asking the AI mentor is a good idea.

main.cs

C#

class Test

{

    static void Main()

    {

        int a = 1;

        int b = 2;

        if (a > b) // If a greater than  b

        {

            System.Console.WriteLine(b + " is greater than " + a);

        }

        else

        {

            System.Console.WriteLine(a + " is greater than " + b);

        }

    }

}

Mentor

Wrong comparison operator

Show Solution

### Multiple or not multiple
We want to write a program that prints either `multiple` or `not multiple` depending on whether the second number is a multiple of the first one or not. There’s an error in the following code. Let’s try to trace and fix it to obtain the desired output.

main.cs

C#

class Test

{

    static void Main()

    {

        int first = 4;

        int second = 8;

        if ( second / first == 0 ) 

        {

          System.Console.WriteLine(second + " is multiple of " + first);

        }

        else

        {

          System.Console.WriteLine(second + " is not multiple of " + first);

        }

    }

}

Mentor

Wrong order of operands

Show Solution

### Area and perimeter of a square
We want to write a program that calculates the area and perimeter of a square. There’s an error in the following code. Let’s try to trace and fix it to obtain the desired output.

main.cs

C#

class Test

{

    static void Main()

    {

        int side = 5;

        System.Console.WriteLine("The side of square is " + side);

        int perimeter = side \*; // Calculating perimeter

        int area = side \*; // Calculating area

        System.Console.WriteLine("Area of a square: " + area);

        System.Console.WriteLine("Perimeter of a square: " + perimeter);

    }

}

Mentor

Syntax error

Show Solution