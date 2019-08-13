public with sharing class AccountCtrl { 
    @AuraEnabled
    public static List<Account> getAccountData(){
        return [select Id,Name from Account];
    }
    @AuraEnabled
    public static List<Account> deleteAccount(String AccountId)
    {
        Account delAccount=[Select Id from Account where id=:AccountId];
        delete delAccount;
        return getAccountData();
    }
}