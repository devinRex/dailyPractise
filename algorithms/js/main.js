require.config({
	baseUrl: "js/unit",
    paths:{

    }
});
require(['CArray','bubbleSort','selectionSort','insertionSort','shellsort'], function (CArray,bubble,selection,insert,shell){
	var numElements = 10;
	var myNums = new CArray(numElements);
	myNums.setData();
    //var bubberStart = new Date().getTime();
    //bubble.call(myNums);
    //var bubberEnd = new Date().getTime();
    //console.log("冒泡：",bubberEnd - bubberStart);
    //var myNums1 = new CArray(numElements);
    //myNums1.setData();
    //var insertStart = new Date().getTime();
    //insert.call(myNums1);
    //var insertEnd = new Date().getTime();
    //console.log("插入：",insertEnd - insertStart);
    //var myNums2 = new CArray(numElements);
    //myNums2.setData();
    //var selectStart = new Date().getTime();
    //selection.call(myNums2);
    //var selectEnd = new Date().getTime();
    //console.log("选择：",selectEnd - selectStart);
    shell.call(myNums);
    console.log(myNums.dataStore);

});