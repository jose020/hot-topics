$(document).ready(function () {
    /*variable of loading page*/
    var contents, url;
    contents = {};
    
    $(".main-content .container").load("./partials/home.html", function (rsp) {
        contents["./partials/home.html"] = rsp;
    });
    
    function loadData(urlVal) {        
        $(".main-content .container").load(urlVal, function (rsp) {            
            if (!contents[urlVal]) {                
                contents[urlVal] = rsp;               
                $(this).hide().html(contents[urlVal]).fadeIn();               
            } else {            
                $(this).hide().html(contents[urlVal]).fadeIn();
            }
        });
    }
    
    $(".nav-bar a").on("click", function (e) {        
        e.preventDefault();        
        url = $(this).attr("href");		
        loadData(url);
    });
});