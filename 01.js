var arr = ['lixihong','sunyanlong','jiayou','aini']
arr.forEach(function(e,index){
    if(index == 0){

    }else{
        e = e.slice(1,e.length)
    }
    console.log(
        querystring.parse(e)
    )
})