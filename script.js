'use strict';

const containerNotes = document.querySelector('.container-notes');
const newNotes = document.querySelector('.btn');
const storeData = ()=> {
    localStorage.setItem('notes',containerNotes.innerHTML);
}
const showData = ()=> {
    containerNotes.innerHTML = localStorage.getItem('notes');
}
const createNotes = ()=> {
    const notes = document.createElement('p');
    notes.setAttribute('contenteditable','true');
    notes.classList.add('note');
    const deleteImg = document.createElement('img');
    deleteImg.src ='images/delete.png';
    containerNotes.appendChild(notes);
    notes.appendChild(deleteImg);
    storeData();
}

newNotes.addEventListener('click',createNotes);

containerNotes.addEventListener('click',function(e){
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        storeData();
    }else if(e.target.tagName === 'P'){
        let eachNote = document.querySelectorAll('.note');
        eachNote.forEach(nt=> {
            nt.onkeyup = function(){
                storeData();
            }
        })
    }
})

showData();
