def string_count(str)
    if str.class == String
        p str.gsub(/[^a-zA-Z\s]/i, '').split.size
    else
        puts "please input string"
    end
end
s1 = "INNER JOIN's is the (same as) JOIN; the keyw?ord! INNER? 10 is optional."
string_count(s1)