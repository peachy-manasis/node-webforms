var api_url = "http://newpmscrm.loc/service/v2/rest.php";
var user_name = 'admin';    //SugarCRM username
var password = 'admin';    //SugarCRM password

var params = {
    user_auth:{
        user_name:user_name,
        password:password,
        encryption:'PLAIN'
    },
    application: 'SugarCRM RestAPI Example'
};
var json = JSON.stringify(params);

$.ajax({
        url: api_url,
        type: "POST",
        crossDomain: true,
        data: { method: "login", input_type: "JSON", response_type: "JSON", rest_data: "json" },
        dataType: "json",
        success: function(result) {
             if(result.id) {
                    //HERE: you will have out put from rest
                alert("sucessfully LOGIN Your session ID is : " + result.id);
             }
             else
                 console.log(result);
              
        },
        error: function(result) {
           console.log("error: " + result);
        }
});