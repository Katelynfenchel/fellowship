console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  $('body').append('<section id=middleEarth></section>');
  for(var i=0; i < lands.length; i++){
    $('section').append('<article><h1>' + lands[i] + '</h1></article>');
  }
}

makeMiddleEarth();

function makeHobbits(){
  $('article:nth-child(1)').append('<ul></ul>');
  for(var i =0; i < hobbits.length; i++){
    $('ul').append('<li class= hobbit>' + hobbits[i] + '</li>');
  }
}

makeHobbits();

function keepItSecretKeepItSafe(){
  $('li:nth-child(1)').append('<div id="the-ring" class= "magic-imbued-jewelry"></div>');
  
}

keepItSecretKeepItSafe();

function makeBuddies(){
 $('body').append('<aside><ul></ul></aside>');
 for(var i=0; i <buddies.length; i++){
    $('aside').append('<li>' +buddies[i] + '</li>');
    $('aside').appendTo('article:nth-child(2)');
 }
 
 
}

makeBuddies();

function beautifulStranger(){
  $('li:nth-child(4)').text("Aragorn");
}

beautifulStranger();

function leaveTheShire(){
  
// $( ".container" ).append( $( "h2" ) );
  // $('.hobbits').appendTo('article:nth-child(2)')
  $('ul:last').append( $( 'ul:first').children());
}

leaveTheShire();

function forgeTheFellowship() {

  $('article:nth-child(2)').append('<div class= "the-fellowship"></div>');
    var forgeTheFellowship = $('li');
      for(var i= 0; i < forgeTheFellowship.length; i++){
        $('.the-fellowship').append(forgeTheFellowship[i]);
          alert(forgeTheFellowship[i] + " have joined the party ");
      }
  


}

forgeTheFellowship();

function theBalrog(){
  $('li:nth-child(5)').text("Gandalf the White");
   // gandalf.style.border = '3px solid gray';
   // gandalf.style.backgroundcolor = 'white';
  $('li:nth-child(5)').css('background-color', 'white');
  $('li:nth-child(5)').css('border', '3px solid gray');
}

theBalrog();

function hornOfGondor() {
  alert("that the horn of gondor has been blown" + "Boromir's been killed by the Uruk-hai!")
  
  var Boromir = $('li:nth-child(9)');
  $(Boromir).remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
  var Frodo = $('li:nth-child(1)')
   $(Frodo).appendTo('article:nth-child(3)');

   var Sam =$('li:nth-child(1)')
   $(Sam).appendTo('article:nth-child(3)');

    // add a div with an id of `'mount-doom'` to `Mordor
    $('article:nth-child(3)').append('<div id= "mount-doom"></div>');
  
}

itsDangerousToGoAlone();

function weWantsIt() {
  // Create a div with an id of `'gollum'` and add it to Mordor
  $('article:nth-child(3)').append('<div id= "gollum"></div>');
   // Remove `the ring` from `Frodo` and give it to `Gollum`
  // $('li:nth-child(1)').append('<div id="the ring" class= "magic-imbued-jewelry"></div>');
  // 
  // var Frodo2 = $('article').children([2])[6];
  // $(Frodo2).remove('#the-ring');
  var theRing = $('#the-ring').detach()
  theRing.appendTo('#gollum')
    // Move Gollum into Mount Doom
    $('#gollum').appendTo('#mount-doom')

}

weWantsIt();

function thereAndBackAgain(){
  // remove `Gollum` and `the Ring` from the document
  $('#gollum').remove();
  $('.hobbit').appendTo('article:nth-child(1)');

}

thereAndBackAgain();

