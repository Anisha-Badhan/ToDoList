$(document).ready(function(){
	
	
			   $(".toDo").hide();
			  
			    $(".delete").click(function(){
					$("#newTask").val("");
				if ($("ul").is(':empty')){
						$(".toDo").hide();
					}					
			    })
			  
			    $("#addItem").on('click',function(){
					let newToDo = $("#newTask").val();
					if(newToDo != ""){
				    $("#incomplete-tasks").append('<li class="task">'+newToDo+'<button class="remove"><i class="fa fa-trash" aria-hidden="true"></i></button><button class="done"><i class="fa fa-check-square-o" aria-hidden="true"></i></button></li>');
				    $("#newTask").val("");
				    $(".toDo").show();
					}
			    })
				
					$('#incomplete-tasks').on('click', '.remove',function(){
						$(this).parent().remove();
					});
					
					$('#incomplete-tasks').on('click', '.done', function() { 
							$(this).parent().toggleClass("completed") 
							
					}); 
				});
			
			 