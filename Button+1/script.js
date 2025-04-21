let tapCount = 5;

const tapBtn = document.getElementById('tapBtn');
const tapDisplay = document.getElementById('tapCount');
const tapReset = document.getElementById('ResetBtn');

tapBtn.addEventListener('click', function(){
    tapCount++;
    tapDisplay.textContent = tapCount;
});

tapReset.addEventListener('click', function(){
    tapCount = 5;
    tapDisplay.textContent = tapCount;
});

