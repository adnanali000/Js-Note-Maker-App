//add notes to local storage

showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addTxt.value = "";
   showNotes();

})


//show notes

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element,index){

        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id = ${index} onclick = "deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
        
    });

    let noteEle = document.getElementById('notes');
    if(notesObj.length != 0){
       noteEle.innerHTML = html;
    }
    else{
        noteEle.innerHTML = "Nothing to Show!"
    }

}



//delete note

function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();

}

//search notes

let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let searchVal = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('noteCard');

    Array.from(noteCard).forEach(function(element){
       let cardTxt = element.getElementsByTagName('p')[0].innerText;

       if(cardTxt.includes(searchVal)){
           element.style.display = "block";
       }
       else{
           element.style.display = "none"
       }
    })
})