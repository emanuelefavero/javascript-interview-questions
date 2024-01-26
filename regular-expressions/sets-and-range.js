// * Character Sets

let string = "I wonder why it's windy"
let regex = /w[io]n/g
console.log(string.match(regex)) // [ 'won', 'win' ]

// TIP: To match the entire word ('wonder' and 'windy'), we can add a match for any character that is not a white space character and ensure that there is one or more occurrence of such characters
regex = /w[io]n[^\s]+/g
console.log(string.match(regex)) // [ 'wonder', 'windy' ]

// ^\s matches any character that is not a white space character (equal to [^\r\n\t\f\v ])
// + matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
