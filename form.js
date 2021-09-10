
function validateForm(){
 
        let name=document.form1.name.value;
        let email=document.form1.email.value;
        let age=document.form1.varsta.value;


        if(name==null || name==""){
            alert("Name can't be blank");
            return false;
        }else if(email.includes('gmail')){
            alert("Insert Only Yahoo emails.");
            return false;
        }else if(age<14){
            alert("Minimum age is 14.");
            return false;
        }

}