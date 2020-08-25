class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    @prev.next = @next if self.prev
    @next.prev = @prev if self.next
    self.prev = nil 
    self.next = nil
  end
end

class LinkedList
  include Enumerable
  attr_reader :head, :tail
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
    @count = 2
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    # return true if @count ==  2
    # false
    # # return true if @head.next.key == @tail.key && (@tail.prev).val == @head.val
    # # false
    self.head.next == self.tail
    
  end

  def get(key)
    temp = @head.next
    while temp != @tail
      return temp.val if temp.key == key
      temp = temp.next
    end

    nil
  end

  def include?(key)

    temp = @head.next
    while temp != @tail
      return true if temp.key == key
      temp = temp.next
    end

    false
  end

  def append(key, val)
    new_node = Node.new(key, val)

    self.tail.prev.next = new_node
    new_node.prev = self.tail.prev
    new_node.next = self.tail
    self.tail.prev = new_node
    new_node
  end
  
  def update(key, val)
    temp = @head.next
    while temp != @tail
      temp.val = val if temp.key == key
      temp = temp.next
    end

  end

  def remove(key)
    temp = @head.next
    bool = true
    while temp != @tail && bool == true
      bool = false if temp.key == key
      temp.remove if temp.key == key
      temp = temp.next
    end
  end

  def each
    active = self.head.next
    while active != self.tail
      yield active
      active = active.next
    end

  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
#     end

#     it "returns nil for absent keys" do
#       expect(list.get(:absent_key)).to be_nil
#     end
#   end

#   describe "#remove" do
#     it "removes a node by key" do
#       expect(list.get(:first)).to eq(1)
#       list.remove(:first)
#       expect(list.get(:first)).to be_nil
#     end

#     it "reassigns pointers when nodes are removed" do
#       list.remove(:second)

#       expect(list.first.next.key).to be(:third)
#       expect(list.last.prev.key).to be(:first)
#     end
#   end

#   describe "#include?" do
#     it "returns true if a key is present" do
#       expect(list.include?(:first)).to be true
#     end

#     it "returns false if a key is not in the list" do
#       expect(list.include?(:fourth)).to be false
#     end
#   end

#   describe "#[]" do
#     it "can look up nodes by index" do
#       expect(list[0].key).to eq(:first)
#       expect(list[1].key).to eq(:second)
#       expect(list[2].key).to eq(:third)
#     end
#   end

#   it "includes Enumerable module" do
#     expect(list.class.ancestors).to include(Enumerable)
#   end
# end
