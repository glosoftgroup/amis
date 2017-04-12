import {trigger, state, style, animate, transition } from '@angular/core'; 

export function moveIn(){
    return trigger('moveIn', [
        state('void', style({position:'fixed', width:'100%'}) ),
        state('*', style({position:'fixed', width:'100%'})),
        transition(':enter', [
            style({opacity:'0', transform: 'translateX(100px)'}),
            animate('.6s ease-in-out', style({opacity:'1', transform:'translateX(0px)'}))
        ]),
        transition(':leave', [
            style({opacity:'1', transform: 'translateX(0px)'}),
            animate('.3s ease-in-out', style({opacity:'0', transform:'translateX(-600px)'}))
        ])
    ]);
}

export function fallIn(){
    return trigger('fallIn', [
        transition(':enter', [
            style({opacity:'0', transform: 'translateY(40px)'}),
            animate('.3s ease-in-out', style({opacity:'1', transform:'translateY(0px)'}))
        ]),
        transition(':leave', [
            style({opacity:'1', transform: 'translateY(0px)'}),
            animate('.3s ease-in-out', style({opacity:'0', transform:'translateY(-200px)'}))
        ])
    ]);
}