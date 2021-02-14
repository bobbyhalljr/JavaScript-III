/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - "this" in the global scope is refering to the window object.
* 2. Implict - whenever to the left of the dot is "this".
* 3. New binding - "this" is refering to an object created by a function.
* 4. Explict binding - whenever .cal(), .apply(), is applied it hijacks the "this" keyword.
*
* write out a code example of each explanation above
*/

// Principle 1
// Window Binding
function yellName(name){
    console.log(this);
    return name;
}

console.log(yellName('BOBBY HALL JR!!!'));

// Principle 2
//Implict Binding
const lifePartner = {
    kiss: '😘',
    showLove: function(){
        console.log(`I love you so much i want to ${this.kiss} you`);
        console.log(this);
    }
};

lifePartner.showLove();

// Principle 3
// New Binding
function Person(showLove){
    this.kiss = '😘';
    this.hug = '🤗';
    this.showLove = function(){
        console.log(`${this.hug} ${this.kiss}`);
        console.log(this);
    }
};

const bobby = new Person('bobby');
const danielle = new Person('danielle');

bobby.showLove();
danielle.showLove();

// Principle 4
// Explict binding
bobby.showLove.call(danielle);
danielle.showLove.call(bobby);