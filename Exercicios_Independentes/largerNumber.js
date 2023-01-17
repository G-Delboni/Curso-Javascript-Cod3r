/*Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
*If f returns the larger number, return the string f.
*If g returns the larger number, return the string g.
*If the functions return the same number, return the string neither.
*/

function whichIsLarger(f, g) {
	let max = Math.max(f, g)

    if (max == f && max == g) {
        return 'neither'
    }

    else if(max == g) {
        return 'g'
    }

    else if (max == f) {
        return 'f'
    }
}

console.log(whichIsLarger(13,3))