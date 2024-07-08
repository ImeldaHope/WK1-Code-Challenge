//Generate student grade based on the grading scale provided.
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

//Importing readline module for command line input
const readline = require('readline');

//Creates readline interface to read from command line
const gradeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Prompting user input:
gradeInput.question('Please enter your score in numbers: ',(inputScore) => {
 
    const grades = parseFloat(inputScore);

    function studentGrades(score = 67){
        let grade;
        //Switch statement handling grades on case by case basis
        switch (true) {        
            case score > 70 && score <= 100:
                grade = 'A';
                break;
            case score >=60 && score <= 79:
                grade = 'B';
                break;
            case score >= 49 && score <= 59:
                grade = 'C';
                break;
            case score >= 40 && score < 49:
                grade = 'D';
                break;
            case score >= 0 && score < 40:
                grade = 'E';
                break;        
            default:
                grade = `${grades} which is not a valid score`;
                break;
        }
        console.log(`The student\'s grade is ${grade} `)
        return grade;    
    }

    studentGrades(grades);

gradeInput.close();          
}) 