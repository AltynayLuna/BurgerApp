// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".btn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevour = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevour
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    ).fail((e)=>{
      console.log(e);
    })
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger_name").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New burger added");
        location.reload();
      }
    ).fail(function(e){
      console.log(e);
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("Deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
