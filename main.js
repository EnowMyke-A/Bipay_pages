
function slideNavigation(){
    const icon= document.querySelector('.bx-menu-alt-left');
    icon.classList.toggle('bx-x');
    const navigation= document.querySelector('.menu');
    navigation.classList.toggle('slide_to_view');
    const mainBody = document.querySelector('.main_dashboard')
    
}

function closeOnClick(){
    const navigation = document.querySelector('.menu');
    const icon = document.querySelector('.bx-menu-alt-left');
    const navbutton = document.querySelector('.menu-button');
    const option = document.querySelectorAll('.option');
    const Edit = document.querySelectorAll('.Edit');
    document.addEventListener('click', function(event){
        if(!navigation.contains(event.target) && !navbutton.contains(event.target)){
            navigation.classList.remove('slide_to_view');
            icon.classList.remove('bx-x');
        }
        var i=0;
        for(i;i<option.length;i++){
            if(!option[i].contains(event.target)){
                Edit[i].classList.remove('show_Edit');
            }
        }
    })

}

function detailDropdown(){
    const chevronDown = document.querySelector('.bx-chevron-down');
    const buttonText = document.querySelector('.full-details-text')
    const block1 = document.querySelector('.info_block');
    const block2 = document.querySelector('.contact_block');
    const main_container= document.querySelector('.main_details');
    const bigBlock= document.querySelector('.personal_detail')
    chevronDown.classList.toggle('rotate-chevron');
    block1.classList.toggle('show_personal_details1');
    block2.classList.toggle('show_personal_details2');
    bigBlock.classList.toggle('personal_gap');
    main_container.classList.toggle('extend_main');
    if(block1.classList.contains('show_personal_details1')){
        buttonText.textContent="Hide Details";
        return
    }
    buttonText.textContent="More Details";
}

window.addEventListener('load', function(){
    var i;
    const dropDown = this.document.querySelectorAll('.drop_down_tab');
    const dropBox = this.document.querySelectorAll('.drop_down_container');
    for(i=0;i<dropDown.length;i++){
        const tab = dropDown[i]
        const container = dropBox[i];
        const value = i;
        tab.addEventListener('click', function(){
            var j;
            for(j=0;j<dropDown.length;j++){
                if(j==value)continue;
                dropDown[j].classList.remove('dropped');
                dropBox[j].classList.remove('unvail_drop_down');
            }
            container.classList.toggle('unvail_drop_down');
            tab.classList.toggle('dropped');
        })
    }
});

window.addEventListener('load', function(){
    const nav_buttons = this.document.querySelectorAll('.nav_button');
    var i;
    for(i=0;i<nav_buttons.length;i++){
        const current = nav_buttons[i];
    current.addEventListener('click', function(){
        var j=0;
        for(j;j<nav_buttons.length;j++){
            nav_buttons[j].classList.remove('currently_active');
        }
        current.classList.add('currently_active');
    })
    }
})

window.addEventListener('load', function(){
    const option = this.document.querySelectorAll('.option');
    const Edit = this.document.querySelectorAll('.Edit');
    var i;
    for(i=0;i<option.length;i++){
        const num = i;
        const currentBox = Edit[i]
        const clicked = option[i];
        clicked.addEventListener('click', function(){
            var j=0;
            for(j;j<option.length;j++){
                if(j==num)continue;
                Edit[j].classList.remove('show_Edit');
            }
            currentBox.classList.toggle('show_Edit')
        })
    }
})

function slideContainerOnSwipe(container) {
    var startX = 0;
    var isSwiping = false;
  
    container.addEventListener("mousedown", startSwipe);
    container.addEventListener("touchstart", startSwipe);
  
    container.addEventListener("mousemove", performSwipe);
    container.addEventListener("touchmove", performSwipe);
  
    container.addEventListener("mouseup", endSwipe);
    container.addEventListener("mouseleave", endSwipe);
    container.addEventListener("touchend", endSwipe);
  
    function startSwipe(event) {
      isSwiping = true;
      startX = getEventX(event);
    }
  
    function performSwipe(event) {
      if (!isSwiping) return;
      event.preventDefault();
      var currentX = getEventX(event);
      var distance = startX - currentX;
      container.scrollLeft += distance;
      startX = currentX;
    }
  
    function endSwipe() {
      isSwiping = false;
    }
  
    function getEventX(event) {
      if (event.touches && event.touches.length > 0) {
        return event.touches[0].clientX; // Touch event
      } else {
        return event.clientX; // Mouse event
      }
    }
  }

  window.addEventListener('load', function(){
    if(this.window.innerWidth>930){
        const analytic = this.document.querySelector('.analytic_tab_container')
        const table = this.document.querySelector('.table_container');
        const sub_nav = this.document.querySelector('.sub_nav_slide');
        const time_container = this.document.querySelector('.time_container')
        const arr = [table, time_container, analytic,  sub_nav];
        var i=0;
        for(i;i<arr.length;i++){
            if(arr[i]==null)continue;
            slideContainerOnSwipe(arr[i]);
        }
    }
  })

onload = function(){closeOnClick()};