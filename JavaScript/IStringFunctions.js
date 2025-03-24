/*
    @class
*/
export class IStringFunctions
{
    static initialize()
    {

    }

        /*
            @function
            @param: str: string
            @return: string: Returns the string in uppercase
        */
        static toUpperCase = (str) => str.toUpperCase();
    
        /*
            @function
            @param: str: string
            @return: string: Returns the string in lowercase
        */
        static toLowerCase = (str) => str.toLowerCase();
        
        /*
            @function
            @param: str: string
            @param: searchValue: string
            @param: replaceValue: string
            @return: string: Replaces occurrences of searchValue with replaceValue
        */
        static replace = (str, searchValue, replaceValue) => str.replace(new RegExp(searchValue, 'g'), replaceValue);
        
        /*
            @function
            @param: str: string
            @return: number: Returns the length of the string
        */
        static length = (str) => str.length;
        
        /*
            @function
            @param: str: string
            @param: start: number
            @param: end?: number
            @return: string: Extracts a substring
        */
        static substring = (str, start, end) => str.substring(start, end);
        
        /*
            @function
            @param: str: string
            @param: index: number
            @return: string: Returns the character at the specified index
        */
        static charAt = (str, index) => str.charAt(index);
        
        /*
            @function
            @param: str: string
            @param: separator: string
            @return: array: Splits the string into an array based on the separator
        */
        static split = (str, separator) => str.split(separator);
        
        /*
            @function
            @param: str: string
            @param: prefix: string
            @return: boolean: Checks if the string starts with the given prefix
        */
        static startsWith = (str, prefix) => str.startsWith(prefix);
        
        /*
            @function
            @param: str: string
            @param: suffix: string
            @return: boolean: Checks if the string ends with the given suffix
        */
        static endsWith = (str, suffix) => str.endsWith(suffix);
        
        /*
            @function
            @param: str: string
            @return: string: Trims whitespace from both ends of the string
        */
        static trim = (str) => str.trim();
        
        /*
            @function
            @param: str: string
            @return: boolean: Checks if the string is empty
        */
        static isEmpty = (str) => str.length === 0;
        
        /*
            @function
            @param: str: string
            @param: searchValue: string
            @return: boolean: Checks if the string contains the given searchValue
        */
        static includes = (str, searchValue) => str.includes(searchValue);
        
        /*
            @function
            @param: str: string
            @param: repeatCount: number
            @return: string: Repeats the string the given number of times
        */
        static repeat = (str, repeatCount) => str.repeat(repeatCount);
}