var item_list = [];
function add_item(){
    var item_name = document.getElementById('item_name').value;
    item_list.push(item_name);
    document.getElementById('item_name').value = '';
    get_itemlist();
}

function get_itemlist(){
    var s = '';
    var i=0;
    item_list.forEach(function(value,index){
        i+=1;
        s += '<tr><td>'+i+'</td><td>'+value+'</td><td><a onclick="Ddelete('+index+')">Delete</a></td></tr>';
    })
    document.getElementById('item_list').innerHTML = s;
}

function Ddelete(id){
    item_list.splice(id,1);
    get_itemlist();
}