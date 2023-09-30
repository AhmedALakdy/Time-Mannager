
let list = []


function btn (){
    const matter = document.getElementById("matter").value
    console.log(matter)

    const description = document.getElementById("description").value
    console.log(description)


    list.push(`${matter}(${description})`)
    console.log(list)
}

function gen (list){
        list.sort(() => Math.random() - 0.5);
        console.log(list)

        var number = list.length
        document.getElementById("outputText").innerHTML="";
        for (let i = 0 ; i < number ; i++){
            document.getElementById("outputText").append(`-${list[i]}`)
            x = document.createElement('br')
            document.getElementById("outputText").appendChild(x)
            
        }
}