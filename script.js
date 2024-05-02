function copy(copyId){
    let text2copy = document.getElementById(copyId)
    navigator.clipboard.writeText(text2copy.value);

}