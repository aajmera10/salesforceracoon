({
    clickCreateItem : function(component, event, helper) {
        var validExpense = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            //Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if(validExpense){
            var campingitem = component.get("v.newItem");
            helper.createItem(component,campingitem);
        }
    },
    doInit : function(component, event, helper) {
        var action = component.get("c.getItems");
        action.setCallback(this,function (response) { 
        	var campingItems = response.getReturnValue();
            component.set("v.items",campingItems);
        });
        $A.enqueueAction(action);
    }
})