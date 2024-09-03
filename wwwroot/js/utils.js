﻿



// Format timestamp as "MMMM dd, yyyy hh:mm:ss tt"
function DateFormatOptions() {
    return options = {
        year: 'numeric', month: 'long', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: true
    };
}

//Function for input-error class
function RemoveClass(element) {
    element.classList.remove('input-error');
};


//Function for changing text color depending on text
function NewItemAdded() {
    const statusDisplays = document.getElementsByClassName('status-container');
    const firmwareUpdateDisplay = document.getElementsByClassName('firmware-update');


    Array.from(statusDisplays).forEach(statusDisplay => {
        if (statusDisplay.textContent.trim() === "Complete") {
            statusDisplay.classList.add('text-success');
        } else if (statusDisplay.textContent.trim() === "Incomplete(Usable)") {
            statusDisplay.classList.add('text-primary');
        } else if (statusDisplay.textContent.trim() === "Incomplete(Unusable)") {
            statusDisplay.classList.add('text-danger');
        }
    });

    Array.from(firmwareUpdateDisplay).forEach(firmwareUpdateDisplay => {
        if (firmwareUpdateDisplay.textContent.trim() === "YES") {
            firmwareUpdateDisplay.classList.add('text-success');
        } else if (firmwareUpdateDisplay.textContent.trim() === "N/A") {
            firmwareUpdateDisplay.classList.add('text-muted');
        } else if (firmwareUpdateDisplay.textContent.trim() === "NO") {
            firmwareUpdateDisplay.classList.add('text-danger');
        }
    });


}


//Returns full url
function getUrl(url) {

    const fullUrl = `${window.location.origin}${url}`;

    return fullUrl;

};


//Returns Browser info
function getBrowserInfo() {
    const userAgent = navigator.userAgent;

    let browserName = "Unknown Browser";
    let browserVersion = "Unknown Version";

    // Check for various browsers
    if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        browserVersion = userAgent.substring(userAgent.indexOf("Firefox") + 8);
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        browserName = "Opera";
        browserVersion = userAgent.substring(userAgent.indexOf("Opera") + 6);
        if (userAgent.indexOf("OPR") > -1) {
            browserName = "Opera";
            browserVersion = userAgent.substring(userAgent.indexOf("OPR") + 4);
        }
    } else if (userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
        browserVersion = userAgent.substring(userAgent.indexOf("rv:") + 3);
    } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Edge";
        browserVersion = userAgent.substring(userAgent.indexOf("Edge/") + 5);
    } else if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        browserVersion = userAgent.substring(userAgent.indexOf("Chrome/") + 7);
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Safari";
        browserVersion = userAgent.substring(userAgent.indexOf("Version/") + 8);
    }

    return {
        name: browserName,
        version: browserVersion.split(" ")[0] // Remove additional info if any
    };
};

function Validations() {
    const Post = methods[0];
    const Put = methods[2];

    const Login = actions[0];
    const Logout = actions[1];
    const Add = actions[2];
    const Modify = actions[4];

    const PostSuccess = SuccessMessages[0];
    const ResponseValid = SuccessMessages[1];
    const LoginSuccess = SuccessMessages[2];
    const AddingSuccess = SuccessMessages[4];
    const PutSuccess = SuccessMessages[5];
    const UpdateSuccess = SuccessMessages[6];

    const LoginFailed = ErrorMessages[0];
    const PostFailed = ErrorMessages[3];
    const ResponseInvalid = ErrorMessages[4];
    const AddingFailed = ErrorMessages[7];
    const PutFaield = ErrorMessages[9];
    const UpdateFailed = ErrorMessages[11];


    const FillRequiredFields = ValidateFields[1];
    const UsernamePasswordIncorrect = ValidateFields[2];
    const UsernameEmpty = ValidateFields[4];
    const PasswordEmpty = ValidateFields[6];
    const UsernameLength = ValidateFields[7];
    const PasswordLegth = ValidateFields[8];
    const MatchFound = ValidateFields[9];
    const InvalidCredentials = ValidateFields[10];
    const SuccessToAddDatabase = ValidateFields[11];
    const FailedToAddDatabase = ValidateFields[12];
    const InvalidInput = ValidateFields[13];

    const UpdatedSuccessfully = ActionMessages[0];
    const FailedToUpdate = ActionMessages[1];


    const LogoutSuccess = SuccessMessages[3];
    const LogoutFailed = ErrorMessages[1];
    const LogoutError = ErrorMessages[6];
    const AddingError = ErrorMessages[8];
    const PutError = ErrorMessages[10];

    const LogingIn = LoadingMessages[0];
    const LogingOut = LoadingMessages[1];
    const PleaseWait = LoadingMessages[2];

    const PostError = ErrorMessages[2];

    return validations = {
        Post, //0
        Login, //1
        PostSuccess, //2
        ResponseValid, //3
        LoginSuccess, //4
        LoginFailed, //5
        PostFailed, //6
        ResponseInvalid, //7
        UsernameEmpty, //8
        PasswordEmpty, //9
        UsernameLength, //10
        PasswordLegth, //11
        LogoutSuccess, //12
        LogoutFailed, //13
        LogingIn, //14
        LogingOut, //15
        PleaseWait, //16
        Logout, //17
        PostError, //18
        MatchFound, //19
        InvalidCredentials, //20
        UsernamePasswordIncorrect, //21
        FillRequiredFields, //22
        LogoutError, //23
        AddingSuccess,
        AddingFailed,
        AddingError,
        Add,
        SuccessToAddDatabase,
        FailedToAddDatabase,
        InvalidInput,
        Put,
        Modify,
        PutSuccess,
        PutError,
        PutFaield,
        UpdateSuccess,
        UpdateFailed,
        UpdatedSuccessfully,
        FailedToUpdate
    };
}


