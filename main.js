/*var quotes=[{q:"Honesty is best policy", a:"Unknown"},{q:"Nothing can beat hardwork", a:"Unknown"}]
console.log("hello")
console.log(quotes[1].q)*/


class App extends React.Component {
constructor()
  {
    super()
    this.state={
      quotes:["\"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.That’s why I say one of the most valuable traits is persistence.\"",
              "\"It does not matter how slowly you go as long as you do not stop.\"",
              "\"Never bend your head. Always hold it high. Look the world straight in the eye.\"",
              "\"You can’t give up! When you give up, you're like everybody else!\"",
             "You can never cross the ocean unless you have the courage to lose sight of the shore."],
       authors:["― Octavia E. Butler","-Confucius","-Helen Kellerc","-Chris Evert ","-Christopher Columbus "],
      
      
        random:0
    }
  }
  
  handleChange=(e)=>{
    var min=0;
    var max=4;
    var rand=min+(Math.random()*(max-min));
    rand=Math.floor(rand)
    this.setState({random:rand})
  }
  
   render(){
//console.log(this.state.quotes[0].q)
   //console.log(this.state.random)
     //console.log("hello")
    return (
        <div id="quote-box">
        
        <p id="text">{this.state.quotes[this.state.random]} </p>
        
        <p id="author">{this.state.authors[this.state.random]}</p>
        <h6>By Vaibhav Agrawal</h6>    
        <button id="new-quote" className="button" onClick={this.handleChange} >New Quote </button>
        {" "}
        <button><a id= "tweet-quote" href="twitter.com/intent/tweet" className="button">Tweet</a></button>
        </div>
    )}
}
ReactDOM.render (<App/>,document.getElementById("root"))
