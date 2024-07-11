//Calculate net salary    

//Declares array of objects for tax brackets
const taxRates = [
    {lowerLimit: 0, upperLimit: 24000, rate: 10.0},
    {lowerLimit: 24001,upperLimit: 32333,rate: 25.0},
    {lowerLimit: 32334,upperLimit: 500000,rate: 30.0},
    {lowerLimit: 500001,upperLimit: 800000,rate: 32.5},
    {lowerLimit: 800001,upperLimit: Infinity,rate: 35.0}
];

//Declares array of objects for national health insurance
const nhifRates = [
    { lowerLimit: 0, upperLimit: 5999, deduction: 150 },
    { lowerLimit: 6000, upperLimit: 7999, deduction: 300 },
    { lowerLimit: 8000, upperLimit: 11999, deduction: 400 },
    { lowerLimit: 12000, upperLimit: 14999, deduction: 500 },
    { lowerLimit: 15000, upperLimit: 19999, deduction: 600 },
    { lowerLimit: 20000, upperLimit: 24999, deduction: 750 },
    { lowerLimit: 25000, upperLimit: 29999, deduction: 850 },
    { lowerLimit: 30000, upperLimit: 34999, deduction: 900 },
    { lowerLimit: 35000, upperLimit: 39999, deduction: 950 },
    { lowerLimit: 40000, upperLimit: 44999, deduction: 1000 },
    { lowerLimit: 45000, upperLimit: 49999, deduction: 1100 },
    { lowerLimit: 50000, upperLimit: 59999, deduction: 1200 },
    { lowerLimit: 60000, upperLimit: 69999, deduction: 1300 },
    { lowerLimit: 70000, upperLimit: 79999, deduction: 1400 },
    { lowerLimit: 80000, upperLimit: 89999, deduction: 1500 },
    { lowerLimit: 90000, upperLimit: 99999, deduction: 1600 },
    { lowerLimit: 100000, upperLimit: Infinity, deduction: 1700 }
];

//Declares array of objects for pension fund
const nssfRates = [
    { tier: "I", lowerLimit: 0, upperLimit: 7000, rate: 6 },
    { tier: "II", lowerLimit: 7001, upperLimit: 36000, rate: 6 }
]

//Declares array of objects for reliefs applied on tax calculations
const reliefs = [    
    { "Personal Relief": 2400 },
    { "Insurance Relief": 5000 },
    { "Allowable Pension Fund Contribution": 20000 },
    { "Allowable HOSP Contribution": 0 },
    { "Affordable Housing Relief": 9000 },
    { "Allowable Owner Occupier Interest": 25000 },
    { "Disability Exemption": 150000 }
];

//Importing readline module for command line input
const readline = require('readline');

//Creates readline interface to read from command line
const salaryInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Prompting user input:
salaryInput.question('Please enter your basic salary amount in numbers: ',(basicSalary) => {
 
    const salary = parseFloat(basicSalary);

    //Taxable income calculations after deducting NHIF, NSSF and Housing levy
    const payableTax = salary - pension(salary) - housing(salary) -health(salary);

    //Calculate net salary. Net = Taxable income - (PAYE + housing) 

    function netSalary(){
        const net = payableTax - paye(salary,taxRates);
        console.log(`Your net salary is: ${net}`);
        return net;
    }

    netSalary(salary);

    //Taxable income comes after deducting mandatory pension and health insurance from the gross salary.
    //Calculate PAYE first before deducting reliefs (personal relief(fixed tax relief of 2400), insurance, housing) from it.
    function paye(gross){   
        //Finds tier salary fall under.       
        const getRate = taxRates.find(taxRate => payableTax >= taxRate.lowerLimit && payableTax <= taxRate.upperLimit);
        const tax = gross * getRate?.rate/100;

        //Deduct personal relief and any other applicable relief to PAYE to get PAYE due.
        if(tax > reliefs[0]["Personal Relief"]){
            const payeDue = tax - reliefs[0]["Personal Relief"];
            console.log(`Tax due is: ${payeDue}`);
            return payeDue;            
        } else {
            console.log(`Tax due is: ${tax}`);
            return tax;
        }
    }
   
    //Calculates NHIF deductions on gross salary
    function health(gross){    
        //Find tier the gross salary falls under and returns the exact deduction.
        const healthDeductions = nhifRates.find(rate => gross >= rate.lowerLimit && gross <= rate.upperLimit);
        console.log(`The NHIF deduction is: ${healthDeductions.deduction}`);
        return healthDeductions?.deduction;   
    }

    function pension(gross){
        /* Pension fund contribution on both tiers.
        Applicable pay for tier 1 is the 7000 * rate i.e. 0.06 = 420.
        Applicable pay for tier 2 is the `${Gross salary}` - ${lower limit} * rate i.e. 0.06 if gross is < upperLimit
        */   

        const tierOneLimit = nssfRates[0].upperLimit * nssfRates[0].rate/100;
        const tierTwoLimit = (nssfRates[1].upperLimit - nssfRates[0].upperLimit) * nssfRates[1].rate/100;

        const pensionDeduction = (() => {
            //Finds the tier where the gross salary falls and determines the deductions on both tiers where applicable.
            //This code ignores availability of an alternative pension scheme.
            if(gross >= nssfRates[0].lowerLimit && gross <= nssfRates[0].upperLimit){
                return gross * nssfRates[0].rate/100;
            } else if (gross >= nssfRates[1].lowerLimit && gross <= nssfRates[1].upperLimit){                
                return (gross - nssfRates[0].upperLimit)* nssfRates[1].rate/100 + tierOneLimit;
            } else {                
                return tierOneLimit + tierTwoLimit;
            }
        })()
        console.log(`The pension deductible is: ${pensionDeduction}`);
        return pensionDeduction;

    }

    //Calculates the housing levy on gross salary.
    //This calculation ignores the Affordable Housing Relief of: monthly limit 9,000 and annual limit of 108,000.

    function housing(grossSalary){
        //Housing levy rate of 1.5% on gross income
        const housingLevy = 0.015;

        //Calculates the levy based on gross salary
        const hutTax = grossSalary * housingLevy;

        console.log(`The housing levy is: ${hutTax}`);
        return hutTax;    
    }

salaryInput.close();          
})