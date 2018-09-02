var csv = require('csvtojson');
var requests = require('request');

let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
		//console.log(sum+element);
    resolve(sum + element);
  });

  return p;
}

export let csv2json = (request, h) => {
	console.log(request.query.url);
	let ans = "";
	csv()
  .fromStream(requests.get(request.query.url))
  .on("json",function(jsonObj){    
		console.log('done');
		console.log(jsonObj); 
		return ans;
  });
	
}

export let loop = (request, h) => {
	console.log("prodapi hit");
  let numbers = [1,2,3,4,5,6,7,8,9,10];
	let sum = 0;

  /*numbers.forEach(n => {
    console.log(`Trying to add ${n}`);
  	adder(sum, n)
  		.then(res => {
        console.log(`Current sum is ${res}`);
        sum = res
      });
  });*/
	let n = 0;
	adder(sum, numbers[n])
		.then(res => {
			console.log(`Trying to add ${numbers[n]}`);
			console.log(`Current sum is ${res}`);
			sum = res;
			n+=1;
			adder(sum, numbers[n])
				.then(res => {
					console.log(`Trying to add ${numbers[n]}`);
					console.log(`Current sum is ${res}`);
					sum = res;
					n+=1;
					adder(sum, numbers[n])
						.then(res => {
							console.log(`Trying to add ${numbers[n]}`);
							console.log(`Current sum is ${res}`);
							sum = res;
							n+=1;
							adder(sum, numbers[n])
								.then(res => {
									console.log(`Trying to add ${numbers[n]}`);
									console.log(`Current sum is ${res}`);
									sum = res;
									n+=1;
									adder(sum, numbers[n])
										.then(res => {
											console.log(`Trying to add ${numbers[n]}`);
											console.log(`Current sum is ${res}`);
											sum = res;
											n+=1;
											adder(sum, numbers[n])
												.then(res => {
													console.log(`Trying to add ${numbers[n]}`);
													console.log(`Current sum is ${res}`);
													n+=1;
													sum = res;
													adder(sum, numbers[n])
														.then(res => {
															console.log(`Trying to add ${numbers[n]}`);
															console.log(`Current sum is ${res}`);
															n+=1;
															sum = res;
															adder(sum, numbers[n])
																.then(res => {
																	console.log(`Trying to add ${numbers[n]}`);
																	console.log(`Current sum is ${res}`);
																	n+=1;
																	sum = res;
																	adder(sum, numbers[n])
																		.then(res => {
																			console.log(`Trying to add ${numbers[n]}`);
																			console.log(`Current sum is ${res}`);
																			n+=1;
																			sum = res;
																			adder(sum, numbers[n])
																				.then(res => {
																					console.log(`Trying to add ${numbers[n]}`);
																					console.log(`Current sum is ${res}`);
																					n+=1;
																					sum = res;
																					console.log(sum);
																				});
																		});
																});
														});
												});
										});
								});
						});
				});
		});
	return sum;
};

