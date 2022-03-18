import Matter, { Events } from "matter-js";


function newInter(this: any, canvasid: string){
    if(!document) return
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
    world = engine.world; 
    let can: HTMLCanvasElement | null = null;
    while (can == null) can = document.getElementById(canvasid) as HTMLCanvasElement;
    let width = window.innerWidth;
    let height = 3*window.innerHeight/10;
    let papa: HTMLElement | null = null;
    while (papa == null) papa = document.getElementById('tata') as HTMLElement;
    (document.getElementById(canvasid) as HTMLCanvasElement).width = width as number;
    (document.getElementById(canvasid) as HTMLCanvasElement).height = height as number;
    const updateCan = ():any=>{
        //if(!document.getElementById('tata')?.getBoundingClientRect().top && !document.getElementById('tata')?.getBoundingClientRect().height && !document.getElementById('tata')?.getBoundingClientRect().width) return;
        if(9*window.innerHeight/10) document.getElementById(canvasid)?.style.setProperty('top', 7*window.innerHeight/10+ "px");//document.getElementById('tata')?.getBoundingClientRect().top as number + "px");
        if(document.getElementById('tata')?.getBoundingClientRect().left) document.getElementById(canvasid)?.style.setProperty('left', document.getElementById('tata')?.getBoundingClientRect().left as number + "px");
    }
    // create renderer
    let render = Render.create({
    canvas: can,
    engine: engine,
    options: {
        width: can.width,
        height: can.height,
        wireframes: false,
        background: '#144f1000',
        wireframeBackground: '#44151f',
    }
    });
    document.addEventListener('scroll', (e)=>{updateCan()})
    setInterval(updateCan, 10);

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var stack = Composites.stack(20, 20, 10, 5, 0, 0, function(x: number, y: number) {
    var sides = Math.round(Common.random(1, 8));
    
    switch (Math.round(Common.random(0, 1))) {
    case 0:
        if (Common.random() < 0.8) {
            return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50) , { 
                render: {
                    fillStyle: `rgb(${Math.random()*155 + 100}, ${Math.random()*155 + 100}, ${Math.random()*105})`
        } } );
        } else {
            return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30),{ 
                render: {
                    fillStyle: `rgb(${Math.random()*155 + 100}, ${Math.random()*155 + 100}, ${Math.random()*105})`
        } });
        }
    case 1:
        return Bodies.polygon(x, y, sides, Common.random(25, 50), { 
            render: {
                fillStyle: `rgb(${Math.random()*155 + 100}, ${Math.random()*155 + 100}, ${Math.random()*105})`
    } });
    }
    });
    

    const sponsors = {
        github: {
            url: "static/images/sponsors/cns.png",
            color: "rgb(150, 255, 100)",
            sides: 6,
            pos: {
                x: 100,
                y: 100,
            },
            size: 60,
            label: "ghub",
            img: newimg("static/images/sponsors/cns.png", 1)
        }
    }
    function newimg(url: string, size: number) {
        let img = new Image();
        img.width = size;
        img.height = size;
        img.src = url;
        
        return img;
    }
    for (let sponsor of Object.values(sponsors)){

        

        let sponsr = Bodies.polygon(sponsor.pos.x, sponsor.pos.y, sponsor.sides, sponsor.size, { 
            render: {
                fillStyle: sponsor.color,
                strokeStyle: sponsor.color
            },  label: sponsor.label});
        Composite.add(world, sponsr);
    }
    function drawImageRot(img: CanvasImageSource,x: number,y: number,width: number,height: number,rot: number) {
        let ctx = (document.getElementById(canvasid) as HTMLCanvasElement)?.getContext('2d');
        ctx?.translate(x, y);
        ctx?.rotate(rot);
        ctx?.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);
    }
    Events.on(runner, "afterTick", (e)=>{
        for (let sponsor of Object.values(sponsors)){
            for (let b of world.bodies){
                if(b.label == sponsor.label){
                    drawImageRot(sponsor.img, b.position.x, b.position.y, sponsor.size, sponsor.size, b.angle)
                    
                    //console.log('bodi', b.position.x, b.position.y)
                }
            }
        }
    })

    
    
    Composite.add(world, stack);

    const thick = 100
    const borderColor = "rgb(255, 0, 0, 1)"
    Composite.add(world, [
    // walls
    Bodies.rectangle(width/2, -thick/2, width, thick, { isStatic: true, render: {fillStyle: borderColor} }),
    Bodies.rectangle(width/2, height+thick/2, width, thick, { isStatic: true, render: {fillStyle: borderColor} }),
    Bodies.rectangle(-thick/2-4, height/2, thick, height, { isStatic: true, render: {fillStyle: borderColor} }),
    Bodies.rectangle(width+thick/2+4, height/2, thick, height, { isStatic: true, render: {fillStyle: borderColor} })
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            } 
        } as Matter.Constraint
    });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
    });
}
export {newInter}