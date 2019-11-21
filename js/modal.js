function showModal(id) {
      var modal = document.getElementById(id)
    
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName(`close${id}`)[0]
      var video = modal.getElementsByTagName("video")[0]
      video.play()
      modal.style.display = "block";
      
      span.onclick = function () {
        video.pause()
        modal.style.display = "none";
      }
      window.onclick = function (event) {
        if (event.target == modal) {
          video.pause()
          modal.style.display = "none";
        }
      }
      
    }