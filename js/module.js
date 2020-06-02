var tabs = new Tabby('[data-tabs]');
const firstSections = document.querySelectorAll('.first-sections');


const moduleContainer = document.querySelector('.module');
const links = document.querySelectorAll('.module-link');

moduleContainer.addEventListener('click', moduleActivLink);


function moduleActivLink(e) {
    e.preventDefault();
    let children; 

    links.forEach(link => {
        let isActiv = link.getAttribute('aria-selected');

        if(isActiv == 'true') {
            link.classList.add('module-link-activ');
        } else {
            link.classList.remove('module-link-activ');
        }
        
    });

    firstSections.forEach(item => {
        
        // console.log(item.id);
        if(e.target.dataset.number == item.id) {

            childrens = item.children; 
            childrens[1].classList.remove('hidden');
            item.classList.add('box-item-activ');
            childrens[0].children[2].classList.add('box-item-link-icon-activ');
        }       
    });
}


