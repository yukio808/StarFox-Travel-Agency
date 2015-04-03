$(function(){

  var main_nav_element = $("ul.main_nav");

  function create_nav_link ( link_text ) {
    // create new "link_text" nav item
    /*
      <li class="new_nav_item">
        <a href="#">link_text</a>
      </li>
     */
    var new_nav_item = $("<li></li>");
    new_nav_item.addClass("new_nav_item");

    var new_nav_link = $("<a>", {
      href : "#",
      html : link_text
    });

    new_nav_item.append( new_nav_link );

    return new_nav_item;
  }

  function remove_all_new_nav_items () {
    
    var all_new_nav_items = $(".new_nav_item");

    all_new_nav_items.remove();

  }

  // click Interstellar Travel adds “Foo” element to nav
  $("#nav_interstellar_travel").click(function (event) {
    
    var new_nav_item = create_nav_link( "Foo" );

    main_nav_element.append( new_nav_item );
  });

  // click Services adds “Bar” element to nav
  $("#nav_services").click(function () {

    main_nav_element.append(
      create_nav_link( "Bar" )
    );
  });

  // click About adds “Baz” element to nav
  $("#nav_about").click(function () {
    
    var new_nav_item = create_nav_link( "Baz" );

    main_nav_element.append( new_nav_item );
  });

  // click Home removes all “Foo”, “Bar”, and “Baz”
  $("#nav_home").click(function () {
    remove_all_new_nav_items();
  });
  $("h1.desktop_logo a").click(function(event){
    $(this).html("<span>StarFox</span> Slave Trade Company");
  });
  $("a.hero_button").click(function(event){
    var randwidth = Math.floor(Math.random() * 200) + 200;
    var randlength = Math.floor(Math.random() * 200) + 200;
    
    $("div.ship2").css({"background-image" : "url(http://placekitten.com/g/" + randwidth + "/" + randlength + "/" + ")"
    });
  });

  //

  $(".highlights .columns .highlight").click(function(){
    var random_r = Math.floor(Math.random() * 256 );
    var random_g = Math.floor(Math.random() * 256 );
    var random_b = Math.floor(Math.random() * 256 );

    $(this).css({
      "background" : "rgb(" + random_r + "," + random_g + "," + random_b + ")"
    });
  });
});
