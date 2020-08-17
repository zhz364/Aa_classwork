require './poly_tree_node.rb'
class KnightPathFinder
  SHIFTS = [
    [-2, 1], [-2, -1], [-1, 2], [-1, -2],
    [2, 1], [2, -1], [1, 2], [1, -2]
  ]

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

  attr_reader :root_node

  def initialize(root_node)
    @root_node = PolyTreeNode.new(root_node)
    @considered_positions = [root_node]
  end

  # this should call the ::valid_moves class method,
  # but filter out any positions that are already in @considered_positions.
  # It should then add the remaining new positions to @considered_positions
  # and return these new positions.
  def new_move_position(pos)
    valid_moves = KnightPathFinder.valid_moves(pos)
    new_positions = valid_moves.reject { |move| @considered_positions.include?(move) }
    @considered_positions += new_positions
    new_positions
  end
end

#    0 1 2 3 4 5 6 7
#   _________________
# 0 | | | | | | | | |
#   _________________
# 1 | | |o| |o| | | |
#   _________________
# 2 | |o| | | |o| | |
#   _________________
# 3 | | | |x| | | | |
#   _________________
# 4 | |o| | | |o| | |
#   _________________
# 5 | | |o| |o| | | |
#   _________________
# 6 | | | | | | | | |
#   _________________
# 7 | | | | | | | | |
#   _________________

# root = [3, 3]
# move1 = [3 - 2, 3 + 1] = [1, 4]
# move2 = [3 - 2, 3 - 1] = [1, 2]

# move3 = [3 - 1, 3 + 2] = [2, 5]
# move4 = [3 - 1, 3 - 2] = [2, 1]

# move5 = [3 + 2, 3 + 1] = [5, 4]
# move6 = [3 + 2, 3 - 1] = [5, 2]

# move7 = [3 + 1, 3 + 2] = [4, 5]
# move8 = [3 + 1, 3 - 2] = [4, 1]
