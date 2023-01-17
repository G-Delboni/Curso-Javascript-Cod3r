// Create a function that takes the age in years and returns the age in days.
/*Use 365 days as the length of a year for this challenge.
*Ignore leap years and days between last birthday and now.
*Expect only positive integer inputs.
*/

function calcAge(age) {
    if (age >= 1) {
        let days = age * 365
        return days
    }

    else {
        console.log('Please insert a valid age...')
        return age
    }
}

console.log(calcAge(0))