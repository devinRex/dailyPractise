/**
 * Created by denglei on 15/6/29.
 */
define(function(){
    var selectionSort = function(){
        var min;
        var arr = this.dataStore;
        var len = arr.length;
        for(var outer = 0; outer <= len - 2; outer++) {
            min = outer;
            for(var inner = outer + 1; inner < len; inner++){
                if(arr[inner] < arr[min]){
                   min = inner;
                }
            }
            this.swap(arr,outer,min);
        }
    };
    return selectionSort;
});