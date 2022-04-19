function isValidIP(str) {
    strnew = str.concat('.')
    // console.log(strnew)

    strLength = strnew.length
    // console.log(strLength)
    
    // To make this problem easier to visualize and to know the relationsship of the indices i and j to be set up in the conditional statements, it's to manually output first the desired result. Here, we used the slice function, using splice will alter the original string/array and will be difficult to track the indices in the conditional statements
    // isValidIP('123.45.67.89')
    //  console.log(str.slice(0,3))
    //  console.log(str.slice(4,6))
    //  console.log(str.slice(7,9))
    //  console.log(str.slice(10,12))

    // Here, we first create an array ipArr, so we can iterate through the elements of the string. We nest an if condition stating that if we find a character '.', we then slice the elements before that dot and push it to the ipArr array. We also set a counter so we can track if the IP address will only have four sets of octets and must always be equal to 4, it will output an invalid array if the counter is not equal to 4.
    ipArr = []
    j=0
    counter = 0
    for(i=0; i<=strLength-1; i++){
        if(strnew[i] == '.'){
            // console.log(j,i)
            // console.log(strnew.slice(j,i))
            ipArr.push(strnew.slice(j,i))
            j= i+1
            counter++
        }
    }

    // Here we use a for loop so we can iterate through the array ipArr so we can set a nested if condition stating that if the length is 1, AND if the first element is equal to the character '0'(IP addresses should not start with a 0), OR if the counter is not exactly 4, will output an invalid IP address, instead of using break, we use the return so the program stops if it satisfies one of the conditions in the if statement
    finalArr = []
    for(i=0; i<=ipArr.length-1; i++){
        // console.log(ipArr[i].length, ipArr[i][0])
        if((ipArr[i].length == 1 && ipArr[i][0] == '0') || ipArr[i][0] == '0' || counter != 4){
            console.log(`${str} is an INVALID IP address`)
            return
        } else {
            finalArr.push(ipArr[i])
        }
    }
    
    // After all the above conditions have been satisfied, we now use an arrow map function instead of using the for loop to convert all the elements of the ipArr to an integer
    finalArr = ipArr.map(x => parseInt(x));

    // Here, to perform the final IP validity test, because the numbers on the IP should only be equal or less than 255, we create an array validityTest so we can push each element when it satisfies the if condition, then we take the length of the validitTest and it should be exactly 4 
    validityTest = []
    for(i=0; i<=finalArr.length-1; i++){
        if(finalArr[i] <= 255){
            validityTest.push(finalArr[i])
        } 
    }
    if(validityTest.length == 4){
        console.log(`${str} is a VALID IP address`)
    } else {
        console.log(`${str} is an INVALID IP address`)
    }
  }
  isValidIP('255.35.72')
  isValidIP('255.35.72.098')
  isValidIP('123.255.27.189.34')
  isValidIP('255.45.67.89')
  isValidIP('1.2.3.4')
  isValidIP('123.745.67.189')

// This is the link to the codewars JavaScript problem
// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript