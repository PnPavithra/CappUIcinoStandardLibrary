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

    static goBack()
    {
        if (INavigator.canGoBack()) 
        {
            INavigator.navigationStackPointer--;
        }
    }

    static goNext()
    {
        if (INavigator.canGoNext()) 
        {
            INavigator.navigationStackPointer++;
        }
    }

    static clearNavigationAndOpenPage(page)
    {
        INavigator.navigationStack.length = 0;
        INavigator.navigationStackPointer = -1;
        INavigator.openPage(page);
        
    }

    static canGoBack()
    {
        if(INavigator.navigationStackPointer > 0)
        {
            return true;
        }
        return false;

    }

    
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