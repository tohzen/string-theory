/******************
 * YOUR CODE HERE *
 ******************/

 function xify (string){
  let str = '';
  for (const letter of string){
    str= str + 'x';
  }
  return str;
}

function yellingChars(str){
  let newStr = "";
  for (const letter of str){
    newStr = newStr + letter +'!';
  }
  return newStr;
}

function indexedChars(str){
  let newStr = '';
  let i=0;
  while (i < str.length){
    newStr = newStr + i.toString() + str[i];
    i++;
  }
  return newStr;
}

function numberedChars (str){
  let newStr = '';
  let i=0;
  while (i < str.length){
    newStr = newStr + "("+ (i+1).toString() + ")" + str[i];
    i++
  }
  return newStr;
}

function exclaim (str){
  let newStr = "";
  for (const letter of str){
    if (letter === '?'){
      newStr = newStr + '!';
    } else if (letter === '.'){
      newStr = newStr + '!'
    } else{
      newStr = newStr + letter;
    }
  }
return newStr;
}

function repeatIt (str, n){
  let newStr = "";
  let i=0;
  while (i<n){
    newStr = newStr + str;
    i++;
  }
return newStr
}

function truncate(str){
  let newStr = '';
  if (str.length<=18){
    for (let i=0;i<str.length;i++){
      newStr = newStr + str[i];
    }
  } else {
      for (let i=0; i<15;i++){
        newStr = newStr + str[i];
      }
      newStr = newStr + '...';
  }
  return newStr;
}

function ciEmailify(name){
  let email = '';
  for (let i=0;i<name.length;i++){
    if (name[i] === ' '){
      email = email+'.';
    } else {
      email = email+ name[i]
    }
  }
  email = (email+'@codeimmersives.com').toLowerCase()
  return email
}


function reverse (str) {
  let reverseStr = ""
  for (let i=str.length-1;i>=0;i--){
    reverseStr = reverseStr+str[i];
  }
  return reverseStr;
}

function onlyVowels(str){
  
    let newStr = '';
  for (const letter of str){
    let vowel = (
      letter ==='e' || 
      letter ==='i' || 
      letter ==='o' || 
      letter ==='u' || 
      letter ==='a' ||
      letter ==='E' || 
      letter ==='I' || 
      letter ==='O' || 
      letter ==='U' || 
      letter ==='A'
    );
    if (vowel){
      newStr = newStr + letter;
    }
  }
return newStr;
}

function crazyCase(str){
  let newStr = '';
  for (let i = 0;i<str.length;i++){
    if (i%2 === 0){
      let letter = str[i].toLowerCase()
      newStr = newStr + letter
    } else {
      let letter1 = str[i].toUpperCase()
      newStr=newStr+letter1
    }
  }
  return newStr;
}

function titleCase(str){
  let newStr = '';
  let rep = false;
  for (let i=0; i<str.length; i++){
    if (i===0){
      rep = true
    }
    if (rep === true) {
      rep = false;
    } else if (rep === false){
      newStr = newStr + str[i].toLowerCase();
    }
    if (str[i] === ' '){
      newStr = newStr + str[i+1].toUpperCase();
      rep = true;
    } else if (i===0){
      newStr = newStr + str[i].toUpperCase();
    } 
    
  }
  return newStr;
  }


function camelCase(str){
  let newStr = ''
  let rep = false;
  for (let i = 0; i<str.length;i++){
      if (rep === true) {
        rep = false;
      } else{
    if (str[i] === ' '){
      newStr = newStr + str[i+1].toUpperCase();
      rep = true;
    } else {
      newStr = newStr + str[i].toLowerCase();
    }
  }
}
  return newStr;
}

function crazyCase2ReturnOfCrazyCase(str){
      let newStr = '';
      let space = 0;
      for (let i = 0;i<str.length;i++){
        if (space%2 === 0){
          if (i%2 === 0){
            let letter = str[i].toLowerCase()
            newStr = newStr + letter
          } else {
            let letter1 = str[i].toUpperCase()
            newStr=newStr+letter1
          }
          if (str[i] === ' '){
            space++
          }
          } else if (space%2 === 1){
          if ((i-1)%2 === 0){
          let letter2 = str[i].toLowerCase()
            newStr = newStr + letter2
          } else {
            let letter3 = str[i].toUpperCase()
            newStr=newStr+letter3
          }
          if (str[i] === ' '){
            space++
          }
        }
      }
      return newStr;
}




 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
