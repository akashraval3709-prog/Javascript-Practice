
  
    const body = document.querySelector('body')
    const button = document.querySelector('#btn')

    let currentTheme = localStorage.getItem('Theme')
if(currentTheme == 'white')
{
    body.classList.add('white')
    // body.classList.toggle('white')
}
    button.addEventListener('click', () => {

        toggleTheme()
    })

    function toggleTheme() {

        if (document.querySelector('.white')) {
            body.classList.remove('white')
            body.classList.add('dark')
            // body.classList.toggle('dark')
            let setColor = localStorage.setItem('Theme', 'white')



        } else {

            let setColor = localStorage.setItem('Theme', 'black')
            body.classList.add('white')
            // body.classList.toggle('white')

        }
    }
    toggleTheme()

