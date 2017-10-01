  
var rimage= [
  { 
    name:"cooler",
    pts:100,
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/ctgtlfngwcz4d02o5sbk.jpg">'},
  { 
    name:"Garlic Jr.",
    pts: 150,
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/wqmbth8bjlosf0m2bxts.jpg">'},
  { 
    name:"kami",
    pts: 200,
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/acvl005zy0y4mccynli8.jpg">'},
  { 
    name:"Porunga",
    pts: 250,
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/yen76dggv0ommlafqycj.jpg">'},
  { 
    name:"Krillin",
    pts: 300,
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/z7wlpt6f370zaxzorcpd.jpg">'},
  { 
    name:"Android",
    pts: 350,
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/km5xporj1r3ey842nlna.jpg">'},
  { 
    name:"King kai",
    pts: 400,
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/dcruq6kggunogshvgqjk.jpg">'},
  { 
    name:"frieza",
    pts:450,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/siqjw2srbtux1pd32o9o.jpg">'},
   { 
    name:"Doctor Gero",
    pts:500,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/hs15q1roatyiacvhpwkx.jpg">'},
    { 
    name:"Doctor Gero",
    pts:500,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/hs15q1roatyiacvhpwkx.jpg">'},
    { 
    name:"Piccolo",
    pts:550,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/zbywqzxxc7g0mubio1an.jpg">'},
    { 
    name:"Master Roshi",
    pts:600,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/suralhzflgciwgxas7bh.jpg">'},
    { 
    name:"Cell",
    pts:650,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/cftlfprhz3jokkgn2xh2.jpg">'},
    { 
    name:"Gohan",
    pts:700,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/uoqkfip1bnignpehcrbu.jpg">'},
    { 
    name:"Broly",
    pts:750,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/tyofzocfkt0i8mqujrqf.jpg">'},
    { 
    name:"Goten",
    pts:800,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/byh6calt46btzdeo8aoj.jpg">'},
    { 
    name:"buu",
    pts:850,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/d73vb725sxhkjpxbmqab.jpg">'},
    { 
    name:"Vegeta",
    pts:1500,  
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/xvn4dxobf1stnqsx9a3p.jpg">'},
    
  { 
    name:"goku",
    pts: 2000,
    image:'<img src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/iqq5cnyled4dvmtgxfml.jpg">'},
  ]
  
  var size = rimage.length;  
      var x,score=0,ctr=0;
    
  init();
   
  function  init(){
    loop();
  }
                  
      function reload(){
        $("<img class='inner' src='http://img12.deviantart.net/ad95/i/2012/047/c/a/dragon_ball_3_star_by_layz88-d4pwbvl.jpg' >").replaceAll("img");
        score=0;
         $("span").replaceWith('<span id="dashboard">score::'+score+'</span>');
         }
     
     $("#panel button").click(function(){
      reload();
      init();
     });
     
    function scoredisplay(counter){
      score=score+rimage[x].pts;
      $("span").replaceWith('<span id="dashboard">score::'+score+'</span>');
    }
     
  // replace ball with dragon 
      
      
     function loop()
     {
                 $(".inner").click(function(){
                  x = Math.floor(size*Math.random());
                  ctr++
                  scoredisplay(ctr);
                  $(this).replaceWith(rimage[x].image);
                 
      });
      
     }