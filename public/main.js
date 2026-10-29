const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");
const trash = document.getElementsByClassName("fa-trash-o");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.closest('li').dataset.id
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: id,
            'thumbUp':thumbUp,
            'direction': 'up'
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.closest('li').dataset.id
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('down', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: id,
            direction: 'down',
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});




Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
       const id = this.closest('li').dataset.id
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id': id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
