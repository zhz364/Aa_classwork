require "byebug"
# two_sum?
# Given an array of unique integers and a target sum, determine whether any two integers in the array sum to that amount.

# def two_sum?(arr, target_sum)
#     # your code here...
# end

arr = [0, 1, 5, 7]
# two_sum?(arr, 6) # => should be true
# two_sum?(arr, 10) # => should be false

# STEP 1
# Brute force method
def bad_two_sum?(arr, target) # O(n**2)
    new_arr = []
    arr.each_with_index do |ele1, idx1|
        (idx1+1...arr.length).each do |idx2|
            new_arr << [ele1, arr[idx2]]
        end
    end
    new_arr.any? { |pair| pair[0]+pair[1] == target }
end

# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 2)

# STEP 2
# Sorting method

def okay_two_sum?(arr, target)
    sorted = arr.sort #O(nlogn)

    i = 0
    j = arr.length - 1
    while i < j
        # arr = [0, 1, 5, 7]
        case arr[i] + arr[j] <=> target
        when -1
            i += 1
        when 0
            return true
        when 1
            j -= 1
        end
    end
    return false

    # [0, 1, 3, 5, 6, 7] target = 8
    # 0, 7 false 
    # 1, 7 true

    # [1, 3, 5, 7, 9] target = 8
    # 1, 9 false
    # 1, 7 true

    # if i+j > target, j-1
    # if i+j < target, i+1
end

arr = [0, 1, 5, 7]
# p okay_two_sum?(arr,12)

# target = 6
# = 6+0
# = 5+1
# = 4+2
# = 3+3


# 1,2,3,4,5,6,7 | 6
# 1 = mid 
# 2,3,4 = left
# 5,6,7 = right


# STEP 3
# Hash map
def two_sum?(arr, target)
    hash = {}
    arr.each_with_index do |ele, i|
        if hash.has_key?(target - ele)
            return true
            # return [hash[target - ele], i]
        end
        hash[ele] = 0
        # hash[ele] = i
            # result = target - ele
            # if (result.object_id != ele.object_id) && result + ele == target
            #     return true
            # end
    end
    return false
end
# hash = {14 = 0, 13 = 0, 9 = 0, 7= 0}
arr = [0, 1, 5, 7, 7,7,7]
p two_sum?(arr,14)
# hash = { k=v, k=v, k=v }
# hash = { 0=x, 1=x, 5=x, 7=x }
# arr.each do |ele|
# if hash.has_key?(target - ele)