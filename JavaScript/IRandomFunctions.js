import { IRandomClass } from "./IRandomClass.js"

export class IRandomFunctions
{
    static globalRandomObject = null;
    
    /*
        @function
        @param: min: int
        @param: max: int
        @return: int: Return Value
    */
    static randomInteger(min, max)
    {
        return globalRandomObject.generateInt(min, max);
    }
    
    /*
        @function
        @param: min: float
        @param: max: float
        @return: float: Return Value
    */
    static randomFloat(min, max)
    {
        return globalRandomObject.generateFloat(min, max);

    }

    /*
        @function
        @return: bool: Return Value
    */
    static randomBoolean()
    {
        return globalRandomObject.generateBoolean();

    }

    /*
        @function
    */
    static initializeModule()
    {
        this.globalRandomObject = new IRandomClass.Random();
    }
}