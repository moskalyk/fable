import * as React from 'react';
import './App.css';
import { createClient } from "@fluencelabs/fluence";
import { testNet } from "@fluencelabs/fluence-network-environment";

async function main() {
  const client = await createClient(testNet[1]);
  console.log("Is client connected: ", client.isConnected);
  // get peerId -> matter.direct -> ¢ // 0
  // get role, see page with oracle crystal ball // 1 hr
  // perform "drop binaural" // 6 hr
  // load binuraulMedia renderer (ask the question why here) // 3
  // welcome, see the demo to view how fable works. we use.  .. // 2
  // first we want you to picture a moment that last time you were in water, and how that made you feel. // 1
  // demo: pulls card, water symbol, listens to sound. // 2
  // Q: Now, interested in a tarot reading? // 1
  // see page with various subjective contexts (sonar, birds, plasma) // ~
  // take from tan (for now) // 0.5
  // pull card to mint card with abi.sig verifiable conjuctions // 2 / mina
  // playback on cards on loop to music. // 3
  // dioramma // 4
  await client.disconnect();
}

function fable(x,y){
  // hod->tipareth

}
var contextClass = (window.AudioContext)

if (contextClass) {
  // Web Audio API is available.
  var context = new contextClass();
}

// TODO: refactor
const oscOn = function(freq1, freq2){

  const merger = context.createChannelMerger(2);

  oscillator1 = context.createOscillator();
  // oscillator1.type = (0 as OscillatorType)
  oscillator1.frequency.value = freq1;
  const gainNode = context.createGain ? context.createGain() : context.createGain();
  oscillator1.connect(gainNode,0,0);
  // gainNode.connect(context.destination,0,0);
  gainNode.gain.value = .1;
  oscillator1.start ? oscillator1.start(0) : oscillator1.frequency.setValueAtTime(440, Date.now())

  gainNode.connect(merger,0,1);

  oscillator2 = context.createOscillator();
  // const oscillator2.type = 0;
  oscillator2.frequency.value = freq2;
  const gainNode2 = context.createGain ? context.createGain() : context.createGain();
  oscillator2.connect(gainNode2);
  // gainNode.connect(context.destination,0,1);
  gainNode.connect(merger,0,0);


  gainNode.gain.value = .1;
  oscillator2.start ? oscillator2.start(0) : oscillator2.frequency.setValueAtTime(440, Date.now())

  merger.connect(context.destination);


};

function start() {
  if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
  if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
  // oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));

  setInterval(() => {
    stop();
    oscOn(Date.now() % 201, Date.now() % 301);
    // oscOn(100,101);
  }, 1000)

  setInterval(() => {
    stop();
    oscOn(Date.now() % 201, Date.now() % 101);
    // oscOn(Date.now() % 100, Date.now() % 101);
    // oscOn(100,101);
  }, 100)
}

var oscillator1;
var oscillator2;

function stop() {
  if (typeof oscillator1 != 'undefined') 
    oscillator1.disconnect() 
  else alert('hmm')

  if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
}


// breakpoint


const memory = processData('text')

// [
//   ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',], // headers / hedenu
//   [],
//   [],
//   [],
// ]

function processData(allText) {
    var record_num = 5;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
        }
        lines.push(tarr);
    }
    // alert(lines);
}




main();
// dioramma // 4
function Fable() {
function detectspecialkeys(e){
    var evtobj= e
    if (evtobj.altKey || evtobj.ctrlKey || evtobj.shiftKey)
        alert("you pressed one of the 'Alt', 'Ctrl', or 'Shift' keys")
}
document.onkeypress=detectspecialkeys

// Listen to keyboard. 
    window.onkeypress = listenToTheKey;
    // window.onkeyup = listenToKeyUp;

    /*
        Gets the key pressed and send a request to the associated function
        @input key
    */
    function listenToTheKey(e)
    {
      console.log(e)
        if (e.ctrlKey){ // bgp
          // console.log('howdy')
          setNoun(e.target.value)
          (document.getElementById('respect') as HTMLInputElement).value = e.key
        }
    }
  const [noun, setNoun] = React.useState('¢')
  // embed md mina crystal key
  const crystal = (rad) => {
    switch(rad){
      case '¢':
        return 1;
      case '♦':
        return <>noice noice noice</>
      case '~':
        return <div className="generator-ad-wrapper">
          <div id="generator" className="generator">
              <form>
                  <div className="binaural-freq-wrapper">
                      <input type="text" id="freq2" name="freq2" value="500" className="input--frequency"/>
                      <p id="freq2label">🦻<br/>Frequency (HZ)</p>
                  </div>
                  <div className="binaural-freq-wrapper">
                      <input type="text" id="freq" name="freq" value="503" className="input--frequency"/>
                      <p>👂<br/>Frequency (HZ)</p>
                  </div>
                  <div className="generator-buttons">
                      <button type="button" onClick={() => start()} className="beginTuning generatorButton">Play</button>
                      <button type="button" onClick={() => stop()} className="stopTuning generatorButton">Stop</button>
                  </div>
                  <script src="js/binaural.js"></script>
              </form>
              <p className="clear"></p>
          </div>
        </div>
      case '☮':
        return <>p</>
      default:
        return 2;
    }
  }
  return (
    <div className="App">
      ☮
      {/*// get peerId -> matter.direct -> ¢ // 0*/}
      {/*dex*/}

      {/*// get role, see page with oracle crystal ball // 1 hr*/}
      {/*crystal*/}

      {/*// perform "drop binaural" // 6 hr*/}
      {/*channel*/}

      {/*// load binuraulMedia renderer (ask the question why here) // 3*/}
      {/*red*/}

      {/*// welcome, see the demo to view how fable works. we use sound to playback integration into divination tools .. // 2*/}
      {/*3/4*/}

      {/*// first we want you to picture a moment that last time you were in water, and how that made you feel. // 1*/}
      {/*water*/}

      {/*// demo: pulls card, water symbol, listens to sound. // 2*/}
      {/*reed*/}

      {/*// Q: Now, interested in a tarot reading? // 1*/}
      {/*question*/}

      {/*// see page with various subjective contexts (sonar, birds, plasma) // ~*/}
      {/*context*/}

      {/*// take from tan (for now) // 0.5*/}
      {/*tan*/}

      {/*// pull card to mint card with abi.sig verifiable conjuctions // 2 / mina*/}
      {/*crystal*/}

      {/*// playback on cards on loop to music. // 3*/}
      {/*fable //7/ netzach*/} 

      {/*// dioramma // 4*/}
      {/*patch*/}

      {/**/}
      {/**/}
      <p>{crystal(noun)}</p>
 {/*     <input className="respect" onChange={(e) => {
        // console.log(e.target.value)
        setNoun(e.target.value)
      }}></input>*/}
      {/**/}
      {/**/}
      {/**/}
    </div>
  );
}

export default Fable;