//FAQ According
document.addEventListener('DOMContentLoaded',() =>{
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //Toggle visiblity of body
        groupBody.classList.toggle('open');

        // Close other open FAQ bodies
        const otherGrourps = faqContainer.querySelectorAll('.faq-group');

        otherGrourps.forEach((otherGrourp) => {
           if (otherGrourp !== group){
            const otherGrourpBody = otherGrourp.querySelector('.faq-group-body');
            const otherIcon = otherGrourp.querySelector('.faq-group-header i');
            otherGrourpBody.classList.remove('open');
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus');

           }; 
            
        });
         });
});