# Arrays with Loops
Learn to use arrays with the help of loops in C#.

## The `for` loop with arrays
The individual values in an array are accessed through an index number. The `for` loop variable can be used as an index number. However, the array values can also be used directly in a `for` loop.

The following program demonstrates the various ways of accessing array elements:

main.cs

C#

```
class Test
{
   static void Main()
   {
      string[] vals = {"-5", "C#", "3.8"};
      System.Console.WriteLine("One way of printing an array: ");
      for (int i = 0; i < vals.Length; i++)
      {
         System.Console.WriteLine(vals[i]);
      }

      System.Console.WriteLine("Another way of printing an array: ");
      foreach (string s in vals)
```

Mentor

Use the for loop with arrays

In the code above:

*   The new item is the `vals.Length` function, which is used to get the length of the array.
*   The first `for` loop accesses the array values with the help of the loop variable, `i`.
*   The `foreach` loop directly accesses the array values.

## The `while` loop with arrays
We usually use the `while` loop to deal with arrays when the number of iterations is not fixed. For example, let’s say we want to generate `n` terms of a Fibonacci sequence and store it in an array, where `n` is the user input. A **Fibonacci sequence** is a sequence in which each number is the sum of the two preceding ones, except the first two terms.

Let’s start by noting a few terms in this sequence: 0,1,1,2,3,5,8,13,21,34,…0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …0,1,1,2,3,5,8,13,21,34,… . Here’s how to solve this problem:

*   Start with an empty array of nnn elements.
*   Store 000 at the index number 000 and 111 at the index number 111.
*   Compute the next value by adding the two previous values. Consider the array name, `fib`, and compute `fib[2] = fib[0] + fib[1]`.
*   Keep performing the step above for each next element in the array until nnn elements are generated.

We can demonstrate this process with the help of the following code:

Program.cs

```
class Test
{
    static void Main()
    {
        int n;
        System.Console.WriteLine("Enter the number of terms (maximum 20) for the Fibonacci sequence: ");
        n = int.Parse(System.Console.ReadLine());
        if (n <= 1 || n > 20)
        {
            System.Console.WriteLine("It seems the number of terms for the Fibonacci sequence has an invalid value");
        }
        else
        {
            int[] fib = new int[n];
            fib[0] = 0;
            fib[1] = 1;
         
            System.Console.WriteLine("First n terms of fibonacci sequence are: ");
            int count = 2;

            while(count < n)
            {
                fib[count] = fib [count - 2] + fib [count - 1]; //adding last two terms
                count ++;
            }
            
            for (int i = 0; i < n; i++)
            {
```

Mentor

Mentor

Generate the Fibonacci sequence using while loop

In the code above:

*   The variable, `n`, shows the total number of terms in the Fibonacci sequence, which has been input by the user.
*   The use of the first `if` statement means that the value of `n` can’t be less than `1` and greater than `20`.
*   One new item in the program above is `int[] fib = new int[n]`. The syntax `new int[n]` is used to create an array of `n` elements.
*   The array of `n` zeros is stored in the variable `fib`. This is an easy way to generate large arrays or arrays of `n` values without having to write too many individual values. We may choose any other value instead of `0` as needed.
*   The use of the second `if` statement checks the value of `n`. If it’s greater than `1`, then the value `1` is assigned to `fib[1]`.
*   We use the variable `count` to store the number of terms. The current number of terms is `2`.
*   In the `while` loop, the statement `fib[count] = fib[count-2] + fib[count-1]` generates the Fibonacci sequence. We repeat this process while the value of `count` is less than `n`.

## Practice array manipulation with loops
Here are a few program examples to practice writing the programs in C# to play with arrays using loops. There are built-in operations for some tasks mentioned below. However, doing them without these built-in functions is to practice using arrays.

By clicking the “Show Solution” button, you may find a program that solves the respective problem. You can copy and paste the given solution into the code widget to make sure the output of your solution matches the given solution. There can be several ways of writing correct solutions in programming.

### Palindrome test
Write a program that checks whether or not an array is a palindrome.

**Sample input 1**

{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1}

**Sample output 1**

This array is NOT a palindrome!

**Sample input 2**

{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1}

**Sample output 2**

This array is a PALINDROME!

main.cs

C#

```
class Test
{
    static void Main()
    {
      // For sample input 1
      int u[] = {1,2,3,4,5,6,7,8,9,10,11,12,21,11,10,9,8,7,6,5,4,3,2,1};
      // Write your code here
      
      //For sample input 2
      int v[] = {1,2,3,4,5,6,7,8,9,10,11,12,11,10,9,8,7,6,5,4,3,2,1};
      // Write your code here
    } 
}
```

Mentor

Check whether or not the arrays are palindromes

Show Solution

### Sort an array
**Sorting** is a technique to arrange the list of items into a particular order.

Write a program to sort the array values in ascending order. An array with integer values in it has been provided and has to be sorted in the order such that the smallest element is at the start of the array and the greatest element is at the end.

**Sample input**

{5, 2, 7, 9, 1}

**Sample output**

The sorted array is: 

1  2  5  7  9

main.cs

C#

```
using System;
class Test
{
    static void Main()
    {
      int array1[] = {5,2,7,9,1};
      // Write your code here
    }
}
```

Mentor

Sort the array in ascending order

Show Solution

### Fibonacci sequence
Write a program to check if an array contains the terms of the Fibonacci sequence. The length of the array is restricted to only 20 elements.

**Sample input 1**

{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 60, 987, 1597, 2584, 4181}

**Sample output 1**

It's not a Fibonacci sequence due to the value 60 at index 15.

**Sample input 2**

{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181}

**Sample output 2**

Hurrah ... we've got a Fibonacci sequence.

main.cs

C#

```
class Test
{
    static void Main()
    {
        int[] fib = {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181};
        // Write your code here
    }
}
```

Mentor

Find the Fibonacci sequence terms in an array

Show Solution