

function savelocal(event){
    event.preventDefault()
    username=event.target.username.value;
    useremail=event.target.useremail.value;
    usertele=event.target.usertele.value;

    obj={
        username:username,
        useremail:useremail,
        usertele:usertele
    }
    
  axios.post('https://crudcrud.com/api/4b14bb3f8ef44e999df5fbfabc859055/studentdata',obj)
  .then((response)=> {
    console.log(response)
    
  })
  .catch((err)=> {
    console.log(err)
  })


}


window.addEventListener("DOMContentLoaded",()=> {
  axios.get("https://crudcrud.com/api/4b14bb3f8ef44e999df5fbfabc859055/studentdata")
  .then((response)=>{
    console.log(response)
    for(var i=0;i<response.data.length;i++){
      Show(response.data[i])
    }
  })
  .catch((error)=> {
    console.log(error)
  })
})

function Show(student){
  const parent= document.getElementById('listofuser');
  const child= `<li id=${student._id}>${student.username}${student.useremail}${student.usertele}<button onclick=deletesStudent('${student._id}')>Delete user</button>
  <button onclick=editStudent('${student._id}')>edit</button>
  </li>`
  parent.innerHTML=parent.innerHTML+child
}


function deletesStudent(studentid){
  axios.delete(`https://crudcrud.com/api/4b14bb3f8ef44e999df5fbfabc859055/studentdata/${studentid}`)
  .then((response)=> {
    removescreen(studentid)
  })
  .catch((err)=> {
    console.log(err)
  })
}



function removescreen(studentid){
  const parentNode=document.getElementById('listofuser')
  const childnode=document.getElementById(studentid)
  if(childnode){
    parentNode.removeChild(childnode)
  }
}

function editStudent(studentid){
  axios.put(`https://crudcrud.com/api/4b14bb3f8ef44e999df5fbfabc859055/studentdata/${studentid}`)
  .then((response)=>response)
  .catch((err)=>err)
}


// function editStudent(username,useremail,usertele,id){
//   document.getElementById('un').value=username;
//   document.getElementById('ue').value=useremail;
//   document.getElementById('ut').value=usertele;
//   deletesStudent(id)
// }