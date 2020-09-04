# Problem 1:
# Given a pattern and a string str, determine if str follows the same pattern.
# Example 1
# Input: pattern = "abba", str = "dog cat cat dog"
# Output: true
# Example 2
# Input: pattern = "abba", str = "dog cat cat fish"
# Output: false
# Example 3
# Input: pattern = "aaaa", str = "dog cat cat dog"
# Output: false
# Example 4
# Input: pattern = "abba", str = "dog dog dog dog"
# Output: false
# You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space. Can you solve it in O(N) time and O(1) space?

# We need a hash to keep tracking the pattern and the string, so the key and value will be the same index
# of pattern and string 

# if the key already in the hash, we will false if the value is not equals to the str[i]
# return true otherwise

def pattern_str(pattern, str)
    check = {}
    str = str.split(" ")
    (0...str.length).each do |i|
        if !check.has_key(pattern[i])
            check[pattern[i]] = str[i]
        else
            return false if check[pattern[i]] != str[i]
        end
    end
    true
end
pattern = "abba", str = "dog cat cat dog"
























# Problem 2:
# Given two strings S and T, return if they are equal when both are typed into empty text editors. In this case, # indicates a backspace character.
# Example 1
# Input: S = "ab#c", T = "ad#c"
# Output: true
# Explanation: Both S and T become "ac".
# Example 2
# Input: S = "ab##", T = "c#d#"
# Output: true
# Explanation: Both S and T become "".
# Example 3
# Input: S = "a##c", T = "#a#c"
# Output: true
# Explanation: Both S and T become "c".
# Example 4
# Input: S = "a#c", T = "b"
# Output: false
# Explanation: S becomes "c" while T becomes "b".
# Note:
# 1. 1 <= S.length <= 200
# 2. 1 <= T.length <= 200
# 3. S and T only contain lowercase letters and '#' characters.
# Can you solve it in O(N) time and O(1) space?

# check each char in str S, enter each char into an output str; pop a char off
# if I see a #
# do the same for str T
# compare the two outputs to see if they're equal

def text_check(s, t) #n = s.length, m = t.length; O(n+m)
# Input: S = "a#c", T = "b"
    new_S = ""
    s.each_char do |char| O(n)
        if char != '#'
            new_S << char
        else
            new_S.pop
        end
    end

    new_T = ""  O(m)
    t.each_char do |char|
        if char != '#'
            new_T << char
        else
            new_T.pop
        end
    end

    new_S == new_T
end

# Example 4
# Input: S = "a#c", T = "b"
# Output: false
# Explanation: S becomes "c" while T becomes "b".

def text_check2(s,t)
    i = s.length -1 
    j = t.length -1
    while i != 0 || j != 0
        if s[i] == t[j] && (s[i] != '#' && t[j] != '#')
            i -=1 'a####a'
            j -=1
        elsif s[i] != t[j] && (s[i] != '#' && t[j] != '#')
            return false

        elsif s[i] == '#'

            i -= 1
        
    end
    true
end