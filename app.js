function sobenhat(a,b,c){
    min=a
    if(b<min){
        min=b
    }
    if(c<min){
        min=c
    }
    return min
}
let a=prompt("nhap a")
a=parseInt(a)
let b=prompt("nhap b")
b=parseInt(b)
let c=prompt("nhap c")
c=parseInt(c)
console.log(sobenhat(a,b,c))
// bai 2
// viet ham kiem tra so nguyen to
function songuyento(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if (n%i==0){
            return false
        }
    }
    return true
}
let n=prompt("nhap n:")
n=parseInt(n)
if((songuyento(n))==true){
    console.log("la so nguyen to")
}
else{
    console.log("k phai la so nguyen to")
}
//bai 5:tính giai thừa
// c1:dùng hàm(k dùng đệ quy) 
function giaithua(k){
    if(k<0){
        return false
    }
    else if(k==0){
        return 1
    }
    else{
        return k*giaithua(k-1)
    }
}
let k=prompt("nhập k")
k=parseInt(k)
console.log(giaithua(k))
// bài 7
function kiemtranamnhuan(s){
    if((s%4==0&&s%100!=0)||s%400==0){
        return true
    }
    return false
}
let s=prompt("nhập năm")
s=parseInt(s)
if((kiemtranamnhuan(s))==true){
    console.log("la năm nhuận")
}
else{
    console.log("k phải là năm nhuận")
}
// bài 3
let arr3=[1,2,3,4,5,6,7,8,9,10]
function tongsola10(arr3){
    let arr4=[]
    for(let i=0;i<arr3.length;i++){
        for(let j=i+1;j<arr3.length;j++){
            if(arr3[i]+arr3[j]==10){
                arr4.push([arr3[i],arr3[j]])
        }
    }
    }
    return arr4
}
console.log(tongsola10(arr3))
// bài 6
// c1:dùng hàm
function chuoitangdan(p){

    for(let i=0;i<p.length-1;i++){
        for(let j=i+1;j<p.length;j++){
            if(p[j]<p[i]){
                let temp1=p[j]
                p[j]=p[i]
                p[i]=temp1
            }
        }
    }
    return p
}
let chuoiso=prompt("nhap chuoi")
let p=chuoiso.split(",")
console.log(chuoitangdan(p))