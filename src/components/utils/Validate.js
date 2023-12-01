
export const validate = (email,password,name) => {
    // eslint-disable-next-line
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    // const isNameValid = () => {
    //     if (name && name.length > 0 && !name.includes(" ")) {
    //         return true;
    //     }
    //     return false;
    // };

    //  if(!isNameValid()) return "Name should not be empty";
    if(!isEmailValid) return "Email is not valid";
    if(!isPassValid) return "Password is not valid";
    return null;

  
}

