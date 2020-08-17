class PolyTreeNode
  require "byebug"
  attr_reader :value, :parent, :children, :visited
  attr_writer :children, :visited

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
    @visited = false
  end

  def inspect
    @value.inspect
  end

  def parent=(node)
    @parent.children.delete(self) unless @parent.nil?

    @parent = node
    node.children << self unless node.nil?
  end

  def add_child(child_node)
      child_node.parent = self
  end

  def remove_child(child_node)
    raise "node is not a child" if child_node.parent.nil?

    child_node.parent = nil
  end


  def dfs(target_value)
    return self if self.value == target_value

    self.visited = true
    self.children.each do |child|
      next if child.visited

      search_result = child.dfs(target_value)
      return search_result unless search_result.nil?
    end
    nil
  end

  def bfs(target_value)
    queue = [self]

    until queue.empty?
      current_node = queue.shift
      return current_node if current_node.value == target_value

      current_node.children.each do |child|
        return child if child.value == target_value

        queue += child.children
      end
    end

    nil
  end
end

#       1
#      / \
#     2   5
#    /   / \
#   3   6   9
#  /   / \
# 4   7   8
