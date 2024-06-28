(function() {
    "use strict";
  
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
      var dot, eventDoc, doc, body, pageX, pageY;
      
      event = event || window.event; // IE-ism
      if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
  
        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 100) -
          (doc && doc.clientLeft || body && body.clientLeft || 100);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 100) -
          (doc && doc.clientTop  || body && body.clientTop  || 100 );
      }
  
      dot = document.createElement('div');
      dot.className = "dot";
      dot.style.left = event.pageX + "px";
      dot.style.top = event.pageY + "px";
      document.body.appendChild(dot);
    }
  
    $(document).ready(function(){
    $(".like").click(function(){
        if (clicked) {
            $(".likefill").hide();
            clicked = false;
        } else {
            $(".likefill").show();
            // $(".flash").addClass("animated");
            clicked = true;            
       }
    });
});
  })();
  