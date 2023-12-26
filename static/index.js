
$(document).ready(function () {
    getWord();
})

function getWord() {
    
    $.ajax({
        url : "/get_word",
        type : "get",
        success : function(words){
            console.log(words)
            displayWord(words[0]["word"])

        },
        error:function(e){
            console.log(e)
        }
    })
		
}

var gameOver = false



function displayWord(word) {
    $("#hint").append(word.category)

    $("#blanks").empty();
    for (let i = 0; i < word.inputs; i++) {
        let html = `<span id="blank${i}" > _ </span>`
        $("#blanks").append(html)
    }

    var life = parseInt($("#life").text())

    $(".clickable").click(function(){
        console.log("called")
        correct = false
        var i
        let id = $(this).attr("id")
        console.log(id)
    

        for(i = 0 ;i < word.word.length;i++){
            console.log(i)
            if(word.word.charAt(i).toLowerCase() == id){
                console.log("yes")
                console.log($(`#blank${i}`).html())
                if(life > 0 && ($(`#blank${i}`).html() == " _ " || $(`#blank${i}`).html() == id)){
                    console.log("yes1")
                    $(`#blank${i}`).html(id)
                    correct = true
    
                }
            }
        }

        if(!correct){
            $("#result").text("Incorrect Guess")
            life -= 1
            $("#life").text(life)
        }
        else{
            $("#result").text("Correct Guess")
        }
        
        if($("#blanks").text() == word.word.toLowerCase()){
            $("#result").text("You won ! ")
            gameOver = true
        }
        else if(life == 0){
            $("#result").text("You loose ! ")
            alert(" | \n | \n O \n/|\\ \n/ \\ ")
        }

    })

}
