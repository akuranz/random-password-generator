# Random Password Generator

### Deployed Password Generator

https://akuranz.github.io/randomPasswordGenerator/

## Description

A random password generator where users must define a length between 8 and 128 characters and decide whether to include or exclude special characters, numbers, lowercase characters, and uppercase characters.

## Instructions for User

Click the Generate Password buttton.

The user will be asked to enter a number between 8 and 128 to set the lenth of the password. The password generator will not accept any numbers outside of that range and will only accept numbers.

If the user successfully enters a password lenth, they will be asked a series of four questions:

- "Would you like to include special characters?"
- "Would you like to include numbers?"
- "Would you like to include lowercase characters?"
- "Would you like to include uppercase characters?"

Once all of the prompts are answers, a password of the defined length and characters composition will display in the text box. The password will contain at least one character from each character selection as long as the user selects "OK" for that alert. The user must se;ect at least one character type to generate a password.

Click the "Copy to Clipboard" button to copy the password to the clipboard.

Paste the password in a secure location for your records.

## HTML

The page is created using a combination of HTML, CSS and bootstrap.

## Javascript

The Javascript relies on event listeners, pass through functions, arrays, for loops, Math.random(), and shuffling.

## Licensing

MIT License

Copyright (c) [2019][abby kuranz]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
