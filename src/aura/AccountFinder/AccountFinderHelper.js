({
    SearchHelper : function(component,event) {
        var action = component.get("c.getAccount")
        
        action.setParams({
            'searchKeyword': component.get("v.searchKeyword")
        });
        action.setCallback(this,function(response){
            var responseState = response.getState();
            if(responseState==='SUCCESS'){
                var storeResponse = response.getReturnValue();
                if(storeResponse.length == 0){
                    component.set("v.error",true);
                    component.set("v.message",true);
                    //alert('List is zero')
                }else{
                    component.set("v.message",false);
                }
                component.set("v.accountlist", storeResponse); 
            }else if(responseState === 'INCOMPLETE'){
                alert('Response is incomplete');
            }else if(responseState === 'ERROR'){
                var errors = response.getError();
                alert('Error is'+errors[0].getmessage);
            }
        });
        $A.enqueueAction(action);
    },
    deleteAccount : function(component, event) {
        var action = component.get("c.delAccount");
        action.setParams({recordId:event.target.id});
        action.setCallback(this, function(response) {
            var responseState = response.getState();
            if(responseState === 'SUCCESS'){
                var storeResponse = response.getReturnValue();
                component.set("v.accountlist",storeResponse);
            }else if(responseState === 'ERROR'){
                var errors = response.getError();
                alert('Error is'+errors[0].getmessage);
            }
            
        });
        $A.enqueueAction(action); 
    },
    
    editAccount : function(component, event) {
        var action = component.get("c.editAccounts");
        action.setParams({recordId:event.target.id});
        action.setCallback(this, function(response) {
            var responseState = response.getState();
            if(responseState === 'SUCCESS'){
                console.log('This is Working Proceed With it');
                var storeResponse = response.getReturnValue();
                component.set("v.accountlist",storeResponse);
            }else if(responseState === 'ERROR'){
                var errors = response.getError();
                alert('Error is'+errors[0].getmessage);
            }
            
        });
        $A.enqueueAction(action);
    }
})