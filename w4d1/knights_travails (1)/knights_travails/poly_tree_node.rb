class PolyTreeNode
  attr_reader   :value, :parent
  attr_accessor :children

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
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
    raise 'node is not a child' if child_node.parent.nil?

    child_node.parent = nil
  end

  def dfs(target_value)
    return self if value == target_value

    children.each do |child|
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

      queue.concat(current_node.children)
    end

    nil
  end
end
