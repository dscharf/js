function greedyPartition(seq, k){
	if(k < 2)
		return seq;
	if(seq.length < k){
		var res = [];
		res.length = seq.length;
		for(var i = 0; i < res.length; i++){
			res[i] = [];
			res[i].length = 1;
			res[i][0] = seq[i];
		}

		return res;
	}

	seq = seq.sort(function(a,b){return b-a;});

	var res = [];
	res.length = k;

	//res = seq;

	for(var i=0; i < k; i++){
		res[i] = [];
		res[i][0] = seq[i];
	}

	for(var i=k; i<seq.length; i++){
		res[k - 1].push(seq[i]);
		res.sort(function(a,b){return sum(b)-sum(a);});
	}

	return res;

}

function sum(a){
	var sum = 0;
	for(var i=0; i<a.length; i++)
		sum += a[i];
	return sum;
}
