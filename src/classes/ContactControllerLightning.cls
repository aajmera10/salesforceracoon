public class ContactControllerLightning {
    @AuraEnabled
    public static List<Contact> findAll(){
        return [SELECT id,firstName, lastName, phone, email FROM Contact];
    }
    @AuraEnabled
    public static List<Contact> findByName(String searchKey){
        String nameKey = '%' + searchKey + '%';
        return [SELECT id,firstName, lastName, phone,email FROM Contact WHERE Name LIKE :nameKey];
    }
    @AuraEnabled
    public static List<Contact> findByID(String idKey){
        return[SELECT id,firstName,lastName,phone,email FROM Contact WHERE id =: idKey];
    }

}