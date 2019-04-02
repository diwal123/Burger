$(function() {
  // Creating a new burger
  $("#create").on("click", function(e) {
    e.preventDefault();
    var newBurger = {
      burger: $("#newBurger")
        .val()
        .trim()
    };
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Burger Added");

      location.reload();
    });
  });

  // Updating the burger if devored
  $(".updateBurger").on("click", function(e) {
    e.preventDefault();
    var id = { id: $(this).attr("data-burgerid") };
    $.ajax("/api/burgers/", {
      type: "PUT",
      data: id
    }).then(function() {
      console.log("updated id ", id);

      location.reload();
    });
  });

  //Deleting the burger
  $(".deleteBurger").on("click", function(e) {
    e.preventDefault();
    var id = { id: $(this).attr("data-burgerid") };
    $.ajax("/api/burgers/", {
      type: "DELETE",
      data: id
    }).then(function() {
      console.log("updated id ", id);

      location.reload();
    });
  });
});
