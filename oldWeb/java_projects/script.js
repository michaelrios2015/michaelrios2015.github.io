var projects = [{
        name: "Project 1: Class Average",
        link: "https://github.com/michaelrios2015/Grades-project-1",
        description: "Write a Java program for the following problem. You are given a collection of scores (type int) for the last exam in your computer course. You are to compute the average of these scores and assign grades(O,S,U) to each student according to the following rules."
    },
    {
        name: "Project 2: Bank Accounts",
        link: "https://github.com/michaelrios2015/Java-project-2",
        description: "This is an excercise in the techniques of inheritance and polymorphism:" +
                        "<br> A bank has account owners, each of them may have one or more bank accounts, such as savings accounts, checking accounts, and business accounts. Each account has the following information stored as private data: such as name, account_number, and balance. At the end of each month, the bank issues a statement for each bank account containing the following information: name, SSN, account_number, phone_number, open balance, and close balance. The close balance is the open balance plus the interest calculated based on the type of the account."
    },
    {
        name: "Project 3: Big - O",
        link: "https://github.com/michaelrios2015/Big-O-Project-3/tree/master",
        description: "This was a homework assignement designed to show the dangers of exponential growth in running times, or to put in in simpler terms the dangers of nested for loops."
    },
    {
        name: "Project 4: Text Editor",
        link: "https://github.com/michaelrios2015/Text-Editor-Project-4",
        description: "Write a program in Java that simulates a simple line editor which supports the following operations:" +
                                "<br> <b>$insert:</b> Each subsequent line, up to the next line editor command, will be inserted in the text. If there is a designated current line, each line is inserted before that current line. Otherwise each line is inserted at the end of the text" +
                                "<br> <b>$delete m n:</b> Each line in text between lines m and n inclusively will be deleted" +
                                "<br> <b>$print m n:</b> Display the lines m and n inclusively along with their line numbers. If the parameters m and n are missing, print the entire text" +
                                "<br> <b>$line m:</b> Line m becomes the current line. The program should display up to 3 lines of text along with their line numbers before and after the current line depending on whether there is enough text in the linked list" +
                                "<br> <b>$search:</b> string Search for the string in the text. If found, display the line that contains the first occurrence of the string" +
                                "<br> <b>$done:</b> Terminates the execution"
    },
    {
        name: "Project 5: Trees",
        link: "https://github.com/michaelrios2015/Trees-project-5-java",
        description: "<ol>" +
						"<li>Function Build: read a sequence of integers and construct a binary search tree.</li>" +
						"<li>Function Inorder: based on the BST tree built, conduct the \"INORDER\" traversal and print the value of each node when visited.</li>" +
						"<li>Function Postorder: based on the BST tree built, conduct the \"POSTORDER\" traversal and print the value of each node when visited.</li>" +
						"<li>Function Count: write a function that counts the number of leaf nodes in the tree and return the count. Do not use unnecessary local variables and parameters.</li>" +
						"<li>Function Swap: swap the left and right children(subtree) recursively of every node of the given tree. </li>" +
						"<li>Function Compare: return TRUE if the two given trees are identical.</li>" +
						"<li>Using appropriate messages to explain each output described above.</li>" +
                        "</ol>"
    },
    {
        name: "Project 6: Map",
        link: "https://github.com/michaelrios2015/Map-Project-6",
        description: "You are to write a Java program that constructs a map of the United States excluding Hawaii and Alaska. According to the theory of Four Colors, you only need to use four colors to mark adjacent states with different colors. Use the breadth first traversal and depth first traversal to visit each state, displaying its name along with its color assigned."
    },
    {
        name: "Project 7: Poker",
        link: "https://github.com/michaelrios2015/Poker",
        description: "Repeat the following process 10 times Deals out 9 hands of five cards each using a random number generator; Prints the contents of each hand and its \"poker value\"; Prints the \"winning\" hand(s) - (the hand(s) with the highest poker rank)"
    }
];


console.log("JELLO!!");




displayProjects(projects);

console.log(projects);