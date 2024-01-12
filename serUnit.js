const dicStr = '##########qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMйцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ';

exports.serial = function(inData,err='') {
    if (!Array.isArray(inData)){
        err = 'incoming data is not an array';
        return '';
    }
    let sumItem;
    let sumArr = new Map();
    inData.forEach(function(item) {
        if (!Number.isInteger(item)){
            err = 'there is no number or integer in the array';
            return '';
        }
        if (item<100 && item>9) item = dicStr.charAt(item)
        else if (item>99) {
            item = item.toString();
            item = dicStr.charAt(Number(item.charAt(0)+item.charAt(1)))+item.charAt(2);
            }
        item = item.toString();
        if (sumArr.has(item)){
            sumItem = sumArr.get(item);
            sumItem++;
        }
        else
            sumItem = 1;
        sumArr.set(item,sumItem);
    });
    let result = '';
    sumArr.forEach(function(value,key) {
        if (value>1) key = value.toString()+key;
        if (result.trim()=='')
          result = key
        else
          result += '!'+key;
    });    
    return result;
}

function getQuantity(item,end) {
    let quantity = item.toString().substring(0,Number(end));
    quantity = Number(quantity);
    return quantity;
    }

function pushResult(quantity,num,result,err='') {
    if (!Array.isArray(result)){
        err = 'result is not an array';
        return;
    }
    quantity = Number(quantity);
    if (quantity==0)
        result.push(Number(num))
    else
        for (let i=0;i<quantity;i++)
            result.push(Number(num));
    }

exports.deserial = function(inStr,err='') {
    let inArr = inStr.toString();
    if (inArr.trim()=='') return [];
    inArr = inArr.split('!');
    let result = [];
    inArr.forEach(function(item) {
        if (/^\d+$/.test(item)){
            item = Number(item);
            if (item<10)
                result.push(item)
            else {
                item = item.toString();
                let quantity = getQuantity(item,item.length-1);
                let num = item.charAt(item.length-1);
                pushResult(quantity,num,result,err);
                }
        }
        else {
            let letter = item.search(/[a-zA-Zа-яА-Я]/);
            if (letter==-1) {
                err = 'incoming data is incorrect';
                return [];
                }
            let quantity = getQuantity(item,letter);
            let num = item.substring(letter);
            letter = num.charAt(0);
            num = num.replace(letter, dicStr.indexOf(letter));
            pushResult(quantity,num,result,err);
        }
    });
    return result;
}
