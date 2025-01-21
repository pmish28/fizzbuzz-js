

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let num=1;num<=100;num++)
    {

        if(num % 3 ==0 && num %5 ==0)
        {
            console.log('FizzBuzz');
        }
        else if(num%3 ==0)
        {
            console.log('Fizz');
        }
        else if(num%5==0)
        {
            console.log('Buzz');
        }
        else
        {
            console.log(num);
        }
        
    }    
}

// Now we run the main function...
fizzbuzz();
