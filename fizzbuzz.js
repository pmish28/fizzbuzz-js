

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let num=0;num<=100;num++)
    {
        (num%3 ==0)?  console.log('Fizz') : console.log(num);
    }
    
}

// Now we run the main function...
fizzbuzz();
