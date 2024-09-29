function getArrayParams(...arr) {
    let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];

		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	let avg = sum / arr.length;
	avg = parseFloat(avg.toFixed(2))

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

	return arr.reduce((acc, current) => acc + current, 0);
}

function differenceMaxMinWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	}

	let numMin = Math.min(...arr);
	let numMax = Math.max(...arr);
	return numMax - numMin;
}

function differenceEvenOddWorker(...arr) {

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return  countEvenElement > 0 ? sumEvenElement / countEvenElement : 0;
}

function makeWork (arrOfArr, func) {

	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		
		const resultFunc = func(...arrOfArr[i]);

		if (resultFunc > maxWorkerResult) {
			maxWorkerResult = resultFunc;
		}
	}

	return maxWorkerResult;	

}
