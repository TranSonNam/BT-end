

function findOppositeNumber(n, inputNumber) {
    if (inputNumber >n || inputNumber < 0 || n%2 ==1 || n <4 || n > 20) alert( "Không hợp lệ")
    else {
        if (inputNumber > n/2) return inputNumber -n/2
        else return n-1 - inputNumber
    }
}
let n =parseInt(prompt("nhap vao n"))
let inputNumber = parseInt(prompt("Nhap vao inputNumber"))
console.log (findOppositeNumber(n,inputNumber))

function merge2String(string1, string2) {
    let mangstring1 = string1.split("")
    let mangstring2 = string2.split("")
    console.log (mangstring1)
    let mangstring = []
    if(string1.length >= string2.length){
        for (let i = 0; i < string1.length; i++) {
            mangstring.push(mangstring1[i])
            mangstring.push(mangstring2[i])
        }
    }
    else{
        for (let i = 0; i < string2.length; i++) {
            mangstring.push(mangstring1[i])
            mangstring.push(mangstring2[i])
        }
    }
    string = mangstring.join("")
    return string
}
let string1 = prompt("Nhập vào xâu thứ nhất")
let string2 = prompt("Nhập vào xâu thứ hai")
console.log(merge2String(string1,string2))
