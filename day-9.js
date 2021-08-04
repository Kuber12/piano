const notes = ['a3','b3','c3','d3','e3','f3','g3','a4','b4','c4','d4','e4','f4','g4','a5','b5','c5','d5','e5','f5','g5','a6','b6','c6'];
const minor = ['a-3','c-3','d-3','f-3','g-3','a-4','c-4','d-4','f-4','g-4','a-5','c-5','d-5','f-5','g-5','a-6'];
notes.forEach(sound =>{
  const btn = document.createElement('button');
  btn.classList.add('white-btn');
  btn.innerText = sound;
  btn.classList.add(sound);
  document.getElementById('buttons').appendChild(btn);
  btn.addEventListener("click", function(){
      stopSound();
      let tempId = btn.textContent;
      console.log(tempId);
      document.getElementById(tempId).play();
    });
}
);
minor.forEach(sound =>{
  const btn = document.createElement('button');
  btn.classList.add('black-btn');
  btn.classList.add(sound);
  btn.innerText = sound;
  document.getElementById('buttons').appendChild(btn);
  btn.addEventListener("click", function(){
    stopSound();
    let tempId = btn.textContent;
    console.log(tempId);
    document.getElementById(tempId).play();
    });
}
);

function stopSound(){
  notes.forEach(newSound => {
    let tmp = document.getElementById(newSound);
    tmp.pause();
    tmp.currentTime = 0;
  })
}