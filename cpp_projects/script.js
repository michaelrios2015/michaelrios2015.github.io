var projects = [{
        name: 'Project 1: Net Pay',
        link: 'https://github.com/michaelrios2015/Net-Pay-Project-1',
        description: '<p>Write a C++ program that calculates and prints the monthly paycheck for an employee. The net pay is calculated after taking the following deductions: <ul><li>Federal' 
				+ 'income tax = 15% </li>'
				+ '<li>State income tax = 5% </li>'
				+ '<li>Social security tax = 5% </li>'
				+ '<li>Medicare/Medicaid = 3% </li>'
				+ '<li>Pension plan = 8% </li>'
				+ '<li>Health insurance = $125.00</li>' 
				+ '</ul>'
				+ 'Your program should ask the user to input the employee ID, and the earnings (gross amount) for current month. The output should be the net pay, after deductions. Format the output to have 2 decimal places.</p>'
    },
    {
        name: "Project 2: Investment",
        link: 'https://github.com/michaelrios2015/Investment-Value-Project-2',
        description: '<p>Write a <b>function*</b> that computes future investment value at a given interest rate for a specified number of years. The future investment is determined using the following formula: <br>'
				+ '<li><b>Accumulative Value = investmentAmount * (1 + MonthlyInterestRate) NumberofYears*12</b></li>' 
				+ '<br>For example, if you enter amount 1000, annual interest rate 3.25%, and number of years 1, the future investment value is 1032.98.' 
				+ '<br>*This assignement was designed to introduce to creating seperate functions to be called by the main program</p>'
    },
    {
        name: "Project 3: Feet to Meters",
        link: "https://github.com/michaelrios2015/Feet-to-Meters",
        description: '<p>Write a C++ program that reads in a length in feet and inches and outputs the equivalent length in meters and centimeters.' 
				+ '<br> Use at least three functions:' 
				+ '<ol>'
				+ '<li>One function for input with two variable parameters </li>' 
				+ '<li>One value-returning function for calculation that has two parameters (feet and inches) that return the length in meters and centimeters (one value)</li>' 
				+ '<li>One function for output. </li>'
				+ '</ol>'
				+ 'This assignement is designed to be a continuation of the last with the emphasis on creating functions.'
				+ '</p>'
    },
    {
        name: 'Project 4: Employee Records',
        link: 'https://github.com/michaelrios2015/Employee-Records-Project-4',
        description: '<p> The purpose of this assignment is to review how to use the <b>Switch statement</b> and functions with parameters.' 
					+ 'At Bob\'s Bank, Bob senior would like to keep some information on his employees readily available.' 
					+ 'Bob junior suggested he keep the data on the computer so that it would be available anytime someone ran a program.' 
					+ 'As the sole computer programmer you are to write a program which will read in the employee data and print a report.' 
				+ '</p>'
    },
    {
        name: "Project 5: Hang Man",
        link: 'https://github.com/michaelrios2015/Hangman-Project-5',
        description: '<p>Write a program that plays the game of HANGMAN(guessing a mystery word).' 
			+ 'Read a word to be guessed from a file into successive elements of the array WORD.' 
			+ 'The player must guess the letters belonging to WORD. A single guessing session should be terminated when either all letters have been guessed correctly' 
			+ '(player wins) or a specified number of incorrect guesses have been made (computer wins).' 
			+ 'A run must consist of at least two sessions: one player wins and one computer wins. The player decides whether or not to start a new session.</p>'
          
    },
    {
        name: "Project 6: Black Jack",
        link: 'https://github.com/michaelrios2015/Black-Jack-Extra-Credit',
        description: '<p>Write a program that simulates a simplified version of the game "BlackJack".' 
		 + 'A deck of cards numbered 2 to 10, jacks, queens, kings, and aces is used, where jacks, queens and kings are counted as 10s, and aces are either 1 or 11 at your choice.'
         + 'Any number can be repeated since the deck contains many cards. The computer starts by giving you two cards and shows you one of its cards, all of which are randomly picked.'
		 + 'Then the computer asks you whether or not to want another card. This process stops when you say "no", or the total of your cards exceeds 21, in which case you automatically lose.'
		 + 'If your value is under or equal to 21 and you decide to stay, the computer deals its cards until its total is greater than or equal to 17. If the computer\'s total is greater than 21,'
		 + 'you win by default. The winner is the one with the highest score equal to or less than 21.</p>'
    }
];
        


console.log("JELLO!!");




displayProjects(projects);

console.log(projects);