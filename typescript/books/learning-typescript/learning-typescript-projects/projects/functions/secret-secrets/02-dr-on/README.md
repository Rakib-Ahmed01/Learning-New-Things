# Step 2: Dr. On

Hmm.
Very good.
Your cipher was sufficient in deciphering our texts.
Our rival -the nefarious Goldberger- has been thwarted again.

However!
It seems Goldberger has enlisted the help of a well-known crime cryptologist, Dr. On, to crack our ciphers.
We require your assistance in developing a more advanced cipher creator to stymie their decryption efforts.

Your undertaking, if you decide to undertake it, is to develop a `createAdvancedCipher` function.
It is similar to the previous `createCipher` function, but instead of taking in one function parameter, it takes in three.
One for vowels, one for consonants, and one for punctuation.

## Specification

Parameters:

1. `onVowel`: A function that takes in a string and returns another string

2. `onConsonant`: A function that takes in a string and returns another string

3. `onPunctuation`: A function that takes in a string and returns another string

Return: a function with:

- Parameters:
  1. `text`: Any string
- Return: A string generated by calling, on every character of `text`:
  - If the character is a vowel (`/[aeiou]/i`): `onVowel`
  - If the character is a consonant (`/[bcdfghjklmnpqrstvwxyz]/i`): `onConsonant`
  - For any other character: `onPunctuation`

## Files

- `index.ts`: Write your `createAdvancedCipher` function here
- `index.test.ts`: Tests verifying `createAdvancedCipher`
- `solution.ts`: Solution code
