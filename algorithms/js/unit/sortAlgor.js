define(function(){
	var ortAlgor = function(){
		function qsort(list){
	        if(list.length = 0) {
	        	return [];
	        }
	        var lesser = [];
	        var greater = [];
	        var pivot = list[0];
	        for(var i = 1; i < list.length; i++) {
	        	if(list[i] < pivot) {
	        		lesser.push(list[i]);
	        	} else {
	        		greater.push(list[i]);
	        	}
	        } 
	        return qsort(lesser).concat(pivot, qsort(greater));
	    };
	    var selectionSort = function(){
	        var min;
	        var arr = this.dataStore;
	        var len = arr.length;
	        for(var outer = 0; outer < len - 1; outer++) {
	        	min = outer;
	        	for(var inner = 1; inner < len; inner++) {
	        		if(arr[inner] < arr[min]){
	        			min = inner;
	        		}
	        	}
	        	this.swap(arr,outer,min);
	        }
	    };
	    function insertionSort(){
	    	var temp,inner;
	        var arr = this.dataStore;
	        var len = arr.length;
	        for(var outer = 1; outer < len - 1; outer++){
	        	temp = arr[outer];
	        	inner = outer;
	        	while(inner > 0 && arr[inner - 1] > temp) {
	        		arr[inner] = arr[inner-1];
	        		inner--; 
	        	}
	        	arr[inner] = temp;
	        }
	    } 
	    function bubbleSort(){
	    	var arr = this.dataStore;
	        var len = arr.length;
	        for(var outer = len; outer >= 2; outer--) {
	        	for(var inner = 0; inner < outer; inner++){
	        		if(arr[inner] > arr[inner+1]){
	        			this.swap(arr,inner,inner+1);pattern
	        		}
	        	}
	        }
	    }
	    return {
	    	qsort: qsort,
	    	selectionSort: selectionSort,
	    	shellsort: shellsort,
	    	insertionSort: insertionSort,
	    	bubbleSort: bubbleSort
	    };
	}();
});	