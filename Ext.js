const inputEl = document.getElementById("input-el");
let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const currentUrl = document.querySelector('#search-Bar');
     
  
document.getElementById("input-btn").addEventListener("click",function(){ 
    myLeads.push(inputEl.value);
    inputEl.value = "";
    myLeads = JSON.stringify(myLeads);
    
    localStorage.setItem("myLeads",myLeads);
    document.getElementById("content").innerHTML+=`<li>
                                                        <a target='_blank' href='${JSON.parse(localStorage.getItem("myLeads"))[JSON.parse(localStorage.getItem("myLeads")).length-1]}'>
                                                            ${JSON.parse(localStorage.getItem("myLeads"))[JSON.parse(localStorage.getItem("myLeads")).length-1]}
                                                        </a>
                                                    </li>`;
    
    myLeads = JSON.parse(myLeads);
    
}) 
window.onload = function(){
    if(JSON.parse(localStorage.getItem("myLeads")).length>0)
    {
        for(let i=1;i<JSON.parse(localStorage.getItem("myLeads")).length+1;i++)
        {
            document.getElementById("content").innerHTML+=`<li>
                                                            <a target='_blank' href='${JSON.parse(localStorage.getItem("myLeads"))[i-1]}'>
                                                                ${JSON.parse(localStorage.getItem("myLeads"))[i-1]}
                                                            </a>
                                                        </li>`;
        }
    }
    myLeads = JSON.parse(localStorage.getItem("myLeads"));
}
document.getElementById("delete-btn").addEventListener("dblclick",function(){
    document.getElementById("content").innerHTML="";
    myLeads = [];
    localStorage.clear();
})
 
document.getElementById("save-curr").addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        document.getElementById("content").innerHTML+=`<li>
                                                            <a target='_blank' href='${JSON.parse(localStorage.getItem("myLeads"))[JSON.parse(localStorage.getItem("myLeads")).length-1]}'>
                                                                ${JSON.parse(localStorage.getItem("myLeads"))[JSON.parse(localStorage.getItem("myLeads")).length-1]}
                                                            </a>
                                                        </li>`;
        
        myLeads = JSON.parse(myLeads);
    })

    
})



