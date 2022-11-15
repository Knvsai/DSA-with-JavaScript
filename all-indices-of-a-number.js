
function targetIndices(num, val)
{
	let count_less = 0;
	let count_target = 0;
    num.sort((a,b) => a-b)

	// Loop to count smaller elements and val
	for (let i = 0; i < num.length; i++) {
		if (num[i] == val)
			count_target++;
		if (num[i] < val)
			count_less++;
	}

	// List to store indices
	let ans = [];
	while (count_target--) {
		ans.push(count_less++);
	}
	return ans;
}

// Driver code
let num = [ 1, 2, 5, 3, 2 ];
let val = 2;
let ans = targetIndices(num, val);

	// Loop to print indices
	for (let i = 0; i < ans.length; i++) {
		console.log(ans[i] + " ");
	}
	

