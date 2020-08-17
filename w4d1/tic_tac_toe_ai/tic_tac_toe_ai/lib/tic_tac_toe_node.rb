require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board
  attr_accessor :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if board.over?
      if board.won?
        return board.winner == evaluator ? false : true
      else
        return false
      end
    end

    if evaluator == next_mover_mark
      children.all? { |child| child.losing_node?(evaluator) }
    else
      children.any? { |child| child.losing_node?(evaluator) }
    end
  end

  def winning_node?(evaluator)
    return board.winner == evaluator if board.over?

    if evaluator == next_mover_mark
      children.any? { |child| child.winning_node?(evaluator) }
    else
      children.all? { |child| child.winning_node?(evaluator) }
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    children = []

    (0..2).each do |i|
      (0..2).each do |j|
        pos = [i, j]
        next unless @board.empty?(pos)

        new_board = @board.dup
        new_board[pos] = next_mover_mark

        if next_mover_mark == :x
          next_mover_mark = :o
        else
          next_mover_mark = :x
        end

        children << TicTacToeNode.new(new_board, next_mover_mark, pos)
      end
    end

    children
  end
end
