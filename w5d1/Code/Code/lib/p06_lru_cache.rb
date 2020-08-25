require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  attr_reader :max, :prc

  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    map.count
  end

  def get(key)
    if map[key]
      node = map[key]
      update_node!(node)
      node.val
    else
      calc!(key)
    end
  end

  def to_s
    'Map: ' + @map.to_s + '\n' + 'Store: ' + @store.to_s
  end

  private
  attr_reader :store, :map
  def calc!(key)
    temp = self.prc.call(key)
    newnode = store.append(key, temp)
    map[key] = newnode
    eject! if count > self.max
    temp
  end

  def update_node!(node)
    node.remove 
    map[node.key] = @store.append(node.key, node.val)
  end

  def eject!
    node_to_delete = store.first
    node_to_delete.remove
    map.delete(node_to_delete.key)
    nil
  end
end

# describe LRUCache do
#   describe "#get" do
#     let(:prc) { double }

#     it "should call the given proc for uncached inputs" do
#       lru = LRUCache.new(3, prc)

#       1.upto(3) do |i|
#         square = i ** 2
#         expect(prc).to(
#           receive(:call).exactly(1).times.with(i).and_return(square)
#         )
#         expect(lru.get(i)).to eq(square)
#       end
#     end

#     it "should not call the proc for cached inputs" do
#       lru = LRUCache.new(3, prc)

#       expect(prc).to receive(:call).exactly(3).times

#       3.times do
#         1.upto(3) { |i| lru.get(i) }
#       end
#     end

#     it "should eject least recently used items out of cache" do
#       lru = LRUCache.new(3, prc)

#       expect(prc).to receive(:call).exactly(2).times.with(0)
#       1.upto(3) do |i|
#         expect(prc).to receive(:call).exactly(1).times.with(i)
#       end

#       lru.get(0) # cached: 0

#       expect(
#         lru.instance_variable_get(:@store).map { |l| l.key }
#       ).to eq([0])

#       1.upto(3) { |i| lru.get(i) } # cached: 1, 2, 3

#       expect(
#         lru.instance_variable_get(:@store).map { |l| l.key }
#       ).to eq([1, 2, 3])

#       lru.get(0) # cached: 2, 3, 0

#       expect(
#         lru.instance_variable_get(:@store).map { |l| l.key }
#       ).to eq([2, 3, 0])

#       lru.get(2) # cached: 3, 0, 2

#       expect(
#         lru.instance_variable_get(:@store).map { |l| l.key }
#       ).to eq([3, 0, 2])

#       lru.get(3) # cached: 0, 2, 3

#       expect(
#         lru.instance_variable_get(:@store).map { |l| l.key }
#       ).to eq([0, 2, 3])
#     end

#     it "should update the map to point at the new node" do
#       lru = LRUCache.new(3, prc)

#       1.upto(3) do |i|
#         expect(prc).to(
#           receive(:call).exactly(1).times.with(i).and_return(i)
#         )
#         lru.get(i)
#       end

#       lru.get(2)
#       list = lru.instance_variable_get(:@store)
#       map = lru.instance_variable_get(:@map)
#       expect(list.last).to be(map[2])
#     end
#   end
# end
