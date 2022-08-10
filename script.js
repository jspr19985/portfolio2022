function showContent(evt, menuItem) {

    var i, tabcontent, navlinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    navlinks = document.getElementsByClassName("navlinks");
    for (i = 0; i < navlinks.length; i++) {
      navlinks[i].className = navlinks[i].className.replace(" active", "");
    }
    document.getElementById(menuItem).style.display = "flex";
    evt.currentTarget.className += " active";
  }

document.getElementById("defaultOpen").click();