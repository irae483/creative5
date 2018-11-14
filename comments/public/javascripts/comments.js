$(document).ready(function(){
  $("#postComment").click(function(){
      var myobj = {FirstName:$("#firstName").val(),LastName:$("#lastName").val(),Street:$("#street").val(),City:$("#city").val(),State:$("#state").val(),ZipCode:$("#zipCode").val(),PhoneNumber:$("#zipCode").val(),PhoneNumber:$("#phoneNumber").val(),Email:$("#email").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
      
      var url = "comment";
    $.ajax({
    url:url,
    type: "POST",
    data: jobj,
    contentType: "application/json; charset=utf-8",
    success: function(data,textStatus) {
    $("#done").html(textStatus);
}
})
      
  });
  
  $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li> Name: " + com.FirstName + " " + com.LastName + " -- Address: " + com.Street + " " + com.City + ", " + com.State + " " + com.ZipCode + " -- Phone Number: " + com.PhoneNumber + " -- Email: " + com.Email + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });
  
  $("#querryFirst").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        if(com.FirstName == $("#querry").val()){
           everything += "<li> Name: " + com.FirstName + " " + com.LastName + " -- Address: " + com.Street + " " + com.City + ", " + com.State + " " + com.ZipCode + " -- Phone Number: " + com.PhoneNumber + " -- Email: " + com.Email + "</li>"; 
        }
        
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });

  $("#querryLast").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        if(com.LastName == $("#querry").val()){
           everything += "<li> Name: " + com.FirstName + " " + com.LastName + " -- Address: " + com.Street + " " + com.City + ", " + com.State + " " + com.ZipCode + " -- Phone Number: " + com.PhoneNumber + " -- Email: " + com.Email + "</li>"; 
        }
        
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });
  
  $("#querryStreet").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        if(com.Street == $("#querry").val()){
           everything += "<li> Name: " + com.FirstName + " " + com.LastName + " -- Address: " + com.Street + " " + com.City + ", " + com.State + " " + com.ZipCode + " -- Phone Number: " + com.PhoneNumber + " -- Email: " + com.Email + "</li>"; 
        }
        
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });
  
  $("#querryCity").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        if(com.City == $("#querry").val()){
           everything += "<li> Name: " + com.FirstName + " " + com.LastName + " -- Address: " + com.Street + " " + com.City + ", " + com.State + " " + com.ZipCode + " -- Phone Number: " + com.PhoneNumber + " -- Email: " + com.Email + "</li>"; 
        }
        
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });
  
  $("#querryState").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        if(com.State == $("#querry").val()){
           everything += "<li> Name: " + com.FirstName + " " + com.LastName + " -- Address: " + com.Street + " " + com.City + ", " + com.State + " " + com.ZipCode + " -- Phone Number: " + com.PhoneNumber + " -- Email: " + com.Email + "</li>"; 
        }
        
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });
  
  $("#querryZip").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        if(com.ZipCode == $("#querry").val()){
           everything += "<li> Name: " + com.FirstName + " " + com.LastName + " -- Address: " + com.Street + " " + com.City + ", " + com.State + " " + com.ZipCode + " -- Phone Number: " + com.PhoneNumber + " -- Email: " + com.Email + "</li>"; 
        }
        
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });
  
  $("#querryPhone").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        if(com.PhoneNumber == $("#querry").val()){
           everything += "<li> Name: " + com.FirstName + " " + com.LastName + " -- Address: " + com.Street + " " + com.City + ", " + com.State + " " + com.ZipCode + " -- Phone Number: " + com.PhoneNumber + " -- Email: " + com.Email + "</li>"; 
        }
        
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });
  
  $("#querryEmail").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        if(com.Email == $("#querry").val()){
           everything += "<li> Name: " + com.FirstName + " " + com.LastName + " -- Address: " + com.Street + " " + com.City + ", " + com.State + " " + com.ZipCode + " -- Phone Number: " + com.PhoneNumber + " -- Email: " + com.Email + "</li>"; 
        }
        
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });
  
  $("#deleteComments").click(function(){
      var myobj = {FirstName:$("#name").val(),LastName:$("#lastName").val()};
      jobj = JSON.stringify(myobj);
      
      var url = "remove";
    $.ajax({
    url:url,
    type: "POST",
    data: jobj,
    contentType: "application/json; charset=utf-8",
    success: function(data,textStatus) {
    $("#done").html(textStatus);
    var everything = "all comments deleted";
    $("#comments").html(everything);
}
})
      
  });
  
  
});





 