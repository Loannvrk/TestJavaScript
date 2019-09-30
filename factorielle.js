function factorielle(n){
	var a=1;
  var i;
	if (n===0){
  	return 0;
  }
  else {
  	for(i=1;i<=n;i++){
    	a=a*i;
    }
  }
	return (a);
}
