
export default function isIsbnValid(isbn: string) {
    const numerics: number[] = [];
    let checkDigit: number = 0;
    let isbnSubstring: string = ""; 
    const isbnNumber = isbn.replace(/\D/g,'');

    if (isbnNumber.length == 10 || isbnNumber.length == 13) {

     if(isbnNumber.length == 13){
         console.log("Isbn = 13");
        for (let i = 0; i < isbnNumber.length; i++) {
            numerics[i] = parseInt(isbnNumber[i], 10);
            
            if (i+1 >= isbnNumber.length) {
                continue;
            }
            
            if (i % 2 == 0) {
                checkDigit += numerics[i] * 1;
                console.log(checkDigit);
            } else {
                checkDigit += numerics[i] * 3;
                console.log(checkDigit);
            }
        }

        checkDigit = (10 - (checkDigit % 10)) % 10;

        if (checkDigit != numerics[12]) {
            console.log("Check Digit not equal"); 
            return false;
        }

        return true;
        }
    else if(isbnNumber.length == 10){ 
        console.log("ISBN = 10");
        for (let i = 0; i< isbnNumber.length; i++){
            numerics[i] = parseInt(isbnNumber[i], 10);  
            isbnSubstring = isbnNumber.substring(i, i+1); 
            if(i < 9 || isbnSubstring != "X"){
                checkDigit += numerics[i] * (10-i); 
                console.log(checkDigit);
            }
            else{ 
                checkDigit += 10; 
            }
            
        }

        checkDigit = (checkDigit % 11);
        console.log(checkDigit); 

        if (checkDigit != 0) {
            console.log("Check Digit not equal"); 
            return false;
        }

        return true;
        }
    }

    return false; 

    }
