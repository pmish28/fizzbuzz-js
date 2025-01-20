

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let num=0;num<=100;num++)
    {
        const nPrint= 'Fizz'
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
        // (num%3 ==0)?  console.log('Fizz') : 
        // (num%5 ==0)?  console.log('Buzz') : 
        // (num%3 ==0 && num%5 ==0)? console.log('FizzBuzz') : 
        // console.log(num);
    }
    
}

// Now we run the main function...
fizzbuzz();
