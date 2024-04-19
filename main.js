const button_FIFO = document.getElementById("button_FIFO");
button_FIFO.addEventListener("click", addFIFO);

const button_LIFO = document.getElementById("button_LIFO");
button_LIFO.addEventListener("click", addLIFO);

const button_run_FIFO = document.getElementById('run_FIFO')
button_run_FIFO.addEventListener("click", runFIFO)

const button_run_LIFO = document.getElementById('run_LIFO')
button_run_LIFO.addEventListener("click", runLIFO)

let counterFIFO = 0;

function addFIFO(){
    if(document.getElementById('FIFO_field').lastChild) document.getElementById('FIFO_field').lastChild.style = "background-color: rgb(68, 68, 100);";
    const content = document.getElementById("FIFO_input").value;
    //alert(content)

    const contentObj = document.createElement("div");
    contentObj.className = 'content'
    contentObj.innerHTML = cyrillicChar(content) + ` (${counterFIFO})`;
    contentObj.style = "background-color: red;";

    const input = document.getElementById("FIFO_field");
    input.appendChild(contentObj);
    counterFIFO++;
    
    //input.prepend(contentObj);    
}

let counterLIFO = 0;

function addLIFO(){
    if(document.getElementById('LIFO_field').lastChild) document.getElementById('LIFO_field').lastChild.style = "background-color: rgb(68, 68, 100);";
    const content = document.getElementById("LIFO_input").value;
    //alert(content)

    const contentObj = document.createElement("div");
    contentObj.className = 'content';
    contentObj.innerHTML = cyrillicChar(content) + ` (${counterLIFO})`;
    contentObj.style = "background-color: red;";

    const input = document.getElementById("LIFO_field");
    input.appendChild(contentObj);
    counterLIFO++;
    
    //input.prepend(contentObj);   
    //let itm = document.getElementById('FIFO_field')
    //itm.lastChild.remove()
    //itm.firstChild.remove() 
}

function runFIFO(){
    if (document.getElementById('FIFO_field').firstChild){
        document.getElementById('FIFO_field').firstChild.remove();
        counterFIFO--;
    }
}
function runLIFO(){
    if (document.getElementById('LIFO_field').lastChild){
        document.getElementById('LIFO_field').lastChild.remove();
        counterLIFO--;
    }
}

/** @param {string} inputStr  */
function cyrillicChar(inputStr){
    // метод находит первый символ кикиллице в исходной строке и возвращает его
    const codeAtChar_а = 'а'.charCodeAt(0);
    const codeAtChar_я = 'я'.charCodeAt(0);
    const codeAtChar_А = 'А'.charCodeAt(0);
    const codeAtChar_Я = 'Я'.charCodeAt(0);

    
    for (let i = 0; i < inputStr.length; i++) {
        if (inputStr.charCodeAt(i) >= codeAtChar_а && inputStr.charCodeAt(i) <= codeAtChar_я || inputStr.charCodeAt(i) >= codeAtChar_А && inputStr.charCodeAt(i) <= codeAtChar_Я){
            return inputStr.charAt(i);
        }
    }
    return 'err';
}