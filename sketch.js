
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var stone;
var world, boy;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100, 100, 30);

	treeObj = new tree(1050, 580);
	groundObject = new ground(width / 2, 600, width, 20);
	stone = new Stone(100, 463, 23)
	mango1 = new Mango(690, 290, 34)
	mango2 = new Mango(855, 325, 35)
	mango3 = new Mango(670, 260, 35)
	mango4 = new Mango(730, 200, 35)
	mango5 = new Mango(710, 320, 36)
	mango6 = new Mango(780, 250, 35)
	mango6 = new Mango(820, 175, 33)

	Engine.run(engine);

}

function draw() {

	background(230);
	//Add code for displaying text here!
	image(boy, 200, 340, 200, 300);


	treeObj.display();
	mango1.display();

	groundObject.display();
}
