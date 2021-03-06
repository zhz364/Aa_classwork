# # Phase Bonus: Dynamic Array
# # You're probably used to working with Ruby's Array class by now. It's very convenient, and chock full 
# of optimized methods. But it's a little too magical for data structure adventurers like us, so we're
#  going to build Ruby's entire Array class from scratch.

# # This is getting into some serious stuff now, so don't try this at home (and you probably won't 
# want to use your home-spun Array class in production; we are doing this for the sake of knowledge 
# and discovery only!)

# # Let's pull back the hood a bit.

# # Ruby is written in C. C is a very low-level language, which means it's much closer to machine code 
# than Ruby itself is. In Ruby, we never have to deal with things like garbage collection or
#  memory management--we never have to tell Ruby "hey, I'm never going to use this hash again, 
#  so please delete it from memory", but Ruby knows to do it for you. This is because some machinery 
#     inside of Ruby is taking care of all of the little details for you.

# # Similarly, underlying all of the flexibility and convenience of 
# the Ruby Array data structure, there is a more rigid and constraining data structure: the C array.

# # C arrays are extremely simple. Each one is basically a row of buckets.
#  C arrays must have their memory allocated before-hand, and they never change 
#  in size. You can jump into any bucket in that array in O(1) time, and you can put 
#  anything into that bucket. And that's it. The API is overwhelmingly simple. For our purposes,
#   there's no push, no pop, no each or includes?. In fact, you can't even just add a bunch of items
#    to the array—you have to know beforehand how many items you want the array to ever hold, otherwise
#     you'll get overflow errors (i.e., a bad time).

# # Ruby is nice, so Ruby decided to build a pretty little Array class on top of C's array. 
# But this array doesn't require you to know how big the underlying array will ever need to be—instead,
#  Ruby's arrays resize dynamically, just like the hash maps we built.

# # By now you know the drill. Let's build this thing.

# # C arrays are not exposed to you in Ruby, so we can't work directly with them to rebuild Ruby's
#  dynamic array. But to simulate the exercise, we've exposed to you a StaticArray class. StaticArray
#   mimics a C array (and, as you now know, contains one underneath the hood). Use the StaticArray class
#    from the skeleton's last file to build your dynamic array.

# # Get to it. Specs await.

# # Super-bonuses
# # Power up your dynamic array so that it uses a ring buffer. This will allow you to shift 
# and unshift in O(1) time, while minimizing your space usage. The math here is tricky; lots of 
# modulo division and keeping track of a @start_idx. But once you have this, you've got the dynamic array mastered.

# # Augment your hash map so that it retains insertion order (Ruby hashes began retaining insertion
#  order after Ruby 1.9). In order to pull this off, you'll have to add an additional data structure. 
#  See if you can figure it out! Test it using your #each and see if the original order is retained after
#   reassignments.

class StaticArray
  attr_reader :store

  def initialize(capacity)
      @store = Array.new(capacity)
  end

  def [](i)
      validate!(i)
      self.store[i]
  end

  def []=(i, val)
      validate!(i)
      self.store[i] = val
  end

  def length
      self.store.length
  end

  private

  def validate!(i)
      raise "Overflow error" unless i.between?(0, self.store.length - 1)
  end
  end

  class DynamicArray
  attr_accessor :store

  def initialize(capacity = 8)
      @store = StaticArray.new(capacity)
      @count = 0
      @len = capacity
  end

  def count
      n = 0
      count = 0
      while n < capacity
          count += 1 if @store.store[n] != nil
          n += 1
      end
      count
  end
  def [](i)
      return nil if validate!(i) == false
      self.store[i]
  end

  def []=(i, val)
      @store.store[i] = val
  end

  def capacity
      @store.length
  end

  def include?(val)
      @store.store.each do |el|
          return true if el == val
      end
      false
  end

  def push(val)
      i = @store.length
      n = 0
      while n < i 
          if @store[n] == nil
              @store[n] = val
              return
          end
          
          n += 1
      end
      
  end

  def unshift(val)
      temp = @store.store.dup
      leng = @len
      @store = StaticArray.new(leng)
      push(val)
      n = 0
      while n < leng
          push(temp[n])
          n += 1
      end

  end

  def pop
    return nil if count == 0
    temp = @store[count()-1]
    @store[count()-1] = nil
    temp 
  end

  def shift
      temp = @store.store.dup
      leng = @len
      x = @store.store[0]
      @store = StaticArray.new(leng)
      
      n = 1
      while n < leng 
          push(temp[n])
          n += 1
      end
      x
  end

  def first
    @store[0]
  end

  def last
    @store[count-1]
  end

  def each
  end

  def to_s
      "[" + inject([]) { |acc, el| acc << el }.join(", ") + "]"
  end

  def ==(other)
      return false unless [Array, DynamicArray].include?(other.class)
      # ...
  end

  alias_method :<<, :push
  [:length, :size].each { |method| alias_method method, :count }

  private

  def validate!(i)
      return false unless i.between?(0, @store.store.length - 1)
      true
  end

  def resize!
  end
end
