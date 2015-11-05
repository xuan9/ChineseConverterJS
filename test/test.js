var assert = require('assert');
var cc = require('../ChineseConverter');
var simplified  = '。，梅兰竹菊 hello 琴棋书画123456790QWERTGHJKSDFGHJM<>－－';
var traditional = '。，梅蘭竹菊 hello 琴棋書畫123456790QWERTGHJKSDFGHJM<>－－';

describe('ChineseConverter', function() {
  describe('#toSimplifiedChinese()', function () {
    it('should return ' + simplified + ' when the source is ' + traditional, function () {
      assert.equal(simplified, cc.toSimplifiedChinese(traditional));
    });
  });
  describe('#toTraditionalChinese()', function () {
    it('should return ' + traditional + ' when the source is ' + simplified, function () {
      assert.equal(traditional, cc.toTraditionalChinese(simplified));
    });
  });
});
