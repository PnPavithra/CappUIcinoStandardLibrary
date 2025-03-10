class INavigator
{
    static navigationStack = [];
    static navigationStackPointer = -1;

    /*
        @function
        @param: page: string
    */
    static openPage(page)
    {
        INavigator.navigationStack.push(page);
        INavigator.navigationStackPointer++;
    }

    /*
        @function
        @param:
    */
    static goBack()
    {
        if (INavigator.canGoBack()) 
        {
            INavigator.navigationStackPointer--;
        }
    }

    /*
        @function
        @param:
    */
    static goNext()
    {
        if (INavigator.canGoNext()) 
        {
            INavigator.navigationStackPointer++;
        }
    }

    /*
        @function
        @param: page: string
    */
    static clearNavigationAndOpenPage(page)
    {
        INavigator.navigationStack.length = 0;
        INavigator.navigationStackPointer = -1;
        INavigator.openPage(page);
        
    }

    /*
        @function
        @param:
        @return: bool: Return Value
    */
    static canGoBack()
    {
        if(INavigator.navigationStackPointer > 0)
        {
            return true;
        }
        return false;

    }

    /*
        @function
        @param:
        @return: bool: Return Value
    */
    static canGoNext()
    {
        if(INavigator.navigationStackPointer < (INavigator.navigationStack.length - 1))
        {
            return true;
        }

        return false;

    }
}

export default INavigator;