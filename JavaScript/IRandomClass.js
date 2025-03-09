export class IRandomClass
{
    static Random = class Random 
    {
        constructor(seed) 
        {
            this.seed = seed;
            this.state = seed;
        }

        next() 
        {
            this.state |= 0;
            this.state = (this.state + 0x6D2B79F5) | 0;
            let t = (this.state ^ (this.state >> 15)) * (1 | this.state);
            t = (t + ((t ^ (t >> 7)) * (61 | t))) ^ t;
            return ((t ^ (t >> 14)) >>> 0) / 4294967296;
        }

        generateFloat(min, max) 
        {
            return min + (max - min) * this.next();
        } 

        generateInt(min, max) 
        {
            return Math.floor(this.generateFloat(min, max + 1));
        }

        generateBoolean() 
        
        {
            return this.generateInt(0, 1) === 1;
        }

        static initializeModule() 
        {

        }
    }
}