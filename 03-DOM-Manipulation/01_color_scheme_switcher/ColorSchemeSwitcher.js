const button = document.querySelectorAll('.button button')
const body = document.querySelector('body')

button.forEach((button) => {

    button.addEventListener('click', (event) => {
        body.style.backgroundColor = event.target.id;
        if (event.target.id === 'yellow') {

            body.style.color = 'black'

        } else {
            body.style.color = 'white'
        }



    });

});
