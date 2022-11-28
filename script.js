const noteDisplay = document.getElementById("note-display")
const addBtn = document.getElementById("addBtn")

addBtn.addEventListener("click", function() {
   const notes = document.getElementById("notes").value
   noteDisplay.textContent = notes
})

