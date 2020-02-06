import { createStore } from 'redux';
import { incAC, decAC, rndAC } from "./actions";
import reducer from "./reducer";

const store = createStore(reducer);



document
    .getElementById('inc')
    .addEventListener('click', function() {
        store.dispatch(incAC());
    });
document
    .getElementById('dec')
    .addEventListener('click', function() {
        store.dispatch(decAC());
    });
document
    .getElementById('rnd')
    .addEventListener('click', function() {
        const payload = Math.floor(Math.random()*10);
        store.dispatch(rndAC(payload));
    });

const update = () => {
      document
          .getElementById('counter')
          .innerHTML = store.getState();
};

store.subscribe(update);

