// How to access function property


let User = () => {
    let user_Name = "Karkuvel pandi"
    let user_Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5CvF3dPwwG4bDIDbbAP_DMkPOEtPwJvRpxLVLMB7sngePACPgWMvuEjjL34axA7s7A&usqp=CAU";

    return <div>
        <h1>User_Name: {user_Name}</h1>
        <img src={user_Image}/>
    </div>
};

export default User
