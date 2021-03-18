//I don't understand how this function works
//https://github.com/berk-ozer/lighthouse-katas/blob/master/case-maker-2.js#L10

const makeCase = function(text, casingStyle) {
  if (typeof casingStyle !== 'object') casingStyle = [casingStyle];

  //sorting the casingStyle array to match the precedence of each casing style
  if (casingStyle.length > 1) {
    const sortingArr = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
    casingStyle.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b));
  }

  for (const style of casingStyle) {

    switch (style) {

    case 'camel':
      text = text.replace(/\s\w/g, char => char.toUpperCase()).replace(/\s/g, '');
      break;

    case 'pascal':
      text = text.replace(/\b\w/g, char => char.toUpperCase()).replace(/\s/g, '');
      break;

    case 'snake':
      text = text.replace(/\s/g, '_');
      break;

    case 'kebab':
      text = text.replace(/\s/g, '-');
      break;

    case 'title':
      text = text.replace(/\b\w/g, char => char.toUpperCase());
      break;

    case 'vowel':
      text = text.replace(/[aeiou]/gi, char => char.toUpperCase());
      break;

    case 'consonant':
      text = text.replace(/[^aeiou]/gi, char => char.toUpperCase());
      break;

    case 'upper':
      text = text.toUpperCase();
      break;

    case 'lower':
      text = text.toLowerCase();
      break;
    }
  }

  return text;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));