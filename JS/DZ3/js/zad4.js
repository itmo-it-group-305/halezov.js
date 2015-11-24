// Задан массив - [12,4,3,10,1,20] необходимо отсортировать его в порядке возрастания, при этом не использовать готовый метод sort
// вот нужно все сделать


function a(arr)
{                               
    var n = arr.length;
    for (var i = 0; i < n-1; i++)
     { var min = i;
       for (var j = i+1; j < n; j++)
        { if (arr[j] < arr[min]) min = j; } 
       var t = arr[min]; arr[min] = arr[ i ]; arr[ i ] = t;
     }                    
    return arr;
}

alert(a([12,4,3,10,1,20]));