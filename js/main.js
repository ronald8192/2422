var Calendar = {
    timetableType: 1,
    icsContent: ""

};

var BtnGenerate = {
    enable: function(state){
        if(typeof state != 'boolean') state = true;
        if(state){
            //enable
            $("#gen").removeAttr("disabled");
        }else{
            //disable
            $("#gen").attr({"disabled":"disabled"});
        }
    }
};

var demoUser = [
    "ccc061e5-c455-483e-9346-2ce07bc2496e",
    "2a60f732-d5ee-49c8-25f9-e1cb70ef31ca",
    "c264960b-48b4-4b53-b731-44e830312be8"
];
var currentUser = "";


$(function(){
    Router.route(window.location.hash);

    $.material.init();
    new WOW().init();
    $("#header-icon").click(function(){
        Router.route();
    });



});

window.addEventListener("popstate", function() {
    Router.route(window.location.hash)
}, false);

function getGUID(){
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

