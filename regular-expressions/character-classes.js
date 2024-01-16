// * . dot matches any character except line breaks
let str = "Every time you've won, you're one step closer to your next win."
let regex = str.match(/w.n/gi) // . matches 'won' and 'win'
console.log(regex) // [ 'won', 'win' ]

// * \w matches any word character (equal to [a-zA-Z0-9_]) and + matches between one and unlimited times
str = 'I wonder if it is windy'
regex = str.match(/w.n\w+/gi) // \w+ matches 'wonder' and 'windy'
console.log(regex) // [ 'wonder', 'windy' ]

// * \d matches any digit (equal to [0-9])
str = 'I study HTML5, CSS3 and JavaScript'
regex = str.match(/\w+\d/gi) // \d* matches 'HTML5' and 'CSS3'
console.log(regex) // [ 'HTML5', 'CSS3' ]

// * \D matches any character that's not a digit (equal to [^0-9])
str = 'Room 50'
regex = str.match(/\D+/gi) // \D+ matches 'Room '
console.log(regex) // [ 'Room ' ]

// * \w matches any word character (equal to [a-zA-Z0-9_])
str = 'Hello!'
regex = str.match(/\w+/gi) // \w+ matches 'Hello'
console.log(regex) // [ 'Hello' ]

// * \W matches any non-word character (equal to [^a-zA-Z0-9_])
str = 'Hello!'
regex = str.match(/\W+/gi) // \W+ matches '!'
console.log(regex) // [ '!' ]

// * \s matches any whitespace character (equal to [\r\n\t\f\v ])
str = 'Hello World!\n'
regex = str.match(/\s/gi) // \s matches ' ' and '\n'
console.log(regex) // [ ' ', '\n' ]

// * \S matches any non-whitespace character (equal to [^\r\n\t\f\v ])
str = 'Hello World!\n'
regex = str.match(/\S+/gi) // \S matches 'Hello' and 'World!'
console.log(regex) // [ 'Hello', 'World!' ]

// TIP: You can also search only for new lines with \n: str.match(/\n/gi)

// * [] matches any character inside the brackets

str = 'Hello World!'
regex = str.match(/[aeiou]/gi) // [aeiou] matches 'e', 'o' and 'o'
console.log(regex) // [ 'e', 'o', 'o' ]
