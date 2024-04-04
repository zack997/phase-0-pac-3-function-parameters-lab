function introduction(name) {
   return `Hi, my name is ${name}.`;
}

// Test the function
console.log(introduction('Aki')); // Output: Hi, my name is Aki.


function introductionWithLanguage(name, language) {
   return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Test the function
console.log(introductionWithLanguage('Aki', 'Ember.js')); // Output: Hi, my name is Aki and I am learning to program in Ember.js.

function introductionWithLanguageOptional(name, language = 'JavaScript') {
   return `Hi, my name is ${name} and I am learning ${language}.`;
}

// Test the function
console.log(introductionWithLanguageOptional('Aki')); // Output: Hi, my name is Aki and I am learning JavaScript.
console.log(introductionWithLanguageOptional('Aki', 'Python')); // Output: Hi, my name is Aki and I am learning Python.

function introductionWithLanguageOptional(name, language = 'JavaScript') {
   if (language === 'JavaScript') {
       return `Hi, my name is ${name} and I am learning ${language}.`;
   } else {
       return `Hi, my name is ${name} and I am learning to program in ${language}.`;
   }
}

// Test the function
console.log(introductionWithLanguageOptional('Gracie', 'Python')); // Output: Hi, my name is Gracie and I am learning Python.
console.log(introductionWithLanguageOptional('Gracie')); // Output: Hi, my name is Gracie and I am learning JavaScript.

function introductionWithLanguageOptional(name, language = 'JavaScript') {
   if (language === 'JavaScript') {
       return `Hi, my name is ${name} and I am learning ${language}.`;
   } else {
       return `Hi, my name is ${name} and I am learning to program in ${language}.`;
   }
}

// Test the function
console.log(introductionWithLanguageOptional('Gracie')); // Output: Hi, my name is Gracie and I am learning JavaScript.

function introductionWithLanguageOptional(name, language = 'JavaScript') {
   return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Test the function
console.log(introductionWithLanguageOptional('Gracie')); // Output: Hi, my name is Gracie and I am learning to program in JavaScript.
