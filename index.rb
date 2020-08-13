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
