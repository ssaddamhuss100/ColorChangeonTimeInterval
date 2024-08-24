const box = document.querySelector('body');
  

function getRandomColor(){
    // Generate a random color in the hex
    const letters= '0123456789ABCDEF';
    let color = '#'; 
    for(let i = 0 ; i < 6;i++)
    {
        color = color + letters[Math.floor(Math.random()* 16)];
    }
    console.log(color);
    return color;
}

function changeColorContinuously(){
      setInterval(() => {
        box.style.backgroundColor= getRandomColor();
    }, 1000);
}
changeColorContinuously();
