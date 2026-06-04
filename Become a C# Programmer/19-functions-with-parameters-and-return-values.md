# Functions with Parameters and Return Values
Learn to divide a program into functions or subprograms in C#.

## Function with parameters
The **parameters** are the input values for the function enclosed in `()`, provided in the function call as **arguments**. Multiple parameters are separated by `,` and each parameter must have a data type.

static void showSum(int a, int b)

{

  System.Console.WriteLine(a + b);

}

The following function receives two `int` parameters and displays their sum.

showSum(5, 10);

main.cs

C#

```
class Test
{
    static void showSum(int a, int b)
    {
      System.Console.WriteLine(a + b);
    }
    static void Main()
    {
      showSum(5 , 10);
    }
}
```

Mentor

Function with parameters

## Array as a function parameter
An array can be received in a function as a parameter. The following program demonstrates the use of an array as a function parameter.

main.cs

C#

```
class Test
{
    static void getSum(int[] nums)
    {
      int c = 0;
      for (int i = 0 ; i < nums.Length; i++)
      {
        c += nums[i];
      }
      System.Console.WriteLine(c);
    }
    static void Main()
    {
```

Mentor

Use of array as a function parameter

In the program above, the function receives an array `int[] nums` as a parameter. We need the size to traverse through each element of the array using `arr.Length`. We have used a `for` loop to calculate the sum of array elements in `c` and displayed it. In the `Main()` function, we declare an array of 444 elements `{10, 20, 30, 40}` and pass it in the function call by using the array name on **line 17**. We do not use `[]` in the function call.

## The value-returning function
A function can return a value as the last statement in its body with the keyword `return`. In this case, the data type of the returning value is written in place of `void` at the start of the function header. The following code demonstrates a value-returning function:

main.cs

C#

```
class Test
{
    static int getSum(int a, int b)
    {
      int mysum = a + b;
      return mysum;
    }
    static void Main()
    {
      int num1 = 5;
      int num2 = 10;
      int result = getSum(num1, num2);
      System.Console.WriteLine(result);
```

Mentor

Value-returning function

In the code above, the `getSum` function receives two `int` parameters and returns an `int`. The variables `a` and `b` are parameters, and the `mysum` variable is the return value. The function stores the sum of `a + b` into `mysum`; however, `a + b` can be returned directly as `return a + b;`. The `Main` function defines two variables, `num1` and `num2`, to be used as arguments in the function call however, `5` and `10` can be passed directly as `getSum(5, 10);` The value returned by the function is stored in another variable `result`; we can think of it in a way that the function call is replaced by 15, which is the returned value itself. It is then displayed on **line 13**. However, the function can be called directly in the `System.Console.WriteLine` statement as `System.Console.WriteLine(getSum(num1, num2));`.

## Practice creating and calling functions
Here are a few example programs to practice creating and calling functions. By clicking the “Show Solution” button, you’ll find a program that solves the respective problem. You may copy and paste the given solution into the code widget to make sure that the output of your solution matches the given solution. There may be several ways of writing correct solutions in programming.

### Function to create a multiplication table
Write a function `showTable()` that displays 20 terms of the table of a value received as a parameter. Call your function from the `Main()` function with distinct argument values (say, 4, 5, and 15) one by one.

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

```
class Test
{
    // Write your code here
    static void Main()
    {
    
    }
}
```

Mentor

Function to create a multiplication table of four

Show Solution

### Function to search a string in an array
Write a function that checks if a string or character is present in the array. If it’s present, display its index in the array. Call your function from `Main()` to display the results.

**Sample input 1**

*   **First parameter: array**
    
    {"a", "an", "and", "i", "at", "in"}
    
*   **Second parameter: string**
    
    "and"
    

**Sample output 1**

and is found at index 2

**Sample input 2**

*   **First parameter: array**
    
    {"i", "do", "not", "get", "this", "one"}
    
*   **Second parameter: string**
    
    "two"
    

**Sample output 2**

\*\*\* two is NOT FOUND in the array \*\*\*

main.cs

C#

```
class Test
{
    // Write your code here
    static void Main()
    {
        
    }
}
```

Mentor

Search for a string in an array using a function

Show Solution

### Function to display Fibonacci sequence
A Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones, except the first two terms. Write a function, `fibo()`, that receives the parameter n to specify the number of terms of the Fibonacci sequence. That function will return an array containing the sequence. Call your function from `Main()` to display the results.

**Sample input**

**Sample output**

First 10 terms of Fibonacci sequence are:

0 1 1 2 3 5 8 13 21 34

\*\*\* End of generating Fibonacci Numbers \*\*\*

main.cs

C#

```
class Test
{
    // Write your code here
    static void Main()
    {
        
    }
}
```

Mentor

The Fibonacci sequence

Show Solution