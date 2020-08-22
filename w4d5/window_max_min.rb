def windowed_max_range(arr,n)
    current_max_range = 0
    i = 0
    j  = n - 1
    
    while j < arr.length
        min = arr[i..j].min
        max = arr[i..j].max
        if max - min > current_max_range
            current_max_range = max-min
        end
        i+=1
        j+=1
    end
    current_max_range
end

p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

class MyQueue
    attr_reader :store
    def initialize
      @store = []
    end

    def peek
        @store[0]
    end

    def empty?
        @store.empty?
    end

    def enqueue(ele)
        @store << ele
    end

    def dequeue
        @store.shift
    end

end

class MyStack   
    def initialize
      @store = []
    end

    def peek
        @store[-1]
    end

    def empty?
        @store.empty?
    end

    def push(ele)
        temp = {}
        if @store.empty?
            temp[:curr] = ele
            temp[:min] = ele
            temp[:max] = ele 
        else
            temp[:curr] = ele
            if ele > @store[-1][:min]
                temp[:min] = @store[-1][:min]
            else
                temp[:min] = ele
            end
            if ele > @store[-1][:max]
                temp[:max] = ele
            else
                temp[:max] = @store[-1][:max] 
            end
        end
        @store<<temp
    end

    def pop
        @store.pop
    end
end

class StackQueue

    def initialize
        @in_q = Stack.new
        @out_q = Stack.new
    end

    def size
        @in_q.length + @out_q.length
    end

    def empty?
        @in_q.empty? && @out_q.empty?
    end

    def enqueue(ele)
        @in_q.push(ele)
    end

    def dequeue
        if @out_q.empty?
            until @in_q.empty?
                temp = @in_q.pop
                @out_q.push(temp)
            end
        end
        @out_q.pop
    end
end


class MinMaxStack
    def initialize
        @store = MyStack.new
    end

    def peek
        @store.peek
    end

    def empty?
        @store.empty?
    end

    def max
        @store.peek[:max]
    end

    def min 
        @store.peek[:min]
    end

    def pop
        @store.pop
    end

    def push(ele)
        @store.push(ele)
    end
end

class MinMaxStackQueue
    def initialize
        @in_q = MinMaxStack.new
        @out_q = MinMaxStack.new
    end

    def enqueue(ele)
        @in_q.push(ele)
    end

    def dequeue
        if @out_q.empty?
            until @in_q.empty?
                temp = @in_q.pop
                @out_q.push(temp[:curr])
            end
        end
        @out_q.pop
    end

    def min
        if @out_q.empty?
            return @in_q.min
        else
            [@in_q.min,@out_q.min].min
        end
    end

    def max
        if @out_q.empty?
            return @in_q.max
        else
            [@in_q.max,@out_q.max].max
        end
    end

end

def better_windowed_max_range(arr,window)
    max_seen = Float::INFINITY * -1
    count = 0
    q = MinMaxStackQueue.new
    arr.each do |ele|   
        if count < window
            q.enqueue(ele)
            count +=1
        else
            temp_min = q.min
            temp_max = q.max
            if temp_max - temp_min > max_seen
                max_seen = temp_max - temp_min
            end
            q.dequeue
            q.enqueue(ele)
        end
    end
    temp_min = q.min
    temp_max = q.max
    if temp_max - temp_min > max_seen
        max_seen = temp_max - temp_min
    end
    max_seen
end

# p better_windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
# p better_windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
# p better_windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
# p better_windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8