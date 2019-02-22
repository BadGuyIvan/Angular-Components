import { animation, style, animate, trigger, transition, useAnimation, query, animateChild} from '@angular/animations';

export const fadeIn = animation([
    style({opacity: 0}),
    animate('500ms', style({opacity: 1}))
]);

export const fadeOut = animation([
    animate('500ms', style({opacity: 0}))
]);

export const flipFadeIn = animation([
    style({
        opacity: 0,
        transform: 'translateY(100px)'
    }),
    animate('500ms ease-in', style({
        opacity: 1,
        transform: 'translateY(0)'
    }))
])

export const flipFadeOut = animation([
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate('500ms ease-in', style({
        opacity: 0,
        transform: 'translateY(-100px)',
        height: 0
    }))
])

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', useAnimation(fadeIn)),
    transition(':leave', useAnimation(fadeOut)),
]);

export const flip = trigger('flip', [
    transition(':enter', useAnimation(flipFadeIn)),
    transition(':leave', useAnimation(flipFadeOut))
]);
