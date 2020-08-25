class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    return 0.hash if self == []
    # self.each 
    acc = 0
    self.each_with_index do |el, index|
      acc += (el.hash * (index + 1))
    end
    acc
  end
end

class String
 
  # capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  def hash
    cipher = ("a".."z").to_a
    temp = 0
    count = 1
    self.each_char do |char|
      temp += (cipher.index(char.downcase) + 1) * count if cipher.include?(char.downcase)
      count += 1
    end
    temp
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
   keys = self.keys
   values = self.values
   final = keys.sort + values.sort
   acc = 0
   final.each do |el|
    acc += el.hash
   end
   acc
  end
end

