	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
    //send message
    function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "masterkrishna1037@gmail",
            Password : "MOMloveu@143",
            To : document.getElementById("email").value,
            From : "masterkrishna1037@gmail.com.com",
            Subject : "contact form",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
    const audio=new Audio();
    audio.src="voice.mp4"