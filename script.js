 window.addEventListener('keydown', function(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //tylda nie apostrof, nowy zapis z ES6
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        
        if(!audio) return; //zatrzymuje funckję jeśli nie ma audio przypisanego do data-key
        audio.currentTime = 0; //cofa dźwięk do początku aby mógł być grany jeden klawisz kilka razy pod rząd nawet jeśli dźwięk się nie skończy, nie działa w IE
        audio.play();
        key.classList.add('keydown');
        setTimeout(function() {
            key.classList.remove('keydown');
        }, 70);
    });
    /* inna opcja rozwiązania usunięcia klasy keydown
    function removeKeydownClass(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('keydown');
    }
    const keys = Array.from(document.querySelectorAll(`.key`));
    keys.forEach(key => key.addEventListener('transitionend', removeKeydownClass));*/