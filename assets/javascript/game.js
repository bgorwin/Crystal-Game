$( document ).ready(function(){
/////////////// Computer guess to be random every refresh ////////////  

  var computerGuess=Math.floor(Math.random()*101+19)
  
  $('#randomComputer').text(computerGuess);

////////////// Random Ruby value button after each refresh /////////////  

  var redRuby = Math.floor(Math.random() * 11 + 1)
  var greenRuby= Math.floor(Math.random() * 11 + 1)
  var orangeRuby= Math.floor(Math.random() * 11 + 1)
  var tealRuby= Math.floor(Math.random() * 11 + 1)
 

  var userTotal = 0; 
  var wins = 0;
  var losses = 0;
  
/////////////  Decaring variables for tallies ////////////

$('#numberWins').text(wins);

$('#numberLosses').text(losses);

//////////// Get the game to reset after win or lose //////////

function reset(){
      Random = Math.floor(Math.random() * 101 + 19);
      console.log(Random)
      $('#randomComputer').text(computerGuess);
      redRuby = Math.floor(Math.random() * 11 + 1);
      greenRuby  = Math.floor(Math.random() * 11 + 1);
      orangeRuby = Math.floor(Math.random() * 11 + 1);
      tealRuby = Math.floor(Math.random() * 11 + 1);
      userTotal = 0;
      $('#finalTotal').text(userTotal);
      } 

///// When a win happends, update the '#numberWins' & '#numberLosses' on HTML /////////
  function win(){
  wins++; 
  $('#numberWins').text(wins); 
  reset();
}

function lose(){

  losses++;
  $('#numberLosses').text(losses);
  reset()
};

////////// Clicks for Ruby's and to update the added value for each click ///////

  $('#redRuby').on ('click', function(){
    userTotal = userTotal + redRuby;
    
    $('#finalTotal').text(userTotal); 
          
        if (userTotal == computerGuess){
          win();
        }
        else if ( userTotal > computerGuess){
          lose();
        }   
  })  
  $('#greenRuby').on ('click', function(){
    userTotal = userTotal + greenRuby;
    
    $('#finalTotal').text(userTotal); 
        if (userTotal == computerGuess){
          win();
        }
        else if ( userTotal > computerGuess){
          lose();
        } 
  })  
  $('#orangeRuby').on ('click', function(){
    userTotal = userTotal + orangeRuby;
    
    $('#finalTotal').text(userTotal);

        if (userTotal == computerGuess){
          win();
        }
        else if ( userTotal > computerGuess){
          lose();
        } 
  })  
  $('#tealRuby').on ('click', function(){
    userTotal = userTotal + tealRuby;
    
    $('#finalTotal').text(userTotal); 
      
        if (userTotal == computerGuess){
          win();
        }
        else if ( userTotal > computerGuess){
          lose();
        }
  });   
}); 
