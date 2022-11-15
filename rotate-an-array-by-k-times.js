var rotate = function(nums, k) {
	if (k > nums.length) k = k % nums.length;
    let dels = nums.splice(nums.length - k,k);
	nums.unshift(...dels);
	return nums
};
console.log(rotate([1,2,3,4],7))