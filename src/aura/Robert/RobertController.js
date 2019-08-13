({
    init : function(component, event, helper) {
        console.log('init');
        var action2 = component.get("c.getAccount");        
        action2.setCallback(this, function(response) {
            console.log(response.getReturnValue());
            component.set("v.account", response.getReturnValue());
        });
        $A.enqueueAction(action2);
    }, 
    save : function(component, event, helper) {
        console.log('save:1');
        var action = component.get("c.saveAccount");
        var account = component.get("v.account");
        action.setParams({ "account": account  });
        action.setCallback(this, function() {  console.log('SAVED.');  } );
        $A.enqueueAction(action);
        console.log('save:end');
    },
        
    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.isOpen", true);
    },
    
    closeModel: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.isOpen", false);
    },
})