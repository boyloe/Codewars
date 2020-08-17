require 'pry'

#8-7-2020 "Opposite Number"
def opposite (num)
    num * -1
   end
##``   

#8-11-2020 "Counting Sheep" -Given an array where true means as sheep is present, count the number of sheep.
def countSheeps array
    array.count(true)
end

#8-11-2020 "Dubstep"
def song_decoder(song)
    song.gsub(/(WUB)+/, ' ').strip
end

#8-12-2020 "Is this a triangle"
def isTriangle(a,b,c)
    a+b>c && a + c > b && b + c > a ? true : false
end

#Clever solution to triangle 
# def isTriangle(a,b,c)
#     a, b, c = [a, b, c].sort
#     a + b > c
# end

#8-12-2020 "Reverse String"
def solution(str)
    str.reverse
end

#8-13-2020 "Your order, please"
def order(words)
    words.split.sort_by{ |w| w[/\d/] }.join(' ')
  end
#08-14-2020 "Sum of positive"
def positive_sum(arr)
    arr != [] ? arr.select {|num| num > 0}.sum()  : 0
end

#08-14-2020 "7kyu - Reverse Words"
def reverse_words(str)
    str.scan(/(\s*)(\S+)(\s*)/).map { |space1, word, space2| space1 + word.reverse + space2}.join
end
  

#08-17-2020 "7kyu - Two to one"
def longest(a1, a2)
    (a1.split("") + a2.split("")).uniq.sort.join("")
end

#08-17-2020 "7kyu - Square every digit"
def square_digits num
  num_string = num.to_s.split("")
  num_string.map do |digit|
    (digit.to_i ** 2).to_s
    binding.pry
  end
  num_string.join("").to_i
end

#better solution to Square every digit
# def square_digits num
#   num.to_s.chars.map{|x| x.to_i**2}.join.to_i
# end