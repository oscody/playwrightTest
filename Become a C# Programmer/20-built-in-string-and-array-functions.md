# Built-in String and Array Functions
Learn to use popular built-in functions related to strings and arrays in C#.

## Built-in functions for strings
C# provides various built-in functions for dealing with strings. These functions are collectively called **string methods**.

> **Note:** All string methods return a new string without changing the original one.

There are numerous tasks related to strings that make it easy for programmers to perform routine tasks. This section will provide examples and results of some commonly used string methods.

### The methods related to case change
These methods change the letter case of the text stored in a string (say, from lowercase to uppercase). Let’s use an example program to explore case changes.

*   The `ToLower()` method converts _all_ characters in a string to lowercase.
*   The `ToUpper()` method converts _all_ characters in a string to uppercase.

main.cs

C#

```
class Test
{
    static void Main()
    {
        System.Console.WriteLine("EDUCATIVE".ToLower());
        System.Console.WriteLine("educative".ToUpper());
    }
}
```

Mentor

Functions related to case change

### The search-related functions
These functions search for the occurrence of text in a string. Let’s use an example program to explore searches.

*   The `Compare()` compares two strings and return 000 if both strings are equal.
    
*   The `EndsWith()` checks whether the specified character is the last character of the string or not and returns `True` or `False`.
    
*   The `Contains()` searches for character or a substring in the string and returns `True` or `False`.
    
*   The `Replace()` searches for _all_ occurrences of a text in the string, replaces it with different text, and returns the new string after replacement.
    
*   The `IndexOf()` returns the position of the first occurrence of the specified character in the string.
    
*   The `StartsWith()` checks for text at the _start_ of a string and returns `True` or `False`.
    

main.cs

C#

class Test

{

    static void Main()

    {

        string s1 = "educative";

        string s2 = "educative";

        System.Console.WriteLine(string.Compare(s1, s2));

        System.Console.WriteLine(s1.EndsWith("ve"));

        System.Console.WriteLine(s1.Contains("e"));

        System.Console.WriteLine(s1.Replace("e", "..E.."));

        System.Console.WriteLine(s1.IndexOf("e"));

        System.Console.WriteLine(s1.StartsWith("edu"));

    }

}

Mentor

Search-related functions on strings

## Built-in functions for arrays
C# provides various built-in functions for dealing with arrays, usually termed **array methods**, which programmers use to perform routine tasks. Let’s use practice programs to learn these built-in functions related to arrays.

### The value-inserting methods
The following methods are used to add values to arrays:

*   The `SetValue()` sets the value at the specified index of the array. It takes two parameters as input. One is the value, and the second is the index at which the value to be set.
    
*   The `Array.Copy()` copies all the array elements to another array. It takes three parameters as input. One is the source array, second is the destination array, and the third is the length of the array.
    

main.cs

C#

class Test

{

    static void Main()

    {

        int\[\] a = {1, 2, 3};

        int\[\] b = {0, 0, 0};

        a.SetValue(9, 2);

        System.Console.WriteLine("After setting the value array is: ");

        for (int i = 0; i < a.Length; i++)

        {

            System.Console.Write(a\[i\] + " ");

        }

        System.Array.Copy(a, b, a.Length);

        System.Console.WriteLine("\\nCreating a new copy of array a in array b: ");

        for (int i = 0; i < a.Length; i++)

        {

            System.Console.Write(a\[i\] + " ");

        }   

        System.Console.Write("\\n");

        for (int i = 0; i < b.Length; i++)

        {

            System.Console.Write(b\[i\] + " ");

        }

    }

}

Mentor

The value-inserting methods

### The array manipulation methods
The following methods are used to remove values from lists:

*   The `Array.Clear()` removes all the elements from the array. It takes three parameters as input. One is the array, second is the starting index of the range of elements to clear, and the third is the number of elements to clear.

main.cs

C#

class Test

{

    static void Main()

    {

        int\[\] a = {1, 2, 3};

        System.Console.WriteLine("Before");

        for (int i = 0; i < a.Length; i++)

        {

            System.Console.Write(a\[i\] + " ");

        }

        System.Array.Clear(a, 0, a.Length);

        System.Console.WriteLine("\\nAfter");

        for (int i = 0; i < a.Length; i++)

        {

            System.Console.Write(a\[i\] + " ");

        }

    }

}

Mentor

The value-removing function

### Search related methods
The following methods are the basic method to access an elements:

*   The `Array.IndexOf()` returns the index position of the first occurrence of the element. It takes two parameters as input, one is array, and the second is the value to be searched.
*   The `Array.LastIndexOf()` returns the index position of the last occurrence of the element. It takes two parameters as input, one is array, and the second is the value to be searched.

main.cs

C#

class Test

{

    static void Main()

    {

        int\[\] a = {1, 2, 3 , 4, 3, 2, 1};

        System.Console.WriteLine("First occurrence of 2: " + System.Array.IndexOf(a, 2));

        System.Console.WriteLine("Last occurrence of 2: " + System.Array.LastIndexOf(a, 2));

    }

}

Mentor

Search related array methods

### The arrangement-related methods
The following functions are used to change the arrangement of values in arrays:

*   The `Array.Reverse()` reverses the order of the array.
*   The `Array.Sort()` sorts the array in ascending order.

main.cs

C#

class Test

{

    static void Main()

    {

        int\[\] s = {1, 1, 30, 40, 0, 4, 40, 5};

        System.Console.Write("Original Array: ");

        for (int i = 0; i < s.Length; i++)

        {

            System.Console.Write(s\[i\] + " ");

        }

        System.Console.Write("\\n");

        System.Array.Reverse(s);

        System.Console.Write("Reversed Array: ");

        for (int i = 0; i < s.Length; i++)

        {

            System.Console.Write(s\[i\] + " ");

        }

        System.Console.Write("\\n");

        System.Array.Sort(s);

        System.Console.Write("Sorted Array: ");

        for (int i = 0; i < s.Length; i++)

        {

            System.Console.Write(s\[i\] + " ");

        }

        string s1 = "zigZAG";

        System.Console.Write("\\nOriginal string: " + s1);

        char\[\] characters = s1.ToCharArray();

        System.Array.Sort(characters);

        System.Console.Write("\\nSorted string: ");

        System.Console.Write(characters);

    }

}

Mentor

The arrangement-related functions

In the program above:

*   We first create an array of integers.
*   An array passes to the `Array.Reverse()` function.
*   Each element of the array displays in reverse order in the body of the loop.
*   Then we call the `Array.Sort()` function by passing an array.
*   Then we create a string with a combination of lowercase and uppercase letters.
*   Convert the given string to a character array using the `ToCharArray()` method.
*   We call the `Array.Sort()` function on the character array, which returns an array of alphabetical symbols in ascending order based on their ASCII codes.

The ASCII codes of capital A–ZA–ZA–Z are 65–9065–9065–90, respectively. The ASCII codes of lowercase a–za–za–z are 97–12297–12297–122, respectively. Therefore, the capital letters are listed before lowercase letters. Thus, uppercase ZZZ is smaller than lowercase aaa based on their ASCII codes.