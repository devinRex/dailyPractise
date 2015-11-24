/**
 * Created by denglei on 15/6/29.
 */
define(function(){
    var insertsionSort = function(){
        var temp,inner;
        var arr = this.dataStore;
        var len = arr.length;
        for(var outer = 1; outer < len; outer++){
            temp = arr[outer];
            inner = outer;
            while(inner > 0 && (arr[inner-1] <= temp)) {
                arr[inner] = arr[inner-1];
                --inner;
            }
            arr[inner] = temp;
        }
    };
    return insertsionSort;
});