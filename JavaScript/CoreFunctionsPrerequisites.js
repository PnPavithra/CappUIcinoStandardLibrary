export class PrintedElement extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.style.display = "inline";
        this.innerHTML = `
            ${this.getAttribute("stringToPrint")}
        `;

        setTimeout
        (
            ()=>
            {
                this.remove();
            }, 
            parseFloat(this.getAttribute("duration")) * 1000
        )
    }
}

customElements.define("printed-element", PrintedElement);

//Print area is the element which will hold any printed elements.
//When printString() is called, the newly printed element gets appended to the PrintArea.

export class PrintArea extends HTMLElement
{
    constructor()
    {
        super();
    }

    appendElement(stringToPrint, duration)
    {
        const newPrintedElement = document.createElement("printed-element");
        newPrintedElement.setAttribute("stringToPrint", stringToPrint);
        newPrintedElement.setAttribute("duration", String(duration));
        this.printAreaDiv.appendChild(newPrintedElement);
    }   

    connectedCallback()
    {
        this.innerHTML = `
            <div class="print-area-div" style="display:flex;flex-direction:column;">
            </div>
        `
        this.style.zIndex = 999;
        this.style.position = "fixed";
        this.printAreaDiv = this.querySelector(".print-area-div");
    }

}

customElements.define("print-area", PrintArea);

