const menubtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menubtnicon = menubtn.querySelector("i");


menubtn.addEventListener("click",(e)=> {
    const isopen = navlinks.classList.contains("open");
    menubtnicon.setAttribute("class",isopen?"ri-menu-line":"ri-close-line");
    if(isopen){
        navlinks.classList.add("close")
        navlinks.addEventListener("animationend",(e) => {
            navlinks.classList.remove("open");
            navlinks.classList.remove("close");
        }, 
        {once:true}
      );
    } else {
        navlinks.classList.add("open");
    }
}
);

navlinks.addEventListener("click",(e) =>{
     navlinks.classList.remove("open");
     menubtnicon.setAttribute("class", "ri-menu-line");
});

/*  the upper java code is  for the  navigation bar  opne  and close  purpose ...*/ 





// const scrollRevealOption =  {
//     distance:"50px",
//     origin:"bottom",
//     duration:1000,
// };

// scrollReveal().remove(".header_container .section_subheader",{
//     ...scrollRevealOption,
// });
// scrollReveal().remove(".header_container .section_subheader",{
//     ...scrollRevealOption,
//     delay:500,
// });
// scrollReveal().remove(".header_container .scroll_btn",{
//     ...scrollRevealOption,
//     delay:1000,
// });
// scrollReveal().remove(".header_container .header_socials",{
//     ...scrollRevealOption,
//     origin:"left",
//     delay:1500,
// });




const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


ScrollReveal().reveal(".header_container .section_subheader", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container .section_header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container .scroll_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_container .header_socials", {
    ...scrollRevealOption,
     origin: "left",
     delay: 1500,

  
});



// ScrollReveal().reveal(".about_image-1, .about_image-3",{
//     ...scrollRevealOption,
//     origin:"right",
// });
document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal(".about_image-1, .about_image-3,.about_image-2", {
        ...scrollRevealOption,
        origin: "right",
    });
});



ScrollReveal().reveal(".about_content .section_subheader",{
    ...scrollRevealOption,
    delay:500,
});


ScrollReveal().reveal(".about_content .section_subheader",{
    ...scrollRevealOption,
    delay:1000,
});


ScrollReveal().reveal(".about_content p",{
    ...scrollRevealOption,
    delay:1500,
});


ScrollReveal().reveal(".about_content .about_btn",{
    ...scrollRevealOption,
    delay:2000,
});














