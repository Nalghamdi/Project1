
    $(document).ready(function(){

   
    // start

    var computerChoice=['rock','paper','scissors'];
    var random = Math.floor(Math.random()*3);
    var computerSelection = computerChoice[random];
    console.log(computerSelection);


    // for random sort of array elemnts
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
      
     
      var emotions = ['angry','shy','scared','happy','sleepy','sad','bored','surprised'];
      expression = shuffle(emotions);
     
      var $selectedEmotion =  $('<h2/>').addClass('selected');
      
      $('.emotions h2').after($selectedEmotion)
      console.log(expression);
      
      $selectedEmotion.text(expression[0]);
      $selectedEmotion.css({
          'position' : 'absolute',
          'top' : '50px',
          'left' : '350px',
          'font-family': "'Arima Madurai', cursive",
	     'color':'#e57373',
        'text-align': 'center',
        'font-size': '27px'
        
      })


var i= 0;
var score = 0;
function tryNow(expression){

       if(i<expression.length){
          console.log(expression[i]);
        setTimeout(function(){
            $selectedEmotion.fadeOut();
            $selectedEmotion.fadeIn();
             $selectedEmotion.text(expression[i]);} , 2000);
          //console.log(expression[i]);
          if(expression[i] =='happy'){

          if(event.target.className == 'happy' ){
          var $correct = $('<img/>').attr('src', 'lots-of-stars-clipart-1.jpg');
                 $correct.css({'width' : '150px' , 'height' : '200px' , 'opacity': '0.7', 'padding': '0px'});
                  $('.happy').append($correct);
                console.log('happy');
               setTimeout(function(){
                  $correct.fadeOut(1000);
                  //$selectedEmotion.fadeOut();
                  $correct.remove(); 
                  $('.happy').off(); 
              },1000);
              i++;
              score++;
                  } 
          else
         { $('.happy').css({'border': '3px solid green '});
              setTimeout(function(){
                    $('.happy').css({'border': '', 'box-shadow': ''})
                   // $selectedEmotion.fadeOut();
                },2000);
                 i++;
                }
        } 

        else if(expression[i] =='angry'){

            if(event.target.className == 'angry' ){
            var $correct = $('<img/>').attr('src', 'lots-of-stars-clipart-1.jpg');
                   $correct.css({'width' : '150px' , 'height' : '200px' , 'opacity': '0.7', 'padding': '0px'});
                    $('.angry').append($correct);
                  console.log('angry');
                 setTimeout(function(){
                    $correct.fadeOut(1000);
                   // $selectedEmotion.fadeOut();
                    $correct.remove(); 
                    $('.angry').off(); 
                },1000);
                i++;
                score++;
                    } 
            else
           { $('.angry').css({'border': '3px solid green '});
                setTimeout(function(){
                      $('.angry').css({'border': '', 'box-shadow': ''})
                     // $selectedEmotion.fadeOut();
                  },2000);
                   i++;
                  }
          } 

        
          else if(expression[i] =='shy'){

            if(event.target.className == 'shy' ){
            var $correct = $('<img/>').attr('src', 'lots-of-stars-clipart-1.jpg');
                   $correct.css({'width' : '150px' , 'height' : '200px' , 'opacity': '0.7', 'padding': '0px'});
                    $('.shy').append($correct);
                  console.log('shy');
                 setTimeout(function(){
                    $correct.fadeOut(1000);
                   // $selectedEmotion.fadeOut();
                    $correct.remove(); 
                    $('.shy').off(); 
                },1000);
                i++;
                score++;
                    } 
            else
           { $('.shy').css({'border': '3px solid green '});
                setTimeout(function(){
                      $('.shy').css({'border': '', 'box-shadow': ''})
                     // $selectedEmotion.fadeOut();
                  },2000);
                   i++;
                  }
          } 
          else if(expression[i] =='scared'){

            if(event.target.className == 'scared' ){
            var $correct = $('<img/>').attr('src', 'lots-of-stars-clipart-1.jpg');
                   $correct.css({'width' : '150px' , 'height' : '200px' , 'opacity': '0.7', 'padding': '0px'});
                    $('.scared').append($correct);
                  console.log('scared');
                 setTimeout(function(){
                    $correct.fadeOut(1000);
                   // $selectedEmotion.fadeOut();
                    $correct.remove(); 
                    $('.scared').off(); 
                },1000);
                i++;
                score++;
                    } 
            else
           { $('.scared').css({'border': '3px solid green '});
                setTimeout(function(){
                      $('.scared').css({'border': '', 'box-shadow': ''})
                      //$selectedEmotion.fadeOut();
                  },2000);
                   i++;
                  }
          } 

          else if(expression[i] =='sleepy'){

            if(event.target.className == 'sleepy' ){
            var $correct = $('<img/>').attr('src', 'lots-of-stars-clipart-1.jpg');
                   $correct.css({'width' : '150px' , 'height' : '200px' , 'opacity': '0.7', 'padding': '0px'});
                    $('.sleepy').append($correct);
                  console.log('sleepy');
                 setTimeout(function(){
                    $correct.fadeOut(1000);
                    //$selectedEmotion.fadeOut();
                    $correct.remove(); 
                    $('.sleepy').off(); 
                },1000);
                i++;
                score++;
                    } 
            else
           { $('.sleepy').css({'border': '3px solid green '});
                setTimeout(function(){
                      $('.sleepy').css({'border': '', 'box-shadow': ''})
                     // $selectedEmotion.fadeOut();
                  },2000);
                   i++;
                  }
          } 

          else if(expression[i] =='sad'){

            if(event.target.className == 'sad' ){
            var $correct = $('<img/>').attr('src', 'lots-of-stars-clipart-1.jpg');
                   $correct.css({'width' : '150px' , 'height' : '200px' , 'opacity': '0.7', 'padding': '0px'});
                    $('.sad').append($correct);
                  console.log('sad');
                 setTimeout(function(){
                    $correct.fadeOut(1000);
                    //$selectedEmotion.fadeOut();
                    $correct.remove(); 
                    $('.sad').off(); 
                },1000);
                i++;
                score++;
                    } 
            else
           { $('.sad').css({'border': '3px solid green '});
                setTimeout(function(){
                      $('.sad').css({'border': '', 'box-shadow': ''})
                      //$selectedEmotion.fadeOut();
                  },2000);
                   i++;
                   
                  }
          }
          
          else if(expression[i] =='bored'){

            if(event.target.className == 'bored' ){
            var $correct = $('<img/>').attr('src', 'lots-of-stars-clipart-1.jpg');
                   $correct.css({'width' : '150px' , 'height' : '200px' , 'opacity': '0.7', 'padding': '0px'});
                    $('.bored').append($correct);
                  console.log('bored');
                 setTimeout(function(){
                    $correct.fadeOut(1000);
                    //$selectedEmotion.fadeOut();
                    $correct.remove(); 
                    $('.bored').off(); 
                },1000);
                i++;
                score++;
                    } 
            else
           { $('.bored').css({'border': '3px solid green '});
                setTimeout(function(){
                      $('.bored').css({'border': '', 'box-shadow': ''})
                     // $selectedEmotion.fadeOut();
                  },2000);
                   i++;
                  }
          } 

          else if(expression[i] =='surprised'){

            if(event.target.className == 'surprised' ){
            var $correct = $('<img/>').attr('src', 'lots-of-stars-clipart-1.jpg');
                   $correct.css({'width' : '150px' , 'height' : '200px' , 'opacity': '0.7', 'padding': '0px'});
                    $('.surprised').append($correct);
                  console.log('surprised');
                 setTimeout(function(){
                    $correct.fadeOut(1000);
                   // $selectedEmotion.fadeOut();
                    $correct.remove(); 
                    $('.surprised').off(); 
                },1000);
                i++;
                score++;
                    } 
            else
           { $('.surprised').css({'border': '3px solid green ', });
                setTimeout(function(){
                      $('.surprised').css({'border': '', 'box-shadow': ''})
                     // $selectedEmotion.fadeOut();
                  },2000);
                   i++;
                  }
          }
       return score;
        }
        else
        swal({
    icon: 'success' ,
    title: 'Good try!',
    text: 'You scored '+score +'/8',
    button: "Aww yess!",
  })


    }
  console.log(score);
   
    var $firstSelection = $('<div/>').addClass('selection1');
    var $secondSelection = $('<div/>').addClass('selection2');
 

    $firstSelection.css( {
      'height': '150px',
      'width': '150px' ,
      'background-color': 'rgb(236,171,180)' ,
      'border-radius': '50%' ,
      'display': 'inline-block' ,
      'z-index': 1 ,
      'position': 'absolute' ,
      'left':'5px' ,
      'top':'250px' ,
    });
    $secondSelection.css( {
      'height': '150px',
      'width': '150px' ,
      'background-color': 'rgb(141,193,174)' ,
      'border-radius': '50%' ,
      'display': 'inline-block' ,
      'z-index': 1 ,
      'position': 'absolute' ,
      'right':'5px' ,
      'top':'250px' ,
    });

    var $choice1 = $('<div/>').addClass('choice1');
    var $choice2 = $('<div/>').addClass('choice2');
    var $choice3 = $('<div/>').addClass('choice3');
    var $choice4 = $('<div/>').addClass('choice4');

      
      $choice4.css( {
        'height': '150px',
        'width': '150px' ,
        'background-color': 'rgb(252,233,145) ',
        'border-radius': '50%' ,
        'display': 'inline-block' ,
        'z-index': 1 ,
        'position': 'absolute' ,
        'right':'5px' ,
        'bottom':'40px' ,
      });

      $choice2.css( {
        'height': '150px',
        'width': '150px' ,
        'background-color': 'rgb(193,229,218)',
        'border-radius': '50%' ,
        'display': 'inline-block' ,
        'z-index': 1 ,
        'position': 'absolute' ,
        'right':'5px' ,
        'top':'150px' ,
      });

      $choice3.css( {
        'height': '150px',
        'width': '150px' ,
        'background-color': 'rgb(191,225,239)',
        'border-radius': '50%' ,
        'display': 'inline-block' ,
        'z-index': 1 ,
        'position': 'absolute' ,
        'left':'5px' ,
        'bottom':'40px' ,
      });
      $choice1.css( {
        'height': '150px',
        'width': '150px' ,
        'background-color': 'rgb(243,208,221)',
        'border-radius': '50%' ,
        'display': 'inline-block' ,
        'z-index': 1 ,
        'position': 'absolute' ,
        'left':'5px' ,
        'top':'150px' ,
      });

      
    var $topping1 = $('<div/>').addClass('topping1');
    var $topping2 = $('<div/>').addClass('topping2');

    $topping1.css( {
      'height': '150px',
      'width': '150px' ,
      'background-color': 'rgb(249,212,120)' ,
      'border-radius': '50%' ,
      'display': 'inline-block' ,
      'z-index': 1 ,
      'position': 'absolute' ,
      'left':'5px' ,
      'top':'250px' ,
    });
    $topping2.css( {
      'height': '150px',
      'width': '150px' ,
      'background-color': 'rgb(164,200,231)' ,
      'border-radius': '50%' ,
      'display': 'inline-block' ,
      'z-index': 1 ,
      'position': 'absolute' ,
      'right':'5px' ,
      'top':'250px' ,
    });

    // var $lookingLeft = $('<img/>').attr('src', 'left.png');
    // var $lookingRight = $('<img/>').attr('src', 'right.png');
    var $backgrounds2 = ['right.png','left.png'];
    var $background2Selection =$backgrounds2[Math.floor(Math.random()*2)];
  
    var $backgrounds = ['right1.png','left2.png'];
    var $backgroundsSelection =$backgrounds[Math.floor(Math.random()*2)];


    var $backgrounds4 = ['top-right.png','top-left.png','bottom-left.png','bottom-right.png'];
    var $background4Selection =$backgrounds4[Math.floor(Math.random()*4)];
    console.log('computer chosen' + $background2Selection);
   // console.log('computer chosen' + $backgrounds2[Math.floor(Math.random()*2)+1]);
    console.log('computer chosen' + $background4Selection);

function gameStarts(){

    $('.bear').css({'background-image': 'url('+ $background2Selection+')'});
    setTimeout(function(){
        $('.sweet').append($firstSelection);
        $('.sweet').append($secondSelection);
    },1000);
    $firstSelection.css( {'background-image': 'url("biscuit.png")', 'background-size':'cover' });
    $secondSelection.css( {'background-image': 'url("cup.png")','background-size':'140px 140px', 'background-repeat':'none'});
    $firstSelection.fadeOut(1000);
    $firstSelection.fadeIn(2000);
    $secondSelection.fadeOut(1000);
    $secondSelection.fadeIn(2000);

    if($background2Selection == 'right.png')
    {
       $secondSelection.on('click', secondSelection);
       $firstSelection.on('click', function(){
        $secondSelection.css('border','5px solid green');
       $secondSelection.addClass('animated shake');
       
       })
    }

    if($background2Selection == 'left.png')
    {
       $firstSelection.on('click', firstSelection);
       $secondSelection.on('click', function(){
        $firstSelection.css('border','5px solid green');
        $firstSelection.addClass('animated shake');
       })
    }
   
    if($background4Selection == 'top-left.png')
    {
       $choice1.on('click', choice1);
       $choice2.on('click', function(){
        $choice1.css('border','5px solid green');
        $choice1.addClass('animated shake');
       })
      
       $choice3.on('click', function(){
        $choice1.css('border','5px solid green');
        $choice1.addClass('animated shake');
       })
       
       $choice4.on('click', function(){
        $choice1.css('border','5px solid green');
       })
    }

    if($background4Selection == 'top-right.png')
    {
       $choice2.on('click', choice2);
       $choice1.on('click', function(){
        $choice2.css('border','5px solid green');
        $choice2.addClass('animated shake');
       })
       
       $choice3.on('click', function(){
        $choice2.css('border','5px solid green');
        $choice2.addClass('animated shake');
       })
       $choice4.on('click', function(){
        $choice2.css('border','5px solid green');
        $choice2.addClass('animated shake');
       })
    }
    if($background4Selection == 'bottom-left.png')
    {
       $choice3.on('click', choice3);
       $choice1.on('click', function(){
        $choice3.css('border','5px solid green');
        $choice3.addClass('animated shake');
       })
       $choice2.on('click', function(){
        $choice3.css('border','5px solid green');
        $choice3.addClass('animated shake');
       })
       $choice4.on('click', function(){
        $choice3.css('border','5px solid green');
        $choice3.addClass('animated shake');
       })
    }
    if($background4Selection == 'bottom-right.png')
    {
       $choice4.on('click', choice4);
       $choice1.on('click', function(){
        $choice4.css('border','5px solid green');
        $choice4.addClass('animated shake');
       })
       $choice2.on('click', function(){
        $choice4.css('border','5px solid green');
        $choice4.addClass('animated shake');
       })
       $choice3.on('click', function(){
        $choice4.css('border','5px solid green');
        $choice4.addClass('animated shake');
       })
    }
    if($backgroundsSelection == 'right1.png'){
        $topping2.on('click', topping2);
        $topping1.on('click', function(){
         $topping2.css('border','5px solid green');
         $topping2.addClass('animated shake');
        })
    }
    else{
        $topping1.on('click', topping1);
        $topping2.on('click', function(){
         $topping1.css('border','5px solid green');
         $topping1.addClass('animated shake');
        })
    }
    
 
    }
gameStarts();



    function firstSelection(){
        $( "#mydiv" ).addClass('s1');
        $firstSelection.fadeOut(1000);
    $secondSelection.fadeOut(1000);
        setTimeout(function(){
        $firstSelection.hide();
        $secondSelection.remove();},1000);
        setTimeout(function(){
            $('.bear').css({'background-image': 'url('+ $background4Selection+')'});
            $('.sweet').append($choice1);
            $('.sweet').append($choice2); 
            $('.sweet').append($choice3); 
            $('.sweet').append($choice4); },1000);
            $choice1.css( {'background-image': 'url("mint-f.png")','background-size':'100px 100px', 'background-repeat':'no-repeat', 'background-position' : 'center'});
            $choice2.css( {'background-image': 'url("strawberry-f.png")','background-size':'100px 100px', 'background-repeat':'no-repeat', 'background-position' : 'center'});
            $choice3.css( {'background-image': 'url("chocolate-f.png")','background-size':'100px 100px', 'background-repeat':'no-repeat', 'background-position' : 'center'});
            $choice4.css( {'background-image': 'url("vannila-f.png")','background-size':'100px 100px', 'background-repeat':'no-repeat', 'background-position' : 'center'});
    
     $choice1.fadeOut(1000);
     $choice1.fadeIn(2000);
     $choice2.fadeOut(1000);
     $choice2.fadeIn(2000);
     $choice3.fadeOut(1000);
     $choice3.fadeIn(2000);
     $choice4.fadeOut(1000);
     $choice4.fadeIn(2000);}

     function choice1 (){
        $( "#mydiv" ).addClass('ch1');
        $choice4.fadeOut(1000);$choice3.fadeOut(1000);$choice2.fadeOut(1000); $choice1.fadeOut(1000);
         setTimeout(function(){
            $choice1.hide();
            $choice2.remove();
            $choice3.remove();
            $choice4.remove();
        },1000);
        setTimeout(function(){
            $('.bear').css({'background-image': 'url('+$backgroundsSelection+')'});
            $('.sweet').append($topping1);
            $('.sweet').append($topping2); 
        },1000);
        $topping1.css( {'background-image': 'url("sauce.png")', 'background-size':'80px 150px','background-position' : 'center' ,'background-repeat':'no-repeat'});
        $topping2.css( {'background-image': 'url("cherry.png")','background-size':'80px 120px', 'background-repeat':'no-repeat', 'background-position' : 'center'});
        $topping1.fadeOut(1000);
        $topping1.fadeIn(2000);
        $topping2.fadeOut(1000);
        $topping2.fadeIn(2000);}

       function topping1(){
        $( "#mydiv" ).addClass('t1');
            $topping1.fadeOut(1000);$topping2.fadeOut(1000);
             setTimeout(function(){
                $topping1.hide();
                $topping2.remove();
            },1000);
            finalOutput();}

         function topping2(){
            $( "#mydiv" ).addClass('t2');
            $topping1.fadeOut(1000);$topping2.fadeOut(1000);
             setTimeout(function(){
                $topping2.hide();
                $topping1.remove();
            },1000);
            finalOutput();}

       function choice2(){
        $( "#mydiv" ).addClass('ch2');
        $choice4.fadeOut(1000);$choice3.fadeOut(1000);$choice2.fadeOut(1000); $choice1.fadeOut(1000);
         setTimeout(function(){
            $choice1.remove();
            $choice2.hide();
            $choice3.remove();
            $choice4.remove();
        },1000);
        setTimeout(function(){
            $('.bear').css({'background-image': 'url('+$backgroundsSelection+')'});
           $('.sweet').append($topping1);
            $('.sweet').append($topping2); 
        },1000);
        $topping1.css( {'background-image': 'url("sauce.png")', 'background-size':'80px 150px','background-position' : 'center' ,'background-repeat':'no-repeat'});
        $topping2.css( {'background-image': 'url("cherry.png")','background-size':'80px 120px', 'background-repeat':'no-repeat', 'background-position' : 'center'});
        $topping1.fadeOut(1000);
        $topping1.fadeIn(2000);
        $topping2.fadeOut(1000);
        $topping2.fadeIn(2000);

    }
    function choice3(){
        $( "#mydiv" ).addClass('ch3');
        $choice4.fadeOut(1000);$choice3.fadeOut(1000);$choice2.fadeOut(1000); $choice1.fadeOut(1000);
         setTimeout(function(){
            $choice1.remove();
            $choice2.remove();
            $choice3.hide();
            $choice4.remove();
        },1000);
        setTimeout(function(){
            $('.bear').css({'background-image': 'url('+$backgroundsSelection+')'});
            $('.sweet').append($topping1);
            $('.sweet').append($topping2); 
        },1000);
        $topping1.css( {'background-image': 'url("sauce.png")', 'background-size':'80px 150px','background-position' : 'center' ,'background-repeat':'no-repeat'});
        $topping2.css( {'background-image': 'url("cherry.png")','background-size':'80px 120px', 'background-repeat':'no-repeat', 'background-position' : 'center'});
        $topping1.fadeOut(1000);
        $topping1.fadeIn(2000);
        $topping2.fadeOut(1000);
        $topping2.fadeIn(2000);}

     function choice4(){
        $( "#mydiv" ).addClass('ch4');
        $choice4.fadeOut(1000);$choice3.fadeOut(1000);$choice2.fadeOut(1000); $choice1.fadeOut(1000);
         setTimeout(function(){
            $choice1.remove();
            $choice2.remove();
            $choice3.remove();
            $choice4.hide();
        },1000);
        setTimeout(function(){
            $('.bear').css({'background-image': 'url('+$backgroundsSelection+')'});
            $('.sweet').append($topping1);
            $('.sweet').append($topping2); 
        },1000);
        $topping1.css( {'background-image': 'url("sauce.png")', 'background-size':'80px 150px','background-position' : 'center' ,'background-repeat':'no-repeat'});
        $topping2.css( {'background-image': 'url("cherry.png")','background-size':'80px 120px', 'background-repeat':'no-repeat', 'background-position' : 'center'});
        $topping1.fadeOut(1000);
        $topping1.fadeIn(2000);
        $topping2.fadeOut(1000);
        $topping2.fadeIn(2000);}

       
function secondSelection(){
    $( "#mydiv" ).addClass('s2');
    $firstSelection.fadeOut(1000);
$secondSelection.fadeOut(1000);
    setTimeout(function(){
    $firstSelection.remove();
    $secondSelection.hide();});
    $('.bear').css({'background-image': 'url('+ $background4Selection+')'});
    setTimeout(function(){
        $('.sweet').append($choice1);
        $('.sweet').append($choice2); 
        $('.sweet').append($choice3); 
        $('.sweet').append($choice4); },1000);
 $choice1.fadeOut(1000);
 $choice1.fadeIn(2000);
 $choice2.fadeOut(1000);
 $choice2.fadeIn(2000);
 $choice3.fadeOut(1000);
 $choice3.fadeIn(2000);
 $choice4.fadeOut(1000);
 $choice4.fadeIn(2000);}



 function finalOutput(){
     
    if ( $( "#mydiv" ).hasClass('s1 ch1 t1'))
    {swal({
        icon: 'mint-ch.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      }
     
      )
}
   
    else if ( $( "#mydiv" ).hasClass('s1 ch1 t2'))
    {swal({
        icon: 'mint.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

    else if( $( "#mydiv" ).hasClass('s1 ch2 t1'))
    {swal({
        icon: 'strawberry-ch.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

     else if ( $( "#mydiv" ).hasClass('s1 ch2 t2'))
     {swal({
        icon: 'strawberry.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

     else if ( $( "#mydiv" ).hasClass('s1 ch3 t1'))
     {swal({
        icon: 'chocolate-ch.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',      
        button: "Aww yess!",
      })
}

     else if ( $( "#mydiv" ).hasClass('s1 ch3 t2'))
     {swal({
        icon: 'chocolate.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

     else if ( $( "#mydiv" ).hasClass('s1 ch4 t1'))
     {swal({
        icon: 'vanilla-ch.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

     else if ( $( "#mydiv" ).hasClass('s1 ch4 t2'))
     {swal({
        icon: 'vannila.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

    else if ( $( "#mydiv" ).hasClass('s2 ch1 t1'))
    {swal({
        icon: 'mint-cup-ch.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}
   
    else if  ( $( "#mydiv" ).hasClass('s2 ch1 t2'))
    {swal({
        icon: 'mint-cup-chr.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

    else if  ( $( "#mydiv" ).hasClass('s2 ch2 t1'))
    {swal({
        icon: 'strawberry-cup-ch.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

    else if  ( $( "#mydiv" ).hasClass('s2 ch2 t2'))
    {swal({
        icon: 'strawberry-cup-chr.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

    else if  ( $( "#mydiv" ).hasClass('s2 ch3 t1'))
    {swal({
        icon: 'chocolate-cup-ch.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

    else if  ( $( "#mydiv" ).hasClass('s2 ch3 t2'))
    {swal({
        icon: 'chocolate-cup-chr.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

    else if  ( $( "#mydiv" ).hasClass('s2 ch4 t1'))
    {swal({
        icon: 'vannila-cup-ch.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}

    else if  ( $( "#mydiv" ).hasClass('s2 ch4 t2'))
    {swal({
        icon: 'vannila-cup-chr.png' ,
        imageSize: '70x70',
        title: 'Sweet!',
        text: 'You made the ice-cream that teddy wants.',
        button: "Aww yess!",
      })
}
     else
     console.log('try again');
 }
 

   // $('.emotions').on('click',tryNow(expression));
      $( ".emotions" ).click(function( event ) {
        //console.log( "clicked: " + event.target.className );
        tryNow(expression);
      });


// coloring
$coloring = $('.circle');
var randPosX = Math.floor((Math.random()* 800));
var randPosY = Math.floor((Math.random()* 800));

var colors3 = ['Red','Yellow','Lightblue','Brown']
$colorNeeded =$('<h2/>').addClass('colorNeeded');

$('.starterLine').after($colorNeeded);
$colorNeeded.text('Catch the '+colors3[0]  + ' ' +colors3[1] + ' ' +colors3[2]+ ' colors');
$colorNeeded.css({
    'font-family': "'Arima Madurai', cursive",
	'color':'#009688',
	'text-align': 'center'
})

function createRedColor() {
var $color = $('<div/>').addClass('color');
$coloring.append($color);
$color.css({
    'position': 'absolute',
    'width': '70px',
    'height': '70px',
    'background': 'red',
    'border-radius': '50%',
    'right':'80px',
    'top':'50px',
    'margin':'20px'
    });
setInterval(function(){ 
 $color.animate({
    'left':  Math.random() * randPosY,
    'top' : Math.random() * randPosX,
    'bottom': Math.random() * randPosY,
    'right' : Math.random() * randPosX,});
}, 1000)
 return $color;
 
}


function createBlueColor() {
    var $colorB = $('<div/>').addClass('colorB');
    $coloring.append($colorB);
    $colorB.css({
        'position': 'absolute',
        'width': '70px',
        'height': '70px',
        'background': 'lightblue',
        'border-radius': '50%',
        'right':'80px',
        'top':'50px',
        'margin':'20px'
        });
    setInterval(function(){ 
     $colorB.animate({
       'left':  Math.random() * randPosY,
       'top' : Math.random() * randPosX,
       'bottom': Math.random() * randPosY,
       'right' : Math.random() * randPosX,});
    }, 1000)
   
     return $colorB;
    }

    function createBrownColor() {
        var $colorBr = $('<div/>').addClass('colorBr');
        $coloring.append($colorBr);
        $colorBr.css({
            'position': 'absolute',
            'width': '70px',
            'height': '70px',
            'background': 'brown',
            'border-radius': '50%',
            'right':'80px',
            'top':'50px',
            'margin':'20px'
            });
        setInterval(function(){ 
         $colorBr.animate({
           'left':  Math.random() * randPosY,
           'top' : Math.random() * randPosX,
           'bottom': Math.random() * randPosY,
           'right' : Math.random() * randPosX,});
        }, 1000)
       
         return $colorBr;
        }

    function createYellowColor() {
        var $colorY = $('<div/>').addClass('colorY');
        $coloring.append($colorY);
        $colorY.css({
            'position': 'absolute',
            'width': '70px',
            'height': '70px',
            'background': 'Yellow',
            'border-radius': '50%',
            'right':'80px',
            'top':'50px',
            'margin':'20px'
            });
        setInterval(function(){ 
         $colorY.animate({
           'left':  Math.random() * randPosY,
           'top' : Math.random() * randPosX,
           'bottom': Math.random() * randPosY,
           'right' : Math.random() * randPosX,});
        }, 1000)
       
         return $colorY;
        }

        
        function createPinkColor() {
            var $colorP = $('<div/>').addClass('colorP');
            $coloring.append($colorP);
            $colorP.css({
                'position': 'absolute',
                'width': '70px',
                'height': '70px',
                'background': '#ff80ab ',
                'border-radius': '50%',
                'right':'80px',
                'top':'50px',
                'margin':'20px'
                });
            setInterval(function(){ 
             $colorP.animate({
               'left':  Math.random() * randPosY,
               'top' : Math.random() * randPosX,
               'bottom': Math.random() * randPosY,
               'right' : Math.random() * randPosX,});
            }, 1000)
           
             return $colorP;
            }
            function createGreenColor() {
                var $colorG = $('<div/>').addClass('colorG');
                $coloring.append($colorG);
                $colorG.css({
                    'position': 'absolute',
                    'width': '70px',
                    'height': '70px',
                    'background': '#009688',
                    'border-radius': '50%',
                    'right':'80px',
                    'top':'50px',
                    'margin':'20px'
                    });
                setInterval(function(){ 
                 $colorG.animate({
                   'left':  Math.random() * randPosY,
                   'top' : Math.random() * randPosX,
                   'bottom': Math.random() * randPosY,
                   'right' : Math.random() * randPosX,});
                }, 1000)
               

                 return $colorG;
                
                }

                function createPurpleColor() {
                    var $colorPu = $('<div/>').addClass('colorPu');
                    $coloring.append($colorPu);
                    $colorPu.css({
                        'position': 'absolute',
                        'width': '70px',
                        'height': '70px',
                        'background': '#7e57c2',
                        'border-radius': '50%',
                        'right':'80px',
                        'top':'50px',
                        'margin':'20px'
                        });
                    setInterval(function(){ 
                     $colorPu.animate({
                       'left':  Math.random() * randPosY,
                       'top' : Math.random() * randPosX,
                       'bottom': Math.random() * randPosY,
                       'right' : Math.random() * randPosX,});
                    }, 1000)
                   
    
                     return $colorPu;
                    
                    }

                    function createOrangeColor() {
                        var $colorOr = $('<div/>').addClass('colorOr');
                        $coloring.append($colorOr);
                        $colorOr.css({
                            'position': 'absolute',
                            'width': '70px',
                            'height': '70px',
                            'background': '#f57c00',
                            'border-radius': '50%',
                            'right':'80px',
                            'top':'50px',
                            'margin':'20px'
                            });
                        setInterval(function(){ 
                         $colorOr.animate({
                           'left':  Math.random() * randPosY,
                           'top' : Math.random() * randPosX,
                           'bottom': Math.random() * randPosY,
                           'right' : Math.random() * randPosX,});
                        }, 1000)
                       
        
                         return $colorOr;
                        
                        }
createRedColor();
createBlueColor();
createYellowColor();
createPinkColor();
createGreenColor();
createOrangeColor();
createPurpleColor();
createBrownColor();


function ColorGame(){


        $('.color').on('click',redSpot);
        $('.colorB').on('click',blueSpot);
        $('.colorY').on('click',yellwoSpot);
        $('.colorBr').on('click',brownSpot);
        $('.colorG').on('click',ops);
        $('.colorP').on('click',ops);
        $('.colorOr').on('click',ops);
        $('.colorPu').on('click',ops);
        checkDrawing();
      

}

function checkDrawing(){
    if ( $( "#finished" ).hasClass('door triangle window home'))
    {{swal({
        icon: 'success' ,
        title: 'Great Work!',
        text: 'You have picked all the colors needed',
        button: "I am smart",
      }
     )} console.log('good job');}
}
checkDrawing();
ColorGame();

function redSpot(){
    $('.color').addClass('ink');
    $('.color').css('background-color','');
     var $inkImg = $('<img/>').attr('src', 'red-ink.png');
     $inkImg.css({'width':'100px','height':'100px'});
    $('.color').append($inkImg);
    setTimeout(function () {
        $inkImg.remove();
     correctR();
    }, 1000);
}

function brownSpot(){
    $('.colorBr').addClass('ink');
    $('.colorBr').css('background-color','');
     var $inkImg = $('<img/>').attr('src', 'brown-ink.png');
     $inkImg.css({'width':'100px','height':'100px'});
    $('.colorBr').append($inkImg);
    setTimeout(function () {
        $inkImg.remove();
     correctBr();
    }, 1000);
}

    function blueSpot(){
        $('.colorB').addClass('inkBlue');
        $('.colorB').css('background-color','');
         var $inkBlue = $('<img/>').attr('src', 'blue-ink.png');
         $inkBlue.css({'width':'100px','height':'100px'});
        $('.colorB').append($inkBlue);
        setTimeout(function () {
         $('.inkBlue').hide();
        correctB();

        }, 500);
    }

    function yellwoSpot(){
        $('.colorY').addClass('inkY');
            $('.colorY').css('background-color','');
             var $inkY = $('<img/>').attr('src', 'yellow-ink.png');
             $inkY.css({'width':'100px','height':'100px'});
            $('.colorY').append($inkY);
            setTimeout(function () {
             $('.inkY').hide();
            correctY();
            }, 500);
         }

            function ops(){
                $(this).addClass('ops');
                    $(this).css('background-color','');
                     var $ops = $('<img/>').attr('src', 'ops.png');
                     $ops.css({'width':'100px','height':'100px'});
                    $(this).append($ops);
                    setTimeout(function () {
                     $('.ops').hide();
                    }, 500);
                    $('.brushs').children().last().remove();
                  if($('.brushs').children().length == 0)
                  swal({
                    icon: 'error' ,
                    title: 'Oh No',
                    text: 'You lost all your chances to pick the right color',
                    button: "I'll try harder",
                  })
                  
          }


$painter = $('.painter');

var $triangle = $('.triangle-up');
var $square = $('.square');
var $window1 = $('.window1');
var $window2 = $('.window2');
var $rectangle = $('.rectangle');

function correctR(){

        $painter.css('background-image','url("character-rightSide.png")');
        $painter.animate({
          'right': '100px',
      });

      setTimeout(function(){
        $painter.css('background-image','url("character-back.png")');
        $triangle.css('border-bottom', '100px solid red');      
      },1000);
      setTimeout(function(){
        $painter.css('background-image','url("character-leftSide.png")');
        $painter.animate({
          'right': '250px',
      });},4000);
      setTimeout(function(){
        $painter.css('background-image','url("character-front.png")');
    },5000); 
    $( "#finished" ).addClass('triangle');
    checkDrawing();
}

function correctB(){
    
        $painter.css('background-image','url("character-rightSide.png")');
        $painter.animate({
          'right': '100px',
      });
      setTimeout(function(){
        $painter.css('background-image','url("character-back.png")');
        $window1.css('background', 'lightblue');    
        $window2.css('background', 'lightblue');     
      },1000);
      setTimeout(function(){
        $painter.css('background-image','url("character-leftSide.png")');
        $painter.animate({
          'right': '250px',
      });},4000);
      setTimeout(function(){
        $painter.css('background-image','url("character-front.png")');
    },5000); 
    $( "#finished" ).addClass('window');  
    checkDrawing();
}

function correctBr(){
    
        $painter.css('background-image','url("character-rightSide.png")');
        $painter.animate({
          'right': '100px',
      });
      setTimeout(function(){
        $painter.css('background-image','url("character-back.png")');
        $rectangle.css('background', 'brown');    
      },1000);
      setTimeout(function(){
        $painter.css('background-image','url("character-leftSide.png")');
        $painter.animate({
          'right': '250px',
      });},4000);
      setTimeout(function(){
        $painter.css('background-image','url("character-front.png")');
    },5000);   
    $( "#finished" ).addClass('door');
    checkDrawing();

}


function correctY(){
    
        $painter.css('background-image','url("character-rightSide.png")');
        $painter.animate({
          'right': '100px',
      });
      setTimeout(function(){
        $painter.css('background-image','url("character-back.png")');
        $square.css('background', 'yellow');    
           
      },1000);
      setTimeout(function(){
        $painter.css('background-image','url("character-leftSide.png")');
        $painter.animate({
          'right': '250px',
      });},4000);
      setTimeout(function(){
        $painter.css('background-image','url("character-front.png")');
    },5000);   
    $( "#finished" ).addClass('home');
    checkDrawing();
}



 $( ".bearGame" ).hover(
    function() {
      $( this ).append( $( "<span> Benefits : Since most children with autism don't like to make eye contact, this will help them look at someone's eyes more.</span>" ) );
    }, function() {
      $( this ).find( "span:last" ).remove();
    }
  );

  $( ".paintingGame" ).hover(
    function() {
      $( this ).append( $( "<span> Benefits : This will help kids focus on moving objects and learn more about colors.</span>" ) );
    }, function() {
      $( this ).find( "span:last" ).remove();
    }
  );



$( ".emotionsGame" ).hover(
    function() {
      $( this ).append( $( "<span> Benefits : This will help kids understand more about the emotions of other</span>" ) );
    }, function() {
      $( this ).find( "span:last" ).remove();
    }
  );


  $('.showB').click(function(event) {
 $('#modal').show();
    });

    $('.showP').click(function(event) {
        $('#painitng').show();
        });

 $('.showE').click(function(event) {
$('main').show();
     });

})

