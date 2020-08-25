class MaxIntSet

  attr_reader :store
  def initialize(max)
    @store = []
    @max = max
    (0...max).each do |i|
      @store << false
    end
  end

  def insert(num)
    raise "Out of bounds" if num > @max
    raise "Out of bounds" if num < 0
    @store[num] = true
  end

  def remove(num)
    raise "Out of bounds" if num > @max
    raise "Out of bounds" if num < 0
    @store[num] = false
  end

  def include?(num)
    raise "Out of bounds" if num > @max
    raise "Out of bounds" if num < 0
    @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    i = num % 20
    @store[i] << num
  end

  def remove(num)
    i = num % 20
    @store[i].delete(num)
  end

  def include?(num)
    i = num % 20
    @store[i].include?(num)
  end

  private

  def [](pos1=0, pos2=0)
    # optional but useful; return the bucket corresponding to `num`
    @store[pos1][pos2]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
    @buckets = num_buckets
  end

  def insert(num)
    if count == @store.length
      resize!
    end
    
    i = num % num_buckets
    return if @store[i].include?(num)
    @store[i] << num
    @count += 1
  end

  def remove(num)
    i = num % num_buckets
    if @store[i].include?(num)
      @store[i].delete(num)
      @count -= 1 
    else
      return
    end
  end

  def include?(num)
    i = num % num_buckets
    return true if @store[i].include?(num)
    false
  end

  private

  def [](pos1=0, pos2=0)
    # optional but useful; return the bucket corresponding to `num`
    @store[pos1][pos2]
  end
  def num_buckets
    @store.length 
  end

  def resize!
    temp = Array.new(num_buckets * 2) { Array.new } 
    dup = @store.flatten
    dup.each do |el|
      i = el % (num_buckets * 2)
      temp[i] << el
    end
    @store = temp
  end
end