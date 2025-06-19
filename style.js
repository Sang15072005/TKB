function showAllNotes() {
  const notes = Object.entries(localStorage)
    .filter(([key, _]) => key.startsWith("note_"))
    .map(([key, value]) => {
      const subject = key.replace("note_", "");
      return `<strong>${subject}:</strong> ${value}`;
    });

  const content = notes.length ? notes.join("<br><br>") : "<em>Không có ghi chú nào.</em>";
  document.getElementById("allNotesContent").innerHTML = content;
  document.getElementById("allNotesOverlay").style.display = "flex";
}