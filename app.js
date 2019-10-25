$(document).ready(function(){
                  var removeButton = "<button class='remove-button'>X</button>";
    
                  $("#addButton").click(function(){
                                $("#todo-list").append('<li>' + $("#new-item").val() + removeButton +'</li>');
                                        
                                        
                                        });
                  });

$(document).on('click','.remove-button', function(){
    $(this).parent().remove();
    
    
});


function add(){


    var text = document.getElementById("new-item").value;
    text.focus();
    if(!(text.length == 0))
        {
            var listElement = document.createElement("li");
    
            var textNode = document.createTextNode(text);
            var remvoveButton = document.createElement("button");
    
            listElement.appendChild(textNode);
            listElement.appendChild(remvoveButton);
            remvoveButton.innerHTML= '<i class="fas fa-minus-square"></i>';
            remvoveButton.onclick = function(){
                remvoveButton.parentElement.remove();
            }
    
            document.getElementById("todo-list").appendChild(listElement);
            
    
            document.getElementById("new-item").value = "";
        
        }
    else
        {
            alert("Text box is empty!");
        }
        
    }
    
    
