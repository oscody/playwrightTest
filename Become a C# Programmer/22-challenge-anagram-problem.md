# Challenge: Anagram Problem
Check whether two strings are anagrams of each other.

## Task
Write a function that accepts two strings as parameters and checks whether these strings are anagrams of each other. An **anagram** is a text formed by rearranging the letters of another piece of text.

The strings should _not_ be case-sensitive, meaning that `Cats` and `AcTs` are anagrams.

The function should return `1` when the strings are anagrams and `-1` otherwise.

* * *

### Sample input 1
str1 \= silent

str2 \= Listen

### The resulting return value 1

### Expected output 1
The strings are anagrams.

* * *

### Sample input 2
str1 \= accept

str2 \= expect

### The resulting return value 2
\-1

### Expected output 2
The strings are not anagrams.

* * *

### How to test your program
When you click on the “Test” button of the code widget, you get two options, as explained below:

*   **Show Results:** It shows the sample inputs and their respective results in comparison with the expected output. The actual output is the calculated return value after comparing the strings to display the results. The word “Succeeded” in the last column indicates that the calculated output matches the expected output. For example, if `str1` and `str2` are `silent` and `Listen`, respectively, and the return value of the function is `1`, then the last column shows “Succeeded”. Similarly, if `str1` and `str2` are `accept` and `expect`, respectively, and the return value of the function is `-1`, then the last column again shows “Succeeded”.
    
*   **Show Console:** It shows the output from the `print` statements used in your code. You may use this to verify your calculations on the basis of sample test inputs. For example, if `str1` and `str2` are `silent` and `Listen`, respectively, then the output on the console should be `The strings are anagrams.`. Similarly, if `str1` and `str2` are `accept` and `expect`, respectively, then the output on the console should be `The strings are not anagrams.`.
    

main.cs

C#

class Solution

{

    public static int CheckAnagram(string str1, string str2)

    {

      int num = 0;

      // Write your code here

      return num;

    }

}

Mentor

Test

Need Hint?

Show Solution

Save

Reset

Check whether the two strings are anagrams