var sub = document.getElementsByClassName('sub')
var subject = document.getElementById('subject')
var subjects = document.getElementById('subjects')
var confrm = document.getElementById('confrm')
var submit = document.getElementById('btn')

var total = 1
var i = 0
confrm.addEventListener('click',()=>{
    if(subject.value>0 && subject.value<=6){
    subjects.style.display = 'none'
    submit.style.display = 'block'
    for( i; i<= subject.value-1; i++){
        sub[i].style.display = 'block'
    }
}
else{
    alert("course's limit is 0-6")
}

    total = i * 100 
})


let toatalObtained = 0
submit.addEventListener('click',()=>{
    

    var data = document.getElementById('data')
    var table = document.getElementById('table')
    var rows = document.getElementsByClassName('rows')
    var td = document.getElementsByClassName('td')
    var th = document.getElementsByClassName('th')
    var result_btns = document.getElementById('result_btns')
    var result_btns = document.getElementById('result_btns')

    data.style.display = 'none'   
  
    var sub_1 = document.getElementById('sub_1').value
    var sub_2 = document.getElementById('sub_2').value
    var sub_3 = document.getElementById('sub_3').value
    var sub_4 = document.getElementById('sub_4').value
    var sub_5 = document.getElementById('sub_5').value
    var sub_6 = document.getElementById('sub_6').value

    var sub1 = +sub_1
    var sub2 = +sub_2
    var sub3 = +sub_3
    var sub4 = +sub_4
    var sub5 = +sub_5
    var sub6 = +sub_6

    if(sub1<=100 && sub2<=100 && sub3<=100 && sub4<=100 && sub5<=100 && sub6<=100   &&  sub1>=0 && sub2>=0 && sub3>=0 && sub4>=0 && sub5>=0 && sub6>=0 ){
   
    toatalObtained = sub1+sub2+sub3+sub4+sub5+sub6
    table.style.display = 'block'    
    table.style.marginBottom = '10vw'
    table.style.width = '100%'

    var obt_marks = document.getElementsByClassName('obt_marks')
    var totalObtained_marks = document.getElementById('totalObtained_marks')
    var total_marks = document.getElementById('total_marks')
    var percentage_ = document.getElementById('percentage_')
    var sub_per = document.getElementsByClassName('sub_per')
    var net_marks = document.getElementsByClassName('net_marks')
    var coursecode = document.getElementsByClassName('coursecode')
    var coursename = document.getElementsByClassName('coursename')
    var inputcoursecode = document.getElementsByClassName('inputcoursecode')
    var inputcoursename = document.getElementsByClassName('inputcoursename')
    var gpa = document.getElementsByClassName('gpa')
    var point = document.getElementsByClassName('point')
    var total_gpa = document.getElementById('total_gpa')

    var total_gpa_ = 0

    var sub_perc1 = (sub1/100)*100
    var sub_perc2 = (sub2/100)*100
    var sub_perc3 = (sub3/100)*100
    var sub_perc4 = (sub4/100)*100
    var sub_perc5 = (sub5/100)*100
    var sub_perc6 = (sub6/100)*100

    var obt_arr = [sub_1, sub_2, sub_3, sub_4, sub_5, sub_6]
    var per_arr = [sub_perc1,sub_perc2,sub_perc3,sub_perc4,sub_perc5,sub_perc6]

    total_marks.innerHTML = total
    totalObtained_marks.innerHTML = toatalObtained
    percentage_.innerHTML = `${(toatalObtained/total)*100}%`

    for( j=0; j<i; j++){
        
        rows[j].style.display = 'flex'
        net_marks[j].innerHTML = 100
        sub_per[j].innerHTML = `${per_arr[j]}%`
        coursecode[j].innerHTML = inputcoursecode[j].value
        coursename[j].innerHTML = inputcoursename[j].value
        obt_marks[j].innerHTML = obt_arr[j]

        if(per_arr[j]>=80){
            gpa[j].innerHTML = 'A+'
        } 
        else if(per_arr[j]>=70){
            gpa[j].innerHTML = 'A'
        }
        else if(per_arr[j]>=60){
            gpa[j].innerHTML = 'B'
        }
        else if(per_arr[j]>=50){
            gpa[j].innerHTML = 'C'
        }
        else if(per_arr[j]>=40){
            gpa[j].innerHTML = 'D'
        }
        else {
            gpa[j].innerHTML = 'F'
        }

        if(per_arr[j]>=90){
            point[j].innerHTML = 4.00
        }
        else if(per_arr[j]>=80){
            point[j].innerHTML = 3.66
        }
        else if(per_arr[j]>=75){
            point[j].innerHTML = 3.33
        }
        else if(per_arr[j]>=71){
            point[j].innerHTML = 3.00
        }
        else if(per_arr[j]>=68){
            point[j].innerHTML = 2.66
        }
        else if(per_arr[j]>=64){
            point[j].innerHTML = 2.33
        }
        else if(per_arr[j]>=61){
            point[j].innerHTML = 2.00
        }
        else if(per_arr[j]>=58){
            point[j].innerHTML = 1.66
        }
        else if(per_arr[j]>=54){
            point[j].innerHTML = 1.33
        }
        else if(per_arr[j]>=50){
            point[j].innerHTML = 1.00
        }
        else{
            point[j].innerHTML = 0.00
        }
        total_gpa_ = (+total_gpa_) + (+point[j].innerHTML)
    }
    total_gpa.innerHTML = (total_gpa_)/i

    
    for(var x=0; x<td.length;x++){
        console.log(th[x])
    }
    
    result_btns.style.display = 'block'
    result_btns.style.marginTop = '45vw'
  

} // if  end

else{
    alert("marks should not exceeds 100")
}
     

})

var grade = document.getElementById('grade')
var grad_table = document.getElementsByClassName('grad_table')
grade.addEventListener('click',()=>{
    table.style.display = 'none'
    grad_sys.style.display = 'block'
    grad_sys.style.marginTop = '0vw'
    grade.style.display = 'none'
})

