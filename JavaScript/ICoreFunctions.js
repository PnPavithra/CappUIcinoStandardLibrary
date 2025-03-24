import { PrintArea, PrintedElement } from "./CoreFunctionsPrerequisites.js";
import { IModule } from "./IModule.js";

/*
    @class
*/
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

    /*
        @function
        @param: stringToPrint: string
    */
    static consoleLog(stringToPrint)
    {
        console.log(stringToPrint);
    }

    /*
        @function
        @param: stringToPrint: string
        @param: duration: float
    */
    static printString(stringToPrint, duration)
    {
        this.printArea.appendElement(stringToPrint, duration);
    }

    /*
        @function
        @param: durationInSeconds: float
    */
    static async wait(durationInSeconds)
    {
        await new Promise(resolve => setTimeout(resolve, durationInSeconds*1000));
    }

    static executeJavascript(code)
    {
        try
        {
            eval(code);
        }
        catch(Expection)
        {
            //ToDO
        }
    }
}

ICoreFunctions.initialize();
