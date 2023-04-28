"use strict"


const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if (response.success === true) {
      location.reload();
    } else {
      userForm.setLoginErrorMessage(response.error);
    }
  });
};

userForm.registerFormCallback = (newData) => {
  ApiConnector.register(newData, (response) => {
    if (response.success) {
      location.reload();
    } else {
      userForm.setRegisterErrorMessage(response.error);
    }
  });
};