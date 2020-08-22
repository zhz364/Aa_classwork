# Phase I
# First, write a function that compares each element to every other element of the list. Return the element if all other elements in the array are larger.
# What is the time complexity for this function?

def my_min(arr)
    # min = 0

    # arr. i1
    # arr. i2

    min = arr[0]
    (0...arr.length).each do |i1|
        (i1...arr.length).each do |i2|
            if arr[i2] < arr[i1] && arr[i2] < min
                min = arr[i2]
            end
        end
    end
    min
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

# Phase II
# Now rewrite the function to iterate through the list just once while keeping track of the minimum. What is the time complexity?

def faster_min(arr)
    min = arr[0]

    (1..arr.length - 1).each do |i|
        if arr[i] < min
            min = arr[i]
        end
    end

    # arr.each do |ele|
    #     if ele < min
    #         min = ele
    #     end
    # end

    min
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p faster_min(list)  # =>  -5

# Largest Contiguous Sub-sum

# You have an array of integers and you want to find the largest contiguous (together in sequence) sub-sum. Find the sums of all contiguous sub-arrays and return the max.

# Phase I
# Write a function that iterates through the array and finds all sub-arrays using nested loops. First make an array to hold all sub-arrays. Then find the sums of each sub-array and return the max.

def largest_contiguous_subsum(list)
    pairs = []
    max = list.first
    # list.each_with_index do |el1, i1|
    #     temp = [el1]
    #     (i1+1...list.length).each do |i2|
    #         temp << list[i2]
    #         pairs << temp
    #         p pairs
    #     end
    # end
    list.each_with_index do |ele1,i1|
        pairs << [ele1]
        list.each_with_index do |ele2,i2|
            if i2 > i1
                pairs << list[i1..i2]
            end
        end
    end
  
    pairs.each do |pair|
        if pair.sum > max
            max = pair.sum
        end
    end

    # pairs
    max
end

list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list) # => 8

# # possible sub-sums
# [5]           # => 5
# [5, 3]        # => 8 --> we want this one
# [5, 3, -7]      => 1
# [3]           # => 3
# [3, -7]       # => -4
# [-7]          # => -7

# Phase II
# Let's make a better version. Write a new function using O(n) time with O(1) memory. Keep a running tally of the largest sum. To accomplish this efficient space complexity, consider using two variables. One variable should track the largest sum so far and another to track the current sum. We'll leave the rest to you.

def faster_largest_contiguous_subsum(list)
    # i = 0
    # j = list.length - 1
    largest_sum = list.first # 7
    curr_sum = list.first # 7
    # list = [2, 3, -6, 7, -6, 7]
    (1...list.length).each do |i|
        # if curr_sum < 0
        #    curr_sum = 0
        # end
        # curr_sum += list[i]
        # if curr_sum > largest_sum
        #     largest_sum = curr_sum
        # end
        if curr_sum + list[i] > list[i]
            curr_sum += list[i]
        else
            curr_sum = list[i]
        end
        if largest_sum < curr_sum
            largest_sum = curr_sum
        end
    end
    # i = 0
    # j = list.length -1
    # until i == j
    #     list[i..j].each |ele|
    #     curr_sum = list[i..j].sum
    #     if curr_sum > largest_sum
    #         largest_sum = curr_sum
    #     end
    #     i+=1
    # end
    largest_sum
end

list = [2, 3, -6, 7, -6, 7]

# [2, 3, -6, 7, -6, 7].sum
# [3, -6, 7, -6, 7].sum
# [-6, 7, -6, 7].sum
# [7, -6, 7].sum
p faster_largest_contiguous_subsum(list)
# var1 = largest sum so far
# var1 = 8
# var2 = tracks current sum
# var2 = 8