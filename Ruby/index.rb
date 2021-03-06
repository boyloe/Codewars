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

#08-18-2020 '6kyu - IQ Test
def iq_test(numbers)
    nums = numbers.split.map(&:to_i).map(&:even?)
    nums.count(true) > 1 ? nums.index(false) + 1 : nums.index(true) + 1
end

#08-21-2020 '7kyu - List Filtering'
def filter_list(l)
    new_list = []
        l.map do |item|
            if item.class != String
            new_list << item
            end          
        end 
    new_list
end

#better solution for 'List Filtering' from ryanbraganza
def filter_list l
    l.reject { |x| x.is_a? String}
end

#08-25-2020 '6kyu - Title Case'
def title_case(title, minor_words = "")
    if title == nil
        return nil
    else    
    minor_words_array = minor_words.split(' ').map do |word|
      word.downcase
    end        
    title_array = title.split(" ").map do |word|
      word.downcase
    end  
    titled = title_array.map do |word|    
        if !minor_words_array.include?(word)
            word.capitalize        
        else 
            word.downcase        
        end
      end 
      titled[0] = titled[0].capitalize    
      titled.join(" ")
      binding.pry
    end
end

#better solution for '6kyu - Title Case' given by zishe and others
def title_case(title, minor_words = '')
    title.capitalize.split().map{|a| minor_words.downcase.split().include?(a) ? a : a.capitalize}.join(' ')
end

#08-26-2020 "7kyu - You're a Square"
def is_square(x)
x < 0 ? false : Math.sqrt(x) % 1 == 0
    
end

#08-26-2020 "7kyu - Exes and Ohs"
def XO(str)
    exes = str.downcase.count('x')
    ohs = str.downcase.count('o')
    exes == ohs ? true : false
end
