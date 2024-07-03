const taxRates = [
    {lowerLimit: 0, upperLimit: 24000, rate: 10.0},
    {lowerLimit: 24001,upperLimit: 32333,rate: 25.0},
    {lowerLimit: 32334,upperLimit: 500000,rate: 30.0},
    {lowerLimit: 500001,upperLimit: 800000,rate: 32.5},
    {lowerLimit: 800001,upperLimit: Infinity,rate: 35.0}
];

const reliefs = [
    { type: "Personal Relief", monthlyLimit: 2400 },
    { type: "Insurance Relief", monthlyLimit: 5000 },
    { type: "Allowable Pension Fund Contribution", monthlyLimit: 20000 },
    { type: "Allowable HOSP Contribution", monthlyLimit: 0 },
    { type: "Affordable Housing Relief", monthlyLimit: 9000 },
    { type: "Allowable Owner Occupier Interest", monthlyLimit: 25000 },
    { type: "Disability Exemption", monthlyLimit: 150000 }
];
  
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

/* Pension fund contribution on both tiers.
Applicable pay for tier 1 is the 7000 * rate i.e. 0.06 = 420.
Applicable pay for tier 2 is the `${Gross salary}` - ${lower limit} * rate i.e. 0.06
*/

const nssfRates = [
    { tier: "I", lowerLimit: 0, upperLimit: 7000, rate: 6 },
    { tier: "II", lowerLimit: 7001, upperLimit: 36000, rate: 6 }
]
 //Housing levy rate of 1.5% on gross income
const housingLevy = 0.015;


function paye(gross, tax){
    
}

function health(gross, arr){

}

function pension(gross){

}

function housing(){

}