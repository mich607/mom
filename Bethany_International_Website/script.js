const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navbar nav');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    menu.textContent=open?'×':'☰';
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
    menu.textContent='☰';
  }));
}
function sendMessage(event){
  event.preventDefault();
  const form=event.target;
  const fields=form.querySelectorAll('input,textarea');
  const name=fields[0].value.trim();
  const email=fields[1].value.trim();
  const subject=fields[2].value.trim();
  const message=fields[3].value.trim();
  const body='Name: '+name+'\nEmail: '+email+'\n\n'+message;
  const mailto='mailto:bisincfoundation@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  const status=document.getElementById('form-message');
  status.textContent='Opening your email app to send this enquiry. Please press Send in your email app.';
  window.location.href=mailto;
}