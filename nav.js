const getRow = document.getElementsByClassName("selectionable");
let elementSelected = 1;



function nav(event){
    if(event.key=="ArrowUp"){
        
        if(elementSelected>1){
            elementSelected--;
            for(let i=0; i<getRow.length;i++){
                getRow[i].classList.remove("selected");
            }
            getRow[elementSelected-1].classList.add("selected");
        }
    }else if(event.key=="ArrowDown"){
        if(elementSelected<getRow.length){
            elementSelected++;
            for(let i=0; i<getRow.length;i++){
                getRow[i].classList.remove("selected");
            }
            getRow[elementSelected-1].classList.add("selected");
            
        }
    }else if(event.key=="Enter"){

    }
    
}
