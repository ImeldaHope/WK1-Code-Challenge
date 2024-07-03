//Generate student grade based on the grading scale provided.
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function studentGrades(score = 67){
    //Variable declaration for later re-assignment within the switch statement.
    let grade;

    //Switch statement handling grades on case by case basis
    switch (true) {        
        case score > 70:
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
        default:
            grade = 'E';
            break;
    }
    //console.log(`The student\'s grade is ${grade} `)
    return grade;    
}

studentGrades();