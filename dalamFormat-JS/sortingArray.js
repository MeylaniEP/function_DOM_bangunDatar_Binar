let numbers = [10, 11, 31, 5, 1, 9, 3, 20 ];
        numbers.sort( function( a , b){
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });

        console.log(numbers);
        numbers.sort(function(a, b)
        {
            return b-a
        });
        //menampilkan di console
        console.log(numbers[1]);