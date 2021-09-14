const read = 4;
const write = 2;
const execute = 1;

var countChecked = function() {
    if(($('#readcheck').prop("checked") == true)){
      $('#firstpermission').val(read);
    }  
    else if($('#writecheck').is(":checked")){
        $('#firstpermission').val(write); 
    }
    else if($('#executecheck').is(":checked")){
        $('#firstpermission').val(execute); 
    }   
  };

countChecked();     
$( "input[type=checkbox]" ).on("click", countChecked );


