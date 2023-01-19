const notes = [];
var i = 0;
function saveNote(content, id) {
  notes.push({});
  for (; i < notes.length; i++) {
    notes[i].content = content;
    notes[i].id = id;
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Run dishwasher", 3);
saveNote("Cook meal", 4);

console.log(notes);

function getNote(id) {
  if (typeof id == "number") {
    for (i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        return notes[i];
      } else {
        const error1 = "Error: This id does not exist.";
        return error1;
      }
    }
  } else {
    const error2 = "Error: Please enter a number.";
    return error2;
  }
}

const firstNote = getNote(6);
console.log(firstNote);

function logOutNotesFormatted() {
  for (var i = 0; i < notes.length; i++) {
    return (
      "The note with id: " +
      notes[i].id +
      ", has the following note text: " +
      notes[i].content
    );
  }
}

console.log(logOutNotesFormatted());

/*Unique feature: to remove a note once done 
using content and returns newNotes with 
remaining contents and id*/

const newNotes = [...notes]; // make a clone of notes to remove content and to keep the original version of notes
function removeNote(content) {
  for (var i = 0; i < newNotes.length; i++) {
    if (newNotes[i].content === content) {
      newNotes.splice(i, 1);
      i--;
    }
  }
  return newNotes;
}

console.log(removeNote("Do laundry"));