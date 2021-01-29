/** HANDLE TYPING EFFECT **/
var about_me_text = [
    "Front-end Engineer.",
    "Deep Thinker.",
    "Javascript Enthusiast.",
    "Team Player.",
    "Believer.",
    "Proud Husband.",
    "Servant of two cats."
];

var curnt_sentence_index = 0;

var curnt_char_idx = 0;

var interval_val;

var el_text = document.getElementById("text");

function type(){
    var letters = about_me_text[curnt_sentence_index].substring(0,curnt_char_idx+1);

    el_text.innerHTML = letters;
    curnt_char_idx++;

    // When a sentence is completed
    if(letters === about_me_text[curnt_sentence_index]) {
		clearInterval(interval_val);
		setTimeout(()=> {
			interval_val = setInterval(remove, 100);
		}, 1000);
	}
}

function remove(){
    // get substring with 1 character deleted
    var letter = about_me_text[curnt_sentence_index].substring(0,curnt_char_idx-1)
    el_text.innerHTML = letter;
    curnt_char_idx--;

    // if letter is fully removed, start next sentence
    if(letter === ''){
        clearInterval(interval_val);
        
        // set the first sentence
        if(curnt_sentence_index === about_me_text.length-1){
            curnt_sentence_index = 0;
        } else{
            curnt_sentence_index++;
        }
        curnt_char_idx++;

        // start next sentence 
        setTimeout(() => {
            interval_val = setInterval(type, 100)
        }, 1000);
    }

}

interval_val = setInterval(type, 100);


/** HANDLE MENU BAR **/
var el_menu_bar = document.getElementById("menu-bar");

var el_menu_bar_links = document.getElementById("menu-bar-links");

var el_close = document.getElementById("close");

el_menu_bar.addEventListener("click",()=>{
    el_menu_bar_links.style.width = '200px';
    el_menu_bar_links.style.height = '200px';
})

el_close.addEventListener("click", ()=>{
    el_menu_bar_links.style.width = '0px';
    el_menu_bar_links.style.height = '0px';
})