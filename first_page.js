function login(){
    user_name= document.getElementById("user_name").value
    subject_name= document.getElementById("subject_name").value
    localStorage.setItem("user_name",user_name)
    localStorage.setItem("subject_name",subject_name)
    window.location="index.html"
}