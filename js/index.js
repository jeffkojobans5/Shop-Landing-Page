const tl = new TimelineMax();
    

tl.fromTo('.social' , 1 , {x : -900} , { x: 0} , 0.5)
tl.fromTo('.hold-circle' , 1 , {x : 900} , { x: 0} , 0.5)
tl.fromTo('.shop' , 1 , {y : -160 , opacity: 0} , { y: 0 , opacity: 1} , 0.5)
tl.fromTo('.border' , 1 , {y : -800} , { y: 0} , 1.2)
tl.fromTo('.inside-price h1' , 2 , {x : 800} , { x: 0} , 1.2)
tl.fromTo('.price h2' , 2 , {x : 800} , { x: 0} , 1.4)

tl.fromTo('.gone' , .4 , {y : -80 , opacity: 0} , { y: 0 , opacity: 1} , 1.2)
tl.fromTo('.gtwo' , .8 , {y : -100 , opacity: 0} , { y: 0 , opacity: 1} , 1.2)
tl.fromTo('.gthree' , 1.2 , {y : -120 , opacity: 0} , { y: 0 , opacity: 1} , 1.2)
tl.fromTo('.gfour' , 1.6 , {y : -140 , opacity: 0} , { y: 0 , opacity: 1} , 1.2)
tl.fromTo('.gfive' , 2 , {y : -160 , opacity: 0} , { y: 0 , opacity: 1} , 1.2)
tl.fromTo('.img' , 1 , { opacity: 0} , { opacity: 1} , 2)
tl.fromTo('.text > h1' , .1 , {x : -160 , opacity: 0} , { x: 0 , opacity: 1} , 2.5)


tl.from(".hold-price", 1.0, { y: -822, ease: Bounce.easeOut } , 3);
