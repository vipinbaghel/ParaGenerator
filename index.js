const input = document.getElementById("noofWords");
const container = document.querySelector(".container");


function getWord(){
    const str = "abcdefghijKlmnopqrstuvwxyz";
    let wordsize = Math.random()*10;
    wordsize = parseInt(wordsize,10);
    let word = "";
    for(let i=0; i<wordsize; i++){
        let n = Math.random()*26;
        n = parseInt(n,10);
        word += str.charAt(n);

    }

    const str1 = word.charAt(0).toUpperCase() + word.slice(1);
    return str1;

}
const getData = () => {
    let n = Number(input.value);
    console.log(n);

    let data = "";
    for(let i=0; i<n; i++){
        data += getWord();
        data += " ";
    }
    
    console.log(data);
    
    const p = document.createElement("p");
    p.innerText = data;
    p.setAttribute("class", "paras");
    console.log(container);
    container.append(p);


}