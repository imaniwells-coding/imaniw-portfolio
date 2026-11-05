document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-btn'); const links=document.querySelector('.mobile-links');
  if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));}
  const filters=[...document.querySelectorAll('.filter')], cards=[...document.querySelectorAll('.project-card')];
  filters.forEach(btn=>btn.addEventListener('click',()=>{const f=btn.dataset.filter;filters.forEach(other=>other.setAttribute('aria-pressed',String(other===btn)));cards.forEach(card=>{card.hidden=f!=='all'&&!card.dataset.category.split(' ').includes(f);});}));
  const modal=document.querySelector('.lightbox');
  if(modal){const buttons=[...document.querySelectorAll('.gallery-img')], img=modal.querySelector('img'),label=modal.querySelector('.lightbox-title');let active=0,oldFocus=null;
    function show(i){active=(i+buttons.length)%buttons.length;const item=buttons[active];img.src=item.dataset.large||item.querySelector('img').src;img.alt=item.querySelector('img').alt;label.textContent=item.dataset.label||img.alt;}
    function close(){modal.classList.remove('open');document.body.style.overflow='';img.src='';if(oldFocus)oldFocus.focus();}
    buttons.forEach((btn,i)=>btn.addEventListener('click',()=>{oldFocus=btn;show(i);modal.classList.add('open');document.body.style.overflow='hidden';modal.querySelector('.lightbox-close').focus();}));
    modal.querySelector('.lightbox-close').addEventListener('click',close);
    modal.querySelector('.lightbox-prev').addEventListener('click',()=>show(active-1));
    modal.querySelector('.lightbox-next').addEventListener('click',()=>show(active+1));
    modal.addEventListener('click',e=>{if(e.target===modal)close()});
    document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(active-1);if(e.key==='ArrowRight')show(active+1);});
  }
});