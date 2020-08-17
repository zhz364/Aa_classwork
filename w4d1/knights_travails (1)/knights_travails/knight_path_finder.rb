require './poly_tree_node.rb'

class KnightPathFinder
  SHIFTS = [
    [-2, 1], [-2, -1], [-1, 2], [-1, -2],
    [2, 1], [2, -1], [1, 2], [1, -2]
  ].freeze

  def self.valid_moves(pos)
    valid_pos = []
    SHIFTS.each do |shift|
      new_pos = [pos[0] + shift[0], pos[1] + shift[1]]
      valid_pos << new_pos if valid_pos?(new_pos)
    end

    valid_pos
  end

  def self.valid_pos?(pos)
    (0..7).include?(pos[0]) && (0..7).include?(pos[1])
  end

  attr_reader   :root_node
  attr_accessor :considered_positions

  def initialize(root_node)
    @root_node = PolyTreeNode.new(root_node)
    @considered_positions = [root_node]
  end

  def new_move_position(pos)
    valid_moves = KnightPathFinder.valid_moves(pos)
    new_positions = valid_moves.reject { |move| considered_positions.include?(move) }
    self.considered_positions += new_positions
    new_positions
  end

  def build_move_tree
    queue = [root_node]

    until queue.empty?
      current_node = queue.shift
      children_pos = new_move_position(current_node.value)
      children_pos.each do |pos|
        next_node = PolyTreeNode.new(pos)
        current_node.add_child(next_node)
        queue << next_node
      end
    end

    nil
  end

  def find_path(end_pos)
    build_move_tree
    target_node = root_node.bfs(end_pos)
    trace_path_back(target_node)
  end

  def trace_path_back(end_node)
    path = [end_node]

    current_node = end_node
    while current_node != root_node
      current_node = current_node.parent
      path << current_node
    end

    path.reverse
  end
end

if __FILE__ == $PROGRAM_NAME
  k = KnightPathFinder.new([0, 0])
  p k.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
  p k.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]
end
