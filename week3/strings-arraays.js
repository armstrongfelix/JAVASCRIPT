/* string refers to any text in quote "". 
indexing in strings
string methods
 i.     string.length (returns the total number of element in a string data)
 ii.    string.includes("data") return true if the "data" is contained in the string
 iii.   string.toUpperCase() converts string to upercase. 
 iv.    string.toLowerCase() convert a string to lowercase.
 v.     string.slice(start, end+1) used for extraction.
 vi.    string.split("spliting parameter") converts string to an array of letters
 vii.   string.trim() used for removing white spaces on a string
 viii.  string.replcae(what-to-replace, reple-with )replaces a word in a string.
 ix.    string.indexOf("paramter") used to git the index of an array value
 x.     string.lastIndexOf("parameter") returns the last index when the value have multiple ocurance
            NOTE: .split("parameter")  converts string to an array, while .join("parameter") converts array to strin
 */

/*
  CLASS WORK
  Write a funcion that prompts for input and conerts the letter to capital letter.



function convert() {
  letter = prompt("Enter a leter: ");
  return alert(letter.toUpperCase());
}
convert();
*/

/*From Tutor
function capitalLetter(word) {
  return word.toUpperCase();
}
let request = prompt("Enter a word in lowercase : ");
alert(capitalLetter(request));
*/

/*capitalize the first word
function convertt() {
  letter = prompt("Enter a leter: ");
  first = letter[0].toUpperCase();
  letter = letter.replace(letter[0], first);
  alert(letter);
}

convertt();
*/

/*
  JAVASCRIPT ARRAYS
  This is a non primitive data types.
  they are used for grouping. they can store all data types, it use [] - square bracket.
  
let details = [
  "name",
  9,
  undefined,
  null,
  Symbol("id"),
  true,
  { nmae: "Felix" },
  [1, 3, 4, 8],
];
console.log(details);
*/

/*
  Array Methods
    i.  using index value through square bracket e.g array[0], returns the first value of an array.
    ii. array.length returns the lenght of an array
    iii.  array.inludes("parameter") return a boolean (true or false)
    iv. array.replace("what-to-replace", "replace-with") used to find and replace
    v.  array.indexOf("paramter") used to git the index of an array value
    vi. array.lastIndexOf("parameter") returns the last index when the value have multiple ocurance
    vii.  array.join() used to join array values together.
    viii. array.slice(start,end+1)
    ix.   array.splice(start-index, index-i, index-i+1, index-i+3....end-index) is also used to extract array valus by specifying all the index.
            e.g a


    NOTE: .split("parameter")  converts string to an array, while .join("parameter") converts array to string



let l = "feliiiiiiix";
alert(l.lastIndexOf("i"));
*/
