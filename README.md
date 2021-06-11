# ChineseConverterJS
# 中文简繁字体转换， 支持普通文本和HTML文本

converts text between Simplified Chinese and Traditional Chinese, HTML text supported.

# API

- toSimplifiedChinese
- toTraditionalChinese
- toTraditionalChineseForHtmlText
- toSimplifiedChineseForHtmlText

# Usage example

```Javascript
let ChineseConverter = require( 'chinese-converter');

let simplifiedText = "迟日江山丽";
let traditionalText = ChineseConverter.toTraditionalChinese(simplifiedText);

console.info(simplifiedText + " -> " + traditionalText);
```
