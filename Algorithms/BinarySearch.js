function binarySearch (arr, x) { 
	let start=0;
	let end=arr.length-1;
	while (start<=end){
		let mid=Math.floor((start + end)/2);
		if (arr[mid]===x) return mid;
		else if (arr[mid] < x)
			start = mid + 1;
		else
			end = mid - 1;
	}
	return -1;
}
console.log(binarySearch([1,4,2,5,6,7],6)) // 4
