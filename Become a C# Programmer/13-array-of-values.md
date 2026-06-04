# Array of Values
Learn and practice manipulating an array of values in C#.
What is an array?

## What is an array?
In C#, an **array** is a collection of the same type of values stored as a single variable. It is generally a comma-separated list of values enclosed in curly brackets. An array can be stored as a single variable. For example, `{10, 20, 30}` is an array of integers. It can be stored as a variable, as shown in the code below:

The following program demonstrates how to create an array of integer values:

main.cs

C#

```
class Test
{
    static void Main()
    {
        int[] arr = {10, 20, 30};
        System.Console.WriteLine("The array is defined of type " + arr);
    }
}
```

Mentor

Declare an array

In the code above:

*   We declare a variable, `arr`, to assign `{10, 20, 30}`. These comma-separated values enclosed in curly brackets are called an **initialization array**.
*   We call the variable, `arr`, an array, as indicated by `[]`, before the variable name. These brackets are used to _explicitly_ mention that the variable is an array. Here, the size 3 is determined by the number of values in the initialization array.

## Accessing individual values
The individual values in an array are accessed through an index. An **index** is an integer representing the position of an individual value in the array. We enclose the index in square brackets after the array variable name. The first value is at the index `0`, and the index moves forward in the array by linear increments. If there are three values in the array, they are indexed at 0,1,0, 1,0,1, and 222.

main.cs

C#

```
class Test
{
    static void Main()
    {
        int[] a = {-5, 7, 3};

        System.Console.WriteLine("The value at index 0: " + a[0]);
        System.Console.WriteLine("The value at index 1: " + a[1]);
        System.Console.WriteLine("The value at index 2: " + a[2]);
    }
}
```

Mentor

Display array items

In the code above:

*   **Line 5:** We declare an array that consists of three elements.
*   **Line 7–9:** We access the first, second, and third values of the array through the index `[0]`, `[1]`, and `[2]` respectively.

The following program demonstrates the various types of arrays in C#:

main.cs

C#

class Test

{

    static void Main()

    {

      int\[\] int\_array = {1, 2, 3};

      System.Console.WriteLine("Integer Array: ");

      System.Console.WriteLine(int\_array\[0\] + " " + int\_array\[1\] + " " + int\_array\[2\]);

      double\[\] double\_array = {1.5, 2.3, 3.8};

      System.Console.WriteLine("Double Array: ");

      System.Console.WriteLine(double\_array\[0\] + " " + double\_array\[1\] + " " + double\_array\[2\]);

      string\[\] string\_array = {"C#", "11.5e", "2023"};

      System.Console.WriteLine("String Array: ");

      System.Console.WriteLine(string\_array\[0\] + " " + string\_array\[1\] + " " + string\_array\[2\]);

    }

}

Mentor

Multiple types of arrays

The following figure illustrates the forward (non-negative) index values used in the code above. The index 000 stores the string `C#`. In the same manner, the indexes 222 and 333 store strings in `string_array`, as illustrated in the figure below:

Array values with indexes

## Strings and character arrays
We can use character arrays directly to store the comma-separated list of character values. We can also convert a `string` value or variable to a character array. These points are demonstrated in the following code:

main.cs

C#

class Test

{

  static void Main()

  {

    char\[\] chArr = {'a', 'b', 'c', 'd'};

    System.Console.WriteLine(chArr);

    char\[\] ch = "comprehensibility".ToCharArray();

    System.Console.WriteLine(ch);

    for (int i = 0 ; i < ch.Length ; i++)

    {

      System.Console.Write(ch\[i\] + " ");

    }

  }

}

Mentor

Strings as character arrays

In the code above:

*   **Line 5:** We declare a character array, `{a, b, c, d}`.
*   **Line 6:** We display a character array.
*   **Line 8:** We convert a string, `comprehensibility`, to a character array using `.ToCharArray()`, and then assign it to the character array, `ch`.
*   **Line 11–14:** We access and display every character value through a loop with the help of `.Length`, which gives the array size.

## Practice for array manipulation
Here are a few example programs to practice using arrays in C#. There are built-in operations for some tasks mentioned below. However, it’s good practice to write them from scratch.

By clicking the “Show Solution” button, you can find a program that solves the respective problem. You can copy and paste the given solution into the code widget to make sure the output of your solution matches the given solution. There can be several ways of writing correct solutions in programming.

### Sum of array elements
Write a program that shows the sum of elements in an array.

**Sample input**

{10, 20, 30, 40, 50}

**Sample output**

main.cs

C#

class Test

{

    static void Main()

    {

        int\[\] a = {10, 20, 30, 40, 50};

        // Write your code here

    }

}

Mentor

Calculate the sum of the array elements

Show Solution

### The sum of adjacent values
Write a program that displays the sum of every two adjacent values in an array. The sums are stored back into the array and then displayed.

**Sample input**

{10, 20, 30, 40, 50}

**Sample output**

30, 50, 70, 90, 50

main.cs

C#

class Test

{

    static void Main()

    {

        int\[\] v = {10, 20, 30, 40, 50};

        // Write your code here

    }

}

Mentor

Calculate the sum of the two adjacent elements in the array

Show Solution

### Construct a decimal number
Write a program that converts an array of single-digit values into a single decimal number. The length of the array is restricted to five values.

**Sample input**

{1, 2, 3, 4, 5}

**Sample output**

main.cs

C#

class Test

{

    static void Main()

    {

        int\[\] v= {1, 2, 3, 4, 5};

        // Write your code here

    }

}

Mentor

Convert an array of single-digit values into a single number

Show Solution

### Palindrome test
Write a program that checks if an array is a palindrome. The length of the array is restricted to five elements.

**Sample input 1**

{"ab", "cd", "ef", "cd", "ab"}

**Sample output 1**

The array is a palindrome

**Sample input 2**

{"a", "c", "e", "d", "a"}

**Sample output 2**

The array is NOT a palindrome

main.cs

C#

class Test

{

    static void Main()

    {

      // For the sample array {"ab","cd","ef","cd","ab"}

        string\[\] u={"ab", "cd", "ef", "cd", "ab"};

        if ( (u\[0\] == u\[4\]) && (u\[1\] == u\[3\]))

        {

            System.Console.WriteLine("The array is a palindrome");

        }

        else

        {

            System.Console.WriteLine("The array is NOT a palindrome");

        }

        // For the sample array {1,2,3,3,1}

        // Write your code here

    }

}

Mentor

Check whether or not an array is a palindrome

Show Solution

### Reverse an array
Write a program that reverses the order of elements in an array. The length of the array is restricted to eight values.

**Sample input**

{'a', 'e', 'i', 'o', 'u', 'w', 'h', 'y'}

**Sample output**

Original array: a e i o u w h y

Reversed array: y h w u o i e a

main.cs

C#

class Test

{

    static void Main()

    {

        char\[\] v={'a', 'e', 'i', 'o', 'u', 'w', 'h', 'y'};

        // Write your code here

    }

}

Mentor

Reverse an array

Show Solution