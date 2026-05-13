const templateSlider = document.createElement('template');
templateSlider.innerHTML = `<style>
div.ils-contentslider-outer {
    display: flex;
    margin: auto;
    padding: 20px 0;
}
div.ils-contentslider {
    overflow-x: scroll;
    display: flex;
    grid-column-gap: 30px;
    margin: 0 20px;
    padding-right: 10px;
    scroll-snap-type: x mandatory;
    padding-right: 10px;
    scroll-behavior: smooth;
    width: 100%;
    justify-content: safe center;
}
div.ils-contentslider ::slotted(*) {
    flex-shrink: 0;
    overflow: hidden;
    scroll-snap-align: center;
}
button {
    background-color: white;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none;
    border: none;
    transition: background-color .3s;
    cursor: pointer;
    width: 65px;
}
button:hover, button:focus {
    border: none;
}

button.ils-contentslider-prev {
    border-right: 0;
}
button svg {
    color: white;
    background: var(--il-blue);
    border-radius: 45px;
    width: 50px;
    height: 50px;
}
button:hover svg, button:focus svg {
    background: var(--il-orange);
}

button.ils-contentslider-prev svg {
    transform: rotate(270deg);
}
button.ils-contentslider-next {
    border-left: 0;
}
button.ils-contentslider-next svg {
    transform: rotate(90deg);
}
@media only screen and (max-width: 550px) {
  div.ils-contentslider-outer {
    flex-direction: column;
  }

  button.ils-contentslider-prev, button.ils-contentslider-next {
    width: 100%;
  }
}
</style>
<div class='ils-contentslider-outer'><button class='ils-contentslider-prev' aria-label='scroll back in content slider'>
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="presentation">
    <path fill="currentColor" d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"></path>
</svg>
</button>
<div class='ils-contentslider'><slot></slot></div>
<button class='ils-contentslider-next' aria-label='scroll forward in content slider'>
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="presentation">
    <path fill="currentColor" d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"></path>
</svg>
</button></div>`;

class Slider extends HTMLElement {
    static get observedAttributes() { return ['height', 'slide']; }

    get height() { return this.getAttribute('height'); }
    set height(value) { this.setAttribute('height', value); }
    get slide() { return this.getAttribute('slide'); }
    set slide(value) { this.setAttribute('slide', value); }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(templateSlider.content.cloneNode(true));
        this.shadowRoot.querySelector('button.ils-contentslider-next').addEventListener('click', () => {
            let s = this.slide;
            let w = this.shadowRoot.querySelector('div.ils-contentslider').offsetWidth;
            if (w < s) {
                s = w;
            }
            this.shadowRoot.querySelector('div.ils-contentslider').scrollBy(s, 0);
        });
        this.shadowRoot.querySelector('button.ils-contentslider-prev').addEventListener('click', () => {
            let s = this.slide;
            let w = this.shadowRoot.querySelector('div.ils-contentslider').offsetWidth;
            if (w < s) {
                s = w;
            }
            this.shadowRoot.querySelector('div.ils-contentslider').scrollBy(-s, 0);
        });
    }
    connectedCallback() {
        var h = this.height == null || this.height == '' ? "500px" : this.height;
        let style = this.shadowRoot.querySelector('style');
        style.innerHTML += `div.ils-contentslider {
            height: ${h};
        }
        div.ils-contentslider ::slotted(*) {
            max-height: ${h};
        }`;
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'height' && oldValue != newValue) {
            this.height = newValue;
        }
    }
}

customElements.define('ils-contentslider', Slider);
