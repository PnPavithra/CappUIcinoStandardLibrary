import { PrintArea, PrintedElement } from "./CoreFunctionsPrerequisites.js";
import { IModule } from "./IModule.js";

export class ICoreFunctions extends IModule
{
    static initialize()
    {
        super.initialize();

        //Create the print area
        const printArea = document.createElement("print-area");
        document.body.appendChild(printArea);
        printArea.style.left = "10%"
        printArea.style.top = "10%"

        //Store the print area in the window object so that it can be accessed globally if needed.
        window.printArea = this.printArea = printArea;
    }

    static consoleLog(stringToPrint)
    {
        console.log(stringToPrint);
    }

    static printString(stringToPrint, duration)
    {
        this.printArea.appendElement(stringToPrint, duration);
    }

    static async wait(durationInSeconds)
    {
        await new Promise(resolve => setTimeout(resolve, durationInSeconds*1000));
    }

}

ICoreFunctions.initialize();
