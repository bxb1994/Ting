$(function(){
	var myScroll;
    	function loaded () {
    		myScroll=new IScroll('#wrapper',{
    			mouseWheel:true,
    			bounce:true
    		});
    		myScroll.on("scrollStart",function(){
    			if(myScroll.y==myScroll.maxScrollY){
    				down();
    			}
    			if(myScroll==0){
    				up();
    			}
    		})
    		var downEle=document.getElementsByClassName("down")[0];
    		var upEle=document.getElementsByClassName("up")[0];
    		var ul=document.querySelector("ul");
    		function down(){
    			myScroll.refresh();
    			downEle.style.display="block";
    			setTimeout(function(){
    				for(var i=0;i<10;i++){
    					$("<li>:new"+i+"</li>").appendTo(ul);
    				}
    				downEle.style.display="none";
    				myScroll.refresh();
    			},2000)
    		}
    		function up(){
    			myScroll.refresh();
    			upEle.style.display="block";
    			setTimeout(function(){
    				for(var i=0;i<10;i++){
    					$("<li>:new"+i+"</li>").prependTo(ul);
    				}
    				upEle.style.display="none";
    				myScroll.refresh();
    			},2000)
    		}
    		
    	}
    	document.addEventListener('touchmove',function(e){
    		e.preventDefault();
    	},false)
})
