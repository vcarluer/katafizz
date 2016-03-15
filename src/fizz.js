module.exports = { 
    getOutput: function(number){
        var fizzbuzz = ''
        
        if(number%3 === 0 || number.toString().indexOf('3')> -1){
            fizzbuzz = 'fizz'
        }
        
        if(number%5 === 0|| number.toString().indexOf('5')> -1){
            fizzbuzz += 'buzz'
        }
        
        if(fizzbuzz =='')
        {
            fizzbuzz = number.toString()
        }
        return fizzbuzz
    }
}