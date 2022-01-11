// import { TreeNode } from '../leetcode/list' // TreeNode

const isPalindromeString = (s) => {
  let isPalindrome = true
  let start = 0
  let end = 2

  for (let index = 0; start < end; index++) {
    start = index
    end = s.length - 1 - index

    if (start !== end && s[start] !== s[end]) {
      isPalindrome = false
    }
  }

  return isPalindrome
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeBad = function (s) {
  if (!s || s.length < 2) {
    return s
  }
  let longestString = ''

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      const subString = s.substring(i, j)

      if (subString.length > longestString.length && isPalindromeString(subString)) {
        longestString = subString
      }
    }
  }

  return longestString
};


function longestPalindrome(s) {
  let len = s.length;
  if (len < 2) {
      return s;
  }

  let maxLen = 1;
  let begin = 0;
  // dp[i][j] 表示 s[i..j] 是否是回文串
  let dp = []

  // 初始化：boolean[len][len]
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(i);
  }
  // 初始化：所有长度为 1 的子串都是回文串
  for (let i = 0; i < len; i++) {
      dp[i][i] = true;
  }

  let charArray = s.split('');

  // 递推开始
  // 先枚举子串长度
  for (let L = 2; L <= len; L++) {
      // 枚举左边界，左边界的上限设置可以宽松一些
      for (let i = 0; i < len; i++) {
          // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
          let j = L + i - 1;
          // 如果右边界越界，就可以退出当前循环
          if (j >= len) {
              break;
          }

          if (charArray[i] != charArray[j]) {
              dp[i][j] = false;
          } else {
              if (j - i < 3) {
                  dp[i][j] = true;
              } else {
                  dp[i][j] = dp[i + 1][j - 1];
              }
          }

          // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
          if (dp[i][j] && j - i + 1 > maxLen) {
              maxLen = j - i + 1;
              begin = i;
          }
      }
  }

  return s.substring(begin, begin + maxLen);
}

export default function () {
  console.log('longestPalindrome', longestPalindrome("bb"));
}
