document.getElementById('sb').addEventListener('click',function(e)
{ 
    e.preventDefault();
    const em=document.getElementById('mail').value
    const us=document.getElementById('user').value
    const ps=document.getElementById('pass').value
    const massage=document.getElementById('res')
    if(em==='abc@123' && us==='tamil'&& ps==='1234')
    {
        massage.textContent='login sucessfull'
        massage.className='success'       
    }
    else
    {
        massage.textContent='invalid'
        massage.className='failed'
    }
})