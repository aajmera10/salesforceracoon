({
    SearchAction : function(component, event, helper) {
        /* var validExpense = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            //Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validExpense){*/
        helper.SearchHelper(component, event);
        //}
    },
    doInit: function (component, event, helper) {
        var action = component.get("c.getAccount");
        action.setCallback(this,function (response) { 
            var campingItems = response.getReturnValue();
            component.set("v.accountlist",campingItems);
        });
        $A.enqueueAction(action);
    },
    
    deleteacc: function (component, event, helper) {   
        console.log('workinggg');
        if(confirm('Are you sure?'))
            helper.deleteAccount(component, event);  
    },
    
    editacc: function(component, event, helper){
        console.log('workinggg');
        helper.editAccount(component, event); 
    },
    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.isOpen", true);
    },
})