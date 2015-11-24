/**
 * Created by denglei on 15/6/29.
 */
define(function() {
    function bubbleSort(){
        var arr = this.dataStore;
        var len = arr.length;
        for(var outer = len; outer >= 2; outer--){
            for(var inner = 0; inner < outer; inner++){
                if(arr[inner] > arr[inner+1]) {
                    this.swap(arr,inner,inner+1);
                }
            }
        }
    }
    return bubbleSort;
});