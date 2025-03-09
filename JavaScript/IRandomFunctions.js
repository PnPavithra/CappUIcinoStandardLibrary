import { IRandomClass } from "./IRandomClass.js"

export class IRandomFunctions
{
    static globalRandomObject = null;
    
    static randomInteger(min, max)
    {
        return globalRandomObject.generateInt(min, max);
    }

    static randomFloat(min, max)
    {
        return globalRandomObject.generateFloat(min, max);

    }
    static randomBoolean()
    {
        return globalRandomObject.generateBoolean();

    }

    static initializeModule()
    {
        this.globalRandomObject = new IRandomClass.Random();
    }
}
