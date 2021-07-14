'use strict';

import barba from 'https://unpkg.com/@barba/core@2.9.7/dist/barba.mjs';
import barbaCss from 'https://unpkg.com/@barba/css@2.1.15/dist/barba-css.mjs';
import "./nav.js";
import "./verticalDotNav.js";
import "./horizontalDotNav.js";
import "./deviceDetect.js";
import "./changePicture.js";
import "./buttonActions.js";
import "./marker.js";
import "./forms.js";


/* Transition animation */
barba.use(barbaCss);
barba.init({
    preventRunning: true,
    debug: true,
    timeout: 5000,
    transitions: [{
        name: 'UP',
        sync: true,
        from: { namespace: ['offer','info'] },
        to: { namespace: ['info','hero'] },

        before(){
        let element = document.getElementsByClassName("page-wrapper")[0];
        element.style.overflowY = 'hidden';},
        leave(){},
        enter(){},
        after(){
            let element = document.getElementsByClassName("page-wrapper")[0];
            element.style.overflowY = 'auto';
        }
    },{
        name: 'DOWN',
        sync: true,
        from: { namespace: ['hero','info']},
        to: { namespace: ['info', 'offer'] },

        before(){
            let element = document.getElementsByClassName("page-wrapper")[0];
            element.style.overflowY = 'hidden';},
        leave(){},
        enter(){},
        after(){
            let element = document.getElementsByClassName("page-wrapper")[0];
            element.style.overflowY = 'auto';
        }
    },{
        name: 'markON',
        sync: false,
        leave() {},
        enter() {},
        from: { namespace:'offer'},
        to: { namespace:'mark'}
    },{
        name: 'markOFF',
        sync: false,
        before(){},
        leave(){},
        enter(){},
        after(){},
        from: { namespace: 'mark' },
        to: { namespace: 'offer' }
    },{
        name: 'form1LeftON',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: 'offer'},
        to: { namespace: 'form1'}
    },{
        name: 'form1LeftOFF',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: 'form1'},
        to: { namespace: 'offer'}
    },{
        name: 'form2RightON',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: 'offer'},
        to: { namespace: 'form2'}
    },{
        name: 'form2RightOFF',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: 'form2'},
        to: { namespace: 'offer'}
    },
    //menu LR animation
    {
        name: 'Rmainmenu',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: ['references', 'contact', 'aboutus']},
        to: { namespace:'hero'}
    },{
        name: 'LReferences',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: ['hero','info','offer']},
        to: { namespace:'references'}
    },{
        name: 'RReferences',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: ['aboutus','contact']},
        to: { namespace:['references']}
    },{
        name: 'LAboutus',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: ['hero','info','offer','references']},
        to: { namespace:['aboutus']} 
    },{
        name: 'RAboutus',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: ['contact']},
        to: { namespace:['aboutus']} 
    },{
        name: 'Lcontact',
        sync: true,
        leave(){},
        enter(){},
        from: { namespace: ['hero','info','offer','references','aboutus']},
        to: { namespace:['contact']} 
    }]
});

