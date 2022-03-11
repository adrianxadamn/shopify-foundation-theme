import '@styles/index.scss';
import { tns } from 'tiny-slider/src/tiny-slider';

// CONFIGURE SLIDERS
for (let slider in window.Scoutside.sliders) {
    tns({
        container: window.Scoutside.sliders[slider].settings.id,
        items: window.Scoutside.sliders[slider].settings.items,
        slideBy: "page",
        controlsPosition: "bottom",
        nav: false,
    });
}

console.log("yo");