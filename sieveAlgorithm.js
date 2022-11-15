
function sieveOfEratosthenes(n)
{
	// Create a boolean array
	// "prime[0..n]" and
	// initialize all entries
	// it as true. A value in
	// prime[i] will finally be
	// false if i is Not a
	// prime, else true.
	prime = Array.from({length: n+1}, (_, i) => true);

	for (p = 2; p * p <= n; p++)
	{
		// If prime[p] is not changed, then it is a
		// prime
		if (prime[p] == true)
		{
			// Update all multiples of p
			for (i = p * p; i <= n; i += p)
				prime[i] = false;
		}
	}

	// Print all prime numbers
	for (i = 2; i <= n; i++)
	{
		if (prime[i] == true)
			console.log(i + " ");
	}
}

// Driver Code
var n = 50;
sieveOfEratosthenes(n)



