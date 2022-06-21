document.addEventListener("DOMContentLoaded", work);
document.getElementsByTagName("button")[0].addEventListener("click", work)


function work(){
    let userData = new XMLHttpRequest();
    userData.open("GET", "https://randomuser.me/api/?results=2&inc=name,dob,nat,picture");
    userData.send();

    userData.addEventListener("load", function(){

        let parsedData = JSON.parse(userData.responseText);

        console.log(parsedData.results[0]);
        console.log(parsedData.results[1]);


        // LEFT USER DETAILS
        leftUserName = parsedData.results[0].name;
        leftUserAge = parsedData.results[0].dob.age;
        leftUserNationality = parsedData.results[0].nat;
        leftUserName = `${leftUserName.title} ${leftUserName.first} ${leftUserName.last}`
        console.log(leftUserName)
        console.log(leftUserAge);
        console.log(leftUserNationality);


        // RIGHT USER DETAILS
        rightUserName = parsedData.results[1].name;
        rightUserAge = parsedData.results[1].dob.age;
        rightUserNationality = parsedData.results[1].nat;
        rightUserName = `${rightUserName.title} ${rightUserName.first} ${rightUserName.last}`
        console.log(rightUserName)
        console.log(rightUserAge);
        console.log(rightUserNationality);


        if(userData.readyState == 4){
            console.log("its ready");
            function loader(){
                document.getElementById("loader").style.display = "block";
                document.getElementsByClassName("up")[0].style.opacity = "0.1"
                setTimeout( changer , 5000);
            }
    
            loader()




        }


        // function loader(){
        //     document.getElementById("loader").style.display = "block";
        //     document.getElementsByClassName("up")[0].style.opacity = "0.1"
        //     setTimeout( changer , 5000);
        // }

        // loader()


        function changer(){


            document.getElementById("loader").style.display = "none";
           






        

        // DATA CHANGE FOR LEFT USER

        document.getElementById("debater1").src = parsedData.results[0].picture.large;
        document.getElementsByClassName("left_name")[0].innerText = leftUserName;
        document.getElementsByClassName("left_age")[0].innerText = leftUserAge;
        document.getElementsByClassName("left_country")[0].innerText = leftUserNationality;


        // DATA CHANGE FOR RIGHT USER

        
        document.getElementById("debater2").src = parsedData.results[1].picture.large;
        document.getElementsByClassName("right_name")[0].innerText = rightUserName;
        document.getElementsByClassName("right_age")[0].innerText = rightUserAge;
        document.getElementsByClassName("right_country")[0].innerText = rightUserNationality;



        document.getElementsByClassName("up")[0].style.opacity = "1"


        }












    });

}