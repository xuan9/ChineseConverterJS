# ChineseConverterJS
converts text between Simplified Chinese and Traditional Chinese

###API
- toSimplifiedChinese
- toTraditionalChinese
- toTraditionalChineseForHtmlText
- toSimplifiedChineseForHtmlText

###Example
```Javascript
let ChineseConverter = require( 'chinese-converter');

let simplifiedText = "迟日江山丽";
let traditionalText = ChineseConverter.toTraditionalChinese(simplifiedText);

console.info(simplifiedText + " -> " + traditionalText);
```
