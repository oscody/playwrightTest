# Inside the String
Learn to access the individual elements of a string.

## Collection
A **collection** is a general term used to group multiple values into a single unit. We use collections all the time in the real world―a book is a collection of pages, a train is a collection of train cars, and a wardrobe is a collection of clothes.

## String
A **string** is a collection of characters, mostly treated as a single unit. A string is used to store text values like a name, address, message, etc.

### Initializing the string
The following program demonstrates the initialization of a string:

main.cs

C#

```
class Test
{
    static void Main()
    {
        string string1 = "It is a string";
        System.Console.WriteLine(string1);
    }
}
```

Mentor

Initialize the string

In **line 5**, we declare a `string` using double quotes `""`.

### Accessing the characters in a string
C# allows us to access individual characters inside a string through an integer **index** number. To do this, we enclose the index number in square brackets after the string variable name, as shown in the following program:

main.cs

C#

```
class Test
{
    static void Main()
    {
        string String1 = "Educative";
        System.Console.WriteLine(String1);

        System.Console.WriteLine(String1[0]);
        System.Console.WriteLine(String1[1]);
        System.Console.WriteLine(String1[2]);
        System.Console.WriteLine(String1[3]);
        System.Console.WriteLine(String1[4]);
        System.Console.WriteLine(String1[5]);
```

Mentor

Access individual characters in a string

The code above displays the individual characters of a string on separate lines, one by one. The first character is at the `0` index, and the index moves forward along the string in linear increments, as illustrated in the following figure:

String values with indexes

The same program can be rewritten using loops, as demonstrated below, to perform the same task:

main.cs

C#

```
class Test
{
    static void Main()
    {
        string String1 = "Educative";
        int length = 9;
        for (int i = 0; i < length; i++)
        {
            System.Console.WriteLine(String1[i]);
        }
    }
}
```

Mentor

Access individual characters in a string using a for loop

### Concatenation
Joining two strings with the help of the `+` operator is called **concatenation**, as illustrated in the following code:

main.cs

C#

```
class Test
{
    static void Main()
    {
        string str1 = "Hello";
        string str2 = "Educative";
        string str3 = str1 + str2;
        string str4 = str1 + " " + str2;

        System.Console.WriteLine("str1: " + str1);
        System.Console.WriteLine("str2: " + str2);
        System.Console.WriteLine("str3: " + str3); // Concatenated without space
        System.Console.WriteLine("str4: " + str4); // Concatenated with space
```

Mentor

String concatenation

In the code above:

*   **Line 7:** We concatenate `str1` and `str2` and store the result in `str3`. It has joined the two words without a space.
*   **Line 8:** We concatenate `str1`, `" "`, and `str2` and store the result in `str4`. It has joined the two words with a space.

## Practice for string manipulation
Here are a few example programs to practice using strings in C#. Clicking the “Show Solution” button will display a program that solves the respective problem. You can copy and paste the given solution into the code widget to make sure the output of your solution matches the given solution. There can be several ways of writing correct solutions in programming.

### Print the characters backward
Write a program that displays the characters of a string backward, line by line.

**Sample input**

"Educative"

**Sample output**

e

v

i

t

a

c

u

d

E

main.cs

C#

```
class Test
{
    static void Main()
    {
        string String1 = "Educative";
        // Write your code here
    }
}
```

Mentor

Characters of a string shown backward

Show Solution

### Left shift the characters in a string
Write a program that shifts the characters of a string to the left and replaces the last position with a dot.

**Sample input**

myString = "Educative"

**Sample output**

ducative.

Show Hint

main.cs

C#

```
using System;
class Test
{
    static void Main()
    {
        string str1 = "Educative";
        // Write your code here
    }
}
```

Mentor

Shift characters to the left

Show Solution

### Reverse the string
Write a program that stores the string into another string in reverse order.

**Sample input**

"Educative"

**Sample output**

evitacudE

main.cs

C#

```
class Test
{
    static void Main()
    {
        string str1 = "Educative";
        // Write your code here
    }
}
```

Mentor

Reverse the string

Show Solution

### Palindrome test
A **palindrome** is a sequence of characters that reads the same backward and forward. Write a program that checks if a string is a palindrome. The length of the string is restricted to five characters.

**Sample input 1**

"level"

**Sample output 1**

Palindrome

**Sample input 2**

"leve"

**Sample output 2**

Not Palindrome

main.cs

C#

```
class Test
{
    static void Main()
    {
        string str = "level";
        // Write your code here
    }
}
```

Mentor

Check whether or not a string is a palindrome

Show Solution