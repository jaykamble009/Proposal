function moveNo() {

    const noButton = document.getElementById('no');
  
    const newX = Math.floor(Math.random() * (window.innerWidth - 100)); // Adjust 100 based on button size
  
    const newY = Math.floor(Math.random() * (window.innerHeight - 50)); // Adjust 50 based on button size
  
    noButton.style.position = "absolute";
  
    noButton.style.left = `${newX}px`;
  
    noButton.style.top = `${newY}px`;
  
  }
  
  function celebrateYes() {
  
    const body = document.querySelector('body');
  
    body.style.background = "black";
  
    body.innerHTML = '<h1 style="color: white; ">wow am so lucky😍 &#128420;</h1>';
    
    
   
  
  
  }