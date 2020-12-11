const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const nav = document.querySelector('.navbar');

const updateLinks = (currentLink, targetLink) => {
    currentLink.classList.remove('current-link');
    targetLink.classList.add('current-link');
}


toggleBtn.addEventListener('click', function(e) {
    nav.classList.toggle('active');
});

// nav.addEventListener('click', function(e){
//     const currentLink = nav.querySelector('.current-link');
//     const targetLink = e.target.closest('a');

//     console.log(targetLink)
// });

