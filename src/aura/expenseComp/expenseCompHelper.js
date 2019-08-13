({
    createExpense: function(component, expense) {
        // Copy the expense to a new object
        /* var newCamping = component.get("v.newItem");
            var campings = component.get("v.items");
            var item = JSON.parse(JSON.stringify(newCamping));
            campings.push(item);
            component.set("v.items",campings);
            component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
                                       'Price__c': 0,'Packed__c': false });*/
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var theExpenses = component.get("v.newExpense");
        var newExpense = JSON.parse(JSON.stringify(theExpenses));
        theExpenses.push(newExpense);
        component.set("v.newExpense", theExpenses);
        console.log("Expenses after 'create': " + JSON.stringify(theExpenses));
    }
})