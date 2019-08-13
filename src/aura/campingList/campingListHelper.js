({
    createItem : function(component,campingitem) {
        var action = component.get("c.saveItem");
        action.setParams({
            "campingItem" : campingitem
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state==="SUCCESS"){
                var parsedCampingItem = JSON.parse(JSON.stringify(campingitem));     
                var newCamping = component.get("v.newItem");
                var campings = component.get("v.items");
                var item = JSON.parse(JSON.stringify(newCamping));
                campings.push(item);
                //ask
                var campingItems = JSON.parse(JSON.stringify(campings));
                campingItems.push(parsedCampingItem);
                component.set("v.items",campingItems);
                //component.set("v.items",campings);
                component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
                                           'Price__c': 0,'Packed__c': false });
            }
        });
        $A.enqueueAction(action);   
    }
})