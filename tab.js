(()=>{
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $tab_nav = $tab.querySelectorAll('[data-nav]');
    const $tab_con = $tab.querySelectorAll('[data-con]');
    const init =()=>{
        $tab_con[0].style.display='block';

    }
    init ();
    const handClick=(e)=>{
        e.preventDefault();
        let index =0;
        while (index<$tab_nav.length) {
            $tab_con[index].style.display= 'none';
            $tab_nav[index].classList.remove('is-active');

            index++;
            
        }
        const $this =  e.target;
        const val = $this.dataset.nav;
        $tab.querySelectorAll('[data-nav="'+val+'"]')[0].classList.add('is-active');
        $tab.querySelectorAll('[data-con="'+val+'"]')[0].style.display='block';


    }
    index=0;
    while (index<$tab_nav.length) {
        $tab_nav[index].addEventListener('click',(e)=>handClick(e));
        index++;
    }
})();