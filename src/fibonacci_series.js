'use strict';

function fibonacci_series(n) {
	var arr=[0];
	var arrs=[0,1];
	if(n==0)
		{
			return arr;
			}
	else if(n==1)
		{
			return arrs;
			}
	else
		{
		for(var i=2;i<=n;i++)
		{
			
			arrs[i]=arrs[i-1]+arrs[i-2];
			arr.push(arrs[i]);
		}
		return arrs;
		}
}
module.exports = fibonacci_series;
