require_relative 'p04_linked_list'

class HashMap
  include Enumerable
  attr_accessor :count, :store

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end
  
  def include?(key)
    hx = key.hash
    i = hx % num_buckets
    if @store[i].include?(key)
      
      return true
    end
    false
  end

  def set(key, val)
    if @count == num_buckets
      resize!
    end
    
    hx = key.hash
    i = hx % num_buckets
    if @store[i].include?(key)
      @store[i].update(key,val)
      return
    end
    @store[i].append(key, val)
    @count += 1
  end

  def get(key)
    hx = key.hash
    i = hx % num_buckets
    @store[i].get(key) 
    
  end

  def delete(key)
    hx = key.hash
    i = hx % num_buckets
    @store[i].remove(key)
    @count -= 1
  end

  def each
    
    @store.each do |el|
      el.each do |node|
        yield [node.key, node.val]
      end
    end
   
  end

  
  def to_s
    pairs = inject([]) do |strs, (k, v)|
      strs << "#{k.to_s} => #{v.to_s}"
    end
    "{\n" + pairs.join(",\n") + "\n}"
  end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    dup = self.store
    self.count = 0
    @store =  Array.new(num_buckets * 2) { LinkedList.new }
    dup.each do |el|
      el.each do |node|
        set(node.key, node.val)
      end
    end
    
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
  end
end