function ProcessRequest() {
    const JsonApp = DataType[0];
    const JsonFile = DataType[1];

    return processes = {
        JsonApp,
        JsonFile
    };
}

//Returns  JSON Format text
function jsonResult(
    method, _action, _actionMessage1, Val1, _actionMessage2, Val2, _actionMessage3, data,
    resMessage, api, resStatus, targetRoute, _browser, Val3) {

    const ResponseMessage = resMessage;
    const ApiUrl = api;
    const ResponseStatus = resStatus;
    const TagerRoute = getUrl(targetRoute);
    const Action = _action
    const ActionMessage1 = _actionMessage1;
    const ActionMessage2 = _actionMessage2;
    const ActionMessage3 = _actionMessage3;
    const Validity1 = Val1;
    const Validity2 = Val2;
    const BrowserInfo = _browser;
    const version = Val3;


    const timestamp = new Date().toLocaleString('en-US', DateFormatOptions);

    return {
        method,
        actions: {
            action: Action,
            [ActionMessage1]: [Validity1],
            [ActionMessage2]: [Validity2],
            message: ActionMessage3
        },
        data,
        message: ResponseMessage,
        apiurl: ApiUrl,
        response: ResponseStatus,
        targeroute: TagerRoute,
        browserdetails: {
            [BrowserInfo]: version
        },
        timestamp
    };
};


//Function for Loading Modal
async function loading(message) {
    $('#loading-modal .modal-body').html(`
        <div class="text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only p-5">Loading...</span>
            </div>
            <p class="mt-2">${message}...</p>
        </div>
    `);

    await $('#loading-modal').modal({
        backdrop: 'static',
        keyboard: false
    }).modal('show');
};

function UserLoginValidateField() {
    const username = document.getElementById('username');
    const usernameError = document.getElementById('username-error');
    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    //User Login Form input fields client-side validation
    if (username || password) {
        username.addEventListener('input', function () {
            usernameError.textContent = '';
            RemoveClass(username);
            /*if (username.value.trim() == '') {
                usernameError.textContent = validate.UsernameEmpty;
            } else if (username.value.length < 3) {
                usernameError.textContent = validate.UsernameLength;
            } else {
                usernameError.textContent = '';
                RemoveClass(username);
            }*/
        });
        password.addEventListener('input', function () {
            passwordError.textContent = '';
            RemoveClass(password);
            /*
            if (password.value.trim() == '') {
                passwordError.textContent = validate.PasswordEmpty;
            } else if (password.value.length < 8) {
                passwordError.textContent = validate.PasswordLegth;
            } else {
                passwordError.textContent = '';
                RemoveClass(password);
            }*/
        });

    }
}

function AdminLoginValidateField() {
    const user = document.getElementById('user');
    const userError = document.getElementById('user-error');
    const pwd = document.getElementById('pwd');
    const pwdError = document.getElementById('pwd-error');

    //Admin Login Form input fields client-side validation
    if (user || pwd) {
        user.addEventListener('input', function () {
            userError.textContent = '';
            RemoveClass(user);
            /*
            if (user.value.trim() == '') {
                userError.textContent = validate.UsernameEmpty;
            } else if (user.value.length < 3) {
                userError.textContent = validate.UsernameLength;
            } else {
                userError.textContent = '';
                RemoveClass(user);
            }*/
        });
        pwd.addEventListener('input', function () {
            pwdError.textContent = '';
            RemoveClass(pwd);
            /*
            if (pwd.value.trim() == '') {
                pwdError.textContent = validate.PasswordEmpty;
            } else if (pwd.value.length < 8) {
                pwdError.textContent = validate.PasswordLegth;
            } else {
                pwdError.textContent = '';
                RemoveClass(pwd);
            }*/
        });
    }
}

function DisplaySuccessAndError() {
    // Show success message if it exists
    const successMessage = document.getElementById('success-message');
    if (successMessage && successMessage.textContent.trim() !== "") {
        successMessage.style.display = 'block';
        setTimeout(() => successMessage.style.display = 'none', 1500); // Show for 1.5 seconds
    }

    // Show error message if it exists
    const errorMessage = document.getElementById('error-message');
    if (errorMessage && errorMessage.textContent.trim() !== "") {
        errorMessage.style.display = 'block';
        setTimeout(() => errorMessage.style.display = 'none', 1500); // Show for 1.5 seconds
    }

    const userInput = document.getElementsByClassName('user-input');
    function trimInput(element) {
        element.value = element.value.trim();
    }
}






//initialize Validation Function
const validate = Validations();
const browserInfo = getBrowserInfo();
const process = ProcessRequest();