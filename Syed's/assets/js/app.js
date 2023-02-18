const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');
const toggleMenu = ()=>
{
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');

};
menuToggleButton.addEventListener('click',toggleMenu);
const removeActiveLinkClass = e=>{
    if(e.target.classList.contains('list-link'))
    {
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    }  
    else
        console.log('Does not have link class');
} 
document.addEventListener('click',removeActiveLinkClass);
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');
if(currentTheme)
{
    bodyElement.classList.add('dark-theme');   
}
const toggleTheme = ()=>
{
    bodyElement.classList.toggle('dark-theme');
    if(bodyElement.classList.contains('dark-theme'))
    {
        localStorage.setItem('darkTheme','active');
    }
    else
    {
        localStorage.removeItem('darkTheme');
    }
};
themeToggleButton.addEventListener('click',toggleTheme);