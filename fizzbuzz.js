

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

        // Put your code here...
    for (let num=1;num<=100;num++)
    {

        var printWords = ""
        // if(num % 3 ==0 && num %5 ==0)
        // {
        //     printWords += 'FizzBuzz';
        // }
        if(num%3 ==0)
        {
            printWords += "Fizz";
        }
        if(num%5==0)
        {
            printWords += "Buzz";
        }
        if(num%7==0)
        {
            printWords +="Bang";
        }
        if(num%11==0)
        {
            printWords ="Bong";
        }       
        else
        {
            printWords =num;
        }
        console.log(printWords);        
    }    
}
 // if(num%13==0)
        // {
        //     if(printWords.startsWith("B"))
        //     {
        //         printWords = "Fezz"+printWords;
        //     }
        //     else
        //     {
        //         printWords+= "Fezz"
        //     }            
        // }
        // if(num%17 ==0)
        // {
        //     printWords = printWords.split("").splice(4).join("") + 
        //                  printWords.split("").splice(0,4).join("")
        // }



// Now we run the main function...
fizzbuzz();
