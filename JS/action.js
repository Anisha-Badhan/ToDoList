$(document).ready(function(){
	
	
			   $(".toDo").hide();
			  
			    $(".delete").click(function(){
					$("#newTask").val("");					
			    })
			    $("#newTask").bind('keypress', function(e) {
					if(e.keyCode==13){
						 $("#addItem").trigger('click');
					 }
				});
			    $("#addItem").on('click',function(){
					let newToDo = $("#newTask").val();
					if(newToDo != ""){
				    $("#incomplete-tasks").append('<li class="task">'+newToDo+'<button class="remove"><i class="fa fa-trash" aria-hidden="true"></i></button><button class="done"><i class="fa fa-check-square-o" aria-hidden="true"></i></button></li>');
				    $("#newTask").val("");
				    $(".toDo").show();
					}
			    })
				
					$('#incomplete-tasks').on('click', '.remove',function(){
						$(this).parent().fadeOut(500);
						if($("#incomplete-tasks").html().trim() == ""){
						$(".toDo").hide();
					}
					});
					
					$('#incomplete-tasks').on('click', '.done', function() { 
							$(this).parent().toggleClass("completed") 
							
					}); 
				});
			
			 
