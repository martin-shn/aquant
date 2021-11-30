toInt(str){
    res=0
    len = str.length

    for (i=0; i<len; i++){
        
        num=toInt(str[i])
        res+=num*(10**(len-i))
    }
    [10,20,15]
    ['+','*']
    return res
}


toInt('123456') //123456
