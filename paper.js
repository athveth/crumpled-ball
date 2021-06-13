class Paper {
    constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.image = loadImage("paper.png")
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			imageMode(CENTER)
            image(this.image,0,0,this.w,this.h)
			pop()
			
	}

}
