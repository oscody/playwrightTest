# First C# Program
Learn to create and execute the first C# program.

## Hello World
It’s time to write our first program in C#, which will simply display the message `“Hello World!”` on the screen.

This is the code widget that we’ll use to write our C# code. We may execute our C# program by clicking the “Run” button at the bottom of the widget:

main.cs

C#

```
// First C# program to display Hello World
class Test
{
    static void Main()
    {
        System.Console.WriteLine("Hello World!");
    }
}
```

Mentor

The Hello World program in C#

> **Note:** We can add non-executable text in a C# program by adding a double backslash sign (`//`) at the start of the text. This type of text is called a **comment**. We use comments to include descriptions in the program.

**Explanation**

*   **Line 1:** This type of text is called a **comment** because it starts with `//` (a double slash). It is only for the readers of this program. We use comments to include descriptions in the program.
*   **Line 2–3:** These are used as a requirement by the language. It is the start of the first block of code. Every starting brace `{` has a corresponding closing brace `}`, as seen in **line 8**. We will be using these lines as is in almost every C# program.
*   **Line 4–5:** These are the start of the executable part of the program. Every executable C# program has a `Main()` that serves as its entry/starting point. The starting brace `{` indicates the start of the second block of code. See the corresponding closing brace `}` in **line 7**.
*   **Line 6:** This is the only line that causes the program to give an output. It corresponds to the purpose of the whole program. Every other line is in support of **line 6**. We use `System.Console.` before `WriteLine` as a requirement by the language.
*   **Line 7:** This is the end of the main block of code. It corresponds to the opening brace in **line 5**.
*   **Line 8:** This is the end of the first block of code. It corresponds to the opening brace in **line 3**.

## New line in the output
There are different ways of giving a line break in the output, as demonstrated in the following code. For a better understanding, you can take the AI mentor’s help.

main.cs

C#

```
class Test
{
    static void Main()
    {
        System.Console.Write("Single"); // The next output will be on the same line 
        System.Console.Write("Line\n");  // The next output will be on the next line due to new line symbol \n 
        System.Console.Write("Separate new line" + "\n"); // The new line symbol can be written separately
        System.Console.WriteLine("Use of println for new line"); // The WriteLine adds a line break at the end
        System.Console.Write("It demonstrates the line break"); // This line is shown on a new line
    }
}
```

Mentor

Different ways of giving a line break

**Explanation**

*   **Lines 5–6:** The text of these lines is on the same line in the output. The `\n` symbol, termed as a new line character, causes the line break.
*   **Line 7:** It shows the use of `\n` as a separate text.
*   **Line 8:** It illustrates the use of `WriteLine` for giving a line break in the output, as demonstrated from the output of **line 9**.

## Personalize messages with a variable
Let’s write another C# program that inputs the name of the user before displaying a greeting message. We use the `yourName` variable to store the input given by the user in C#.

> A **variable name** can only contain letters (`A`–`Z` and `a`–`z`) and the underscore symbol (`_`). It may also contain digits (`0`–`9`), but the variable name can’t start with those. For example, `Key_2` is a valid variable name but `2_key` is not. Variable names are case-sensitive, meaning that `name`, `Name`, and `NAME` are three different variables.

In C#, we use **`ReadLine()`** for **input** (to read a value from the user), and **`WriteLine()`** for **print** (to display a value on the screen as output).

The `Program.cs` in the left pane of the following widget is the name of the program file. The `.cs` indicates that it’s a C# program. When we press the “Run” button to execute the program, it shows a black screen called the **terminal**, where we can input values and see the resulting output:

Program.cs

```
class Test
{
    static void Main()
    {
        System.Console.WriteLine("Enter your name: ");
        string yourName = System.Console.ReadLine();
        System.Console.WriteLine("Hello " + yourName);
        System.Console.WriteLine("Welcome to Educative");
    }
}
```

Mentor

Mentor

Take and display the input of name (variable)

The word `exit` at the end of the output indicates the completion of the program in the terminal.

The code above displays the message `"Hello "` before the value of the `yourName` variable on the first line. The space after `Hello` is part of the label to keep a space before the value of `name` in the output. Then, it displays `“Welcome to Educative”` on the second line.

## C# programming practice
Let’s practice writing the first C# program that takes multiple inputs from the user.

### Tell a story
Let’s write a program that tells a story with information given by the user. The program should ask the user to enter their name, age, city, college, profession, and pet’s name.

We’ll need to provide user input in the box labeled “Enter the input below.” Therefore, when the solution is ready for execution, we can test it by providing the following information line by line in the input box on behalf of the user.

*   User’s name
*   User’s age
*   User’s city
*   User’s college
*   User’s profession
*   User’s pet’s name

Once we are done writing the program, we can execute by clicking the “Run” button. The program should display the prompts to enter an input on the terminal, and we can enter the required input. Remember to store the input and print it using `Write`/`WriteLine`, where required. The program should display the following story, inserting the user’s input into the appropriate locations in the following text:

There once was a person named NAME who lived in CITY. At the age of AGE, NAME went to college at COLLEGE. NAME graduated and went to work as a PROFESSION. Then, NAME adopted an animal named PETNAME. They both lived happily ever after!

Program.cs

```
class Test
{
    static void Main()
    {
        //Write your code here
    }
}
```

Mentor

Mentor

Taking and displaying multiple inputs

Show Solution
Mark As 
Complete
Fundamentals of C#