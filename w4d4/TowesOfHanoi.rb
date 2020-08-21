class TowersOfHanoi
    attr_accessor :board
    def initialize(arr=nil)
        arr ||= [[1,2,3], [] ,[]]
        @board = arr
    end 
    # t = TowersOfHanoi.new([[],[],[1,2,3]])
    # t.won?

    class MoveError < StandardError
    end 

    def move
        until won?
            begin
                puts "Where do you want to pull from"
                inputs1 = gets.chomp.to_i
                puts "Where do you want to place disk"
                inputs2 = gets.chomp.to_i
                valid_move?([inputs1, inputs2])
                temp = @board[inputs1].shift
                @board[inputs2].unshift(temp)
            rescue MoveError
                p "Invalid move"
                retry
            end 
            self.render
        end     
    end 

    def render 
        @board.each do |rows|
            p rows
        end 
    end 

    def valid_move?(position)
        if @board[position[1]].empty?
            return true 
        elsif @board[position[0]][0] < @board[position[1]][0]
            return true 
        end 
        raise MoveError.new()
    end 

    def won?
        if @board.last == [1,2,3]
            puts "you won!"
            return true
        end 
        return false 
    end 
end

b = TowersOfHanoi.new
b.render 
b.move

# def reaction(maybe_fruit)
#     if FRUITS.include? maybe_fruit
#       puts "OMG, thanks so much for the #{maybe_fruit}!"
#     elsif  maybe_fruit == "coffee"
#       raise CoffeeError
#     else
#       raise FruitError
#     end 
#   end
  
#   def feed_me_a_fruit
#     puts "Hello, I am a friendly monster. :)"
#     begin 
#       puts "Feed me a fruit! (Enter the name of a fruit:)"
#       maybe_fruit = gets.chomp
#       reaction(maybe_fruit) 
#       rescue CoffeeError => e
#         e.message 
#         retry 
#       rescue FruitError => e 
#         e.message 
#         retry 
#     end
#   end  


