document.getElementById("addSongForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var title = document.getElementById("title").value;
    var artist = document.getElementById("artist").value;
    var genre = document.getElementById("genre").value;
    var duration = document.getElementById("duration").value;
    
    // TODO: Perform necessary actions with the form data (e.g., save to database)
    
    // Reset form
    document.getElementById("addSongForm").reset();
  });
  