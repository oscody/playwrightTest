# Nested Loops
Learn and practice using a loop inside another loop.

## Nested loop
When we use a loop inside another loop, we call them **nested loops**. The first loop is called the **outer loop**, and the second loop is called the **inner loop**. Nested loops may be the same type or different types of loops. Both loops can be `for` loops or `while` loops. The outer loop can be a `for` loop and the inner loop a `while` loop, or vice versa.

Let’s use the Cartesian product of two sets as an illustration of nested loops.

### Cartesian product
The **Cartesian product** of the sets A\={−1,−2,−3}A = \\{-1, -2, -3\\}A\={−1,−2,−3} and B\={1,2,3}B = \\{1, 2, 3\\}B\={1,2,3} is A×B\={(−1,1),(−1,2),(−1,3),(−2,1),(−2,2),(−2,3),(−3,1),(−3,2),(−3,3)}A \\times B = \\{(-1,1),(-1,2),(-1,3),(-2,1),(-2,2),(-2,3),(-3,1),(-3,2),(-3,3)\\}A×B\={(−1,1),(−1,2),(−1,3),(−2,1),(−2,2),(−2,3),(−3,1),(−3,2),(−3,3)}. This can be achieved in programming with the help of two nested `for` loops. The outer loop iterates through the elements of the first set, and the inner loop iterates through the elements of the second set against each element of the first set.

main.cs

C#

```
class Test
{
    static void Main()
    {
        for (int e = -1; e >= -3; e--) // outer loop
        {
            for (int m = 1; m <= 3; m++) //inner loop
            {
                System.Console.Write("(" + e + ", " + m + ") ");
            }
        }
    }
}
```

Mentor

Cartesian product using nested loops

There are a few new things in the code above that we need to understand:

*   The outer `for` loop starts from `-1` and is decremented to `-2` and then `-3`, storing a value to the variable `e` at each iteration of this loop.
    
*   The next statement is also a `for` loop, which is in the body of the outer loop.
    
*   The inner `for` loop starts iterating from `1` and is incremented to `2` and then `3`, storing a value to the variable `m` at each iteration.
    
*   The next statement is `System.Console.Write("(" + e + ", " + m + ") ");`, which is in the body of the inner loop. The value of `e` remains `-1` for all values of `m` in the inner loop. Therefore, the program outputs `(-1, 1)`, `(-1, 2)`, and `(-1, 3)`.
    
*   Then, the inner loop terminates, and the control goes to the next iteration of the outer loop.
    
*   Now, the value of `e` is `-2`. The inner loop starts again and outputs `(-2, 1)`, `(-2, 2)`, and `(-2, 3)`.
    
*   Then, the inner loop terminates again, and the control goes to the next iteration of the outer loop.
    
*   Now, the value of `e` is `-3`. The inner loop restarts and outputs `(-3, 1)`, `(-3, 2)`, and `(-3, 3)`.
    

> **Note:** We can display the results of the next `WriteLine` statements on the same line by using `\t` at the end of `WriteLine`. The `\t` tab includes multiple spaces. We may use `" "` to show only one space.

The following code demonstrates the functionality of showing the output on a single line:

main.cs

C#

```
class Test
{
    static void Main()
    {
        for (int e = -1; e >= -3; e--) // outer loop
        {
            for (int m = 1; m <= 3; m++) //inner loop
            {
                System.Console.Write(e + " " + m + "\t");
            }
        }
    }
}
```

Mentor

Display the output on single line using \\t

In the above code, `Write` does not add a next line automatically, while `WriteLine` does. Here, the output will be shown in a single line because we have used the `Write` command.

## Practice nested loops
Here are a few example programs that can help you practice writing nested loops. By clicking the “Show Solution” button, you’ll find a program that solves the respective problem. You can copy and paste the given solution into the code widget to make sure the output of your solution matches the given solution. There can be several ways to write correct solutions in programming.

### Ordered pairs
Write a program that shows the ordered pairs (x,y)(x,y)(x,y) so that 1<\=x<\=51 <= x <= 51<=x<=5 and 1<\=y<\=51 <= y <= 51<=y<=5.

**Sample output**

( 1 , 1 )   ( 1 , 2 )   ( 1 , 3 )   ( 1 , 4 )   ( 1 , 5 )   

( 2 , 1 )   ( 2 , 2 )   ( 2 , 3 )   ( 2 , 4 )   ( 2 , 5 )   

( 3 , 1 )   ( 3 , 2 )   ( 3 , 3 )   ( 3 , 4 )   ( 3 , 5 )   

( 4 , 1 )   ( 4 , 2 )   ( 4 , 3 )   ( 4 , 4 )   ( 4 , 5 )   

( 5 , 1 )   ( 5 , 2 )   ( 5 , 3 )   ( 5 , 4 )   ( 5 , 5 )

Show Hints

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

Display the ordered pairs

Show Solution

### Square of asterisks
Write a program that shows a square shape built with asterisks. The number of asterisks on the side of the square is input by the user.

**Sample input**

**Sample output**

\*\*\*\*\*

\*\*\*\*\*

\*\*\*\*\*

\*\*\*\*\*

\*\*\*\*\*

Show Hint

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

Display the square of asterisks

Show Solution

### Rectangle of asterisks
Write a program that shows a rectangular shape built with asterisks. The height and width of the rectangle are input by the user.

**Sample input**

**Sample output**

\*\*\*\*\*\*\*\*

\*\*\*\*\*\*\*\*

\*\*\*\*\*\*\*\*

\*\*\*\*\*\*\*\*

\*\*\*\*\*\*\*\*

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

Display the rectangle of asterisks

Show Solution

### Right triangle
Write a program that shows a right triangle built with asterisks. The side length of the right triangle is input by the user.

**Sample input**

**Sample output**

\*

\*\*

\*\*\*

\*\*\*\*

\*\*\*\*\*

Show Hints

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

Display the right triangle

Show Solution

### Hollow square
Write a program that displays a hollow square built with asterisks. The length of each side of the hollow square shape is input by the user.

**Sample input**

**Sample output**

\*\*\*\*\*

\*   \*

\*   \*

\*   \*

\*\*\*\*\*

Show Hints

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

Display the hollow square

Show Solution