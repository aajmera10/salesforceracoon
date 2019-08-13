public with sharing class CampingListController {
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c campingItem){
        campingItem = new Camping_Item__c();
        return campingItem;
    }

    @AuraEnabled
    public static list<Camping_Item__c>getItems(){
        return [SELECT Id,Name,Quantity__c,Price__c,Packed__c FROM Camping_Item__c];
    }
}