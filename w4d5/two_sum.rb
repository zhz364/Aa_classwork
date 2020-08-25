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




def two_sum?(arr, target)
    hash = {}
    arr.each_with_index do |ele, i|
        if hash.has_key?(target - ele)
            return true
        end
        hash[ele] = 0
      
    end
    return false
end

arr = [0, 1, 5, 7, 7,7,7]
# p two_sum?(arr,14)






# return index pairs
def two_sum_idx(arr,target)
    hash = {}
    ans = []
    arr.each_with_index do |ele,i|
        if hash.has_key?(target-ele)
            ans << [hash[target-ele],i]
        else
            hash[ele] = i
        end
    end
    ans
end


arr = [0, 1, 5, 9, 14, 13]
p two_sum_idx(arr,14)