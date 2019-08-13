public class AccountController {
    public static String editRecordId;
    @AuraEnabled
    public static List<Account> getAccount(String searchKeyword){
        String keyword = searchKeyword+'%';
        if(String.isNotBlank(searchKeyword)){
            List<Account> accList = [SELECT Id,Name,Phone,Type,Industry FROM Account WHERE Name LIKE : keyword]; 
            return accList; 
        }else{
            List<Account> accList = [SELECT Id,Name,Phone,Type,Industry FROM Account]; 
            Map<String, Schema.SObjectField> fieldMap = Account.sObjectType.getDescribe().fields.getMap();
            Set<String> fieldNames = fieldMap.keySet();
            List<Account> acc = Database.query('select ' + string.join((Iterable<String>)fieldNames, ',') + ' from Account');
            System.debug('Oppp'+acc);
            return accList; 
        }
    }
    @AuraEnabled
    public static List<Account> delAccount(String recordId){
        System.debug('>>>>>'+recordId);
        
        if(String.isNotBlank(recordId)){
            Account accObj = [SELECT Id FROM Account WHERE id =: recordId];
            delete accObj;
            List<Account> accList = [SELECT Id,Name,Phone,Type,Industry FROM Account]; 
            return accList;
        }
        return null;
    }
    
    @AuraEnabled
    public static Account editAccounts(String recordId){
        System.debug('>>editAccount>>>'+recordId);
        editRecordId = recordId;
        if(String.isNotBlank(recordId)){
            Account accObj = [SELECT Id,Name,Phone,Type,Industry FROM Account WHERE Id =: recordId];
            System.debug('Name>>>>>'+accObj.name);
            return accObj;
        }
        return null;
    }
    
    @AuraEnabled
    public static Account saveAccount(Account accObj){
        update accObj;
        return accObj;
    }
}