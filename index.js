

  window.addEventListener('load', () => {

    const loader = document.getElementById('loader');
  loader.style.display = 'none';
const backgrounds = [
    {
      video: './files/video1.mp4',
      image: './files/1.jpg',
      title: '<span>Fixly</span> finds fast fixes for tricky tasks!',
      text: 'Innovating Tomorrow, Today'
    },
    {
      video: './files/video2.mp4',
      image: './files/2.jpg',
      title: '<span>Fixly</span> fosters flawless fixes for curious creators!',
      text: 'Where Vision Meets Technology.'
    },
    {
      video: './files/video3.mp4',
      image: './files/3.jpg',
      title: `<span>Fixly</span> fuels fast fixes for every challenge!`,
      text: 'Transforming the Ordinary into the Extraordinary.'
    }
  ];
 

  let currentIndex = 0;

  const backgroundVideo = document.getElementById('backgroundVideo');
  const backgroundImage = document.getElementById('backgroundImage');
  const dynamicTitle = document.getElementById('dynamicContent').querySelector('h1');
  const dynamicText = document.getElementById('dynamicText');
  
  function changeBackground() {
    dynamicTitle.classList.add('fade-out');
    dynamicText.classList.add('fade-out');
  
    setTimeout(() => {
      const currentBackground = backgrounds[currentIndex];
  
      backgroundVideo.src = currentBackground.video;
      backgroundVideo.play(); 
  
      backgroundImage.src = currentBackground.image;
  
      dynamicTitle.innerHTML = currentBackground.title;
      dynamicText.textContent = currentBackground.text;
  
      dynamicTitle.classList.remove('fade-out');
      dynamicText.classList.remove('fade-out');
  
      dynamicTitle.classList.add('fade-in');
      dynamicText.classList.add('fade-in');
    }, 500); 
  
    setTimeout(() => {
      dynamicTitle.classList.remove('fade-in');
      dynamicText.classList.remove('fade-in');
    }, 1000); 
  
    currentIndex = (currentIndex + 1) % backgrounds.length;
  }
  
  changeBackground();
  
  setInterval(changeBackground, 5000);
  });
