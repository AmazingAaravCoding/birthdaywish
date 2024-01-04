var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{ fabric.Image.fromURL("BirthdayImage.jpg",function(img){
    playerobject=img
    playerobject.scaleToWidth(900)
    playerobject.scaleToHeight(760)
    playerobject.set({
        top:0,left:0
    })
    canvas.add(playerobject)
})
	
	
}

function playSound(){
x.play()	
}
