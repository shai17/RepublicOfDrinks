function randomlinks(){
    var myrandom=Math.round(Math.random()*9)
    var links=new Array()
    links[0]="https://www.departmentofcoffee.com/"
    links[1]="https://www.bloomsburycoffeehouse.co.uk/"
    links[2]="https://aubaine.co.uk/"
    links[3]="https://grind.co.uk/"
    links[4]="http://joltcoffee.co.uk/"
    links[5]="https://www.elnlondon.co.uk/"
    links[6]="https://the-attendant.com/"
    links[7]="https://www.stmartin-in-the-fields.org/visit/cafe-in-the-crypt/"
    links[8]="https://www.thened.com/restaurants/cafe-sou"
    links[9]="https://london.ziferblat.net/"
 
    window.location=links[myrandom]
}