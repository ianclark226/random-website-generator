

var links = [
    'https://harvestseasonal.com/',
   ' http://www.pizzabyelizabeths.com/',
   'https://firebirdsrestaurants.com/',
   'https://www.intuitsolutions.net/',
   'https://sullivanssteakhouse.com/',
   


]

var openSite = function() {
    //get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    //round it, so it can be used as an array index
    randIdx = parseInt(randIdx, 10);

    var link = 'http://' + links[randIdx];


return link;

}
