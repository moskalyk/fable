import * as React from 'react';
import './App.css';

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
function Fable() {
  // embed mina crystal
  const crystal = (rad) => {
    switch(rad){
      case '¢':
        return 1;
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
      <p>{crystal('yes')}</p>
      {/**/}
      {/**/}
      {/**/}
    </div>
  );
}

export default Fable;
