var tabs = new Tabby('[data-tabs]');


const moduleContainer = document.querySelector('.module');
const links = document.querySelectorAll('.module-link');

moduleContainer.addEventListener('click', moduleActivLink);


function moduleActivLink(e) {
    links.forEach(link => {
        let isActiv = link.getAttribute('aria-selected');

        if(isActiv == 'true') {
            link.classList.add('module-link-activ');
        } else {
            link.classList.remove('module-link-activ');
        }
        
    })
}


console.log(moduleContainer);