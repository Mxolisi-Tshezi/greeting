function GreetFactory(TheNames) {
    var theUsername = 0;
    var namesList = TheNames || [];
    var Alphabets = /^[a-zA-Z]+$/;

    function setUsername(userName) {
        theUsername =
            userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
    }

    function storeName(userName) {
        if (!namesList.includes(userName)) {
            namesList.push(userName);
            return true;
        } else {
            return false;
        }
    }

    function greetingMessage(userName, language) {
        let check = storeName(userName);
        if (check) {
            if (language === "English") {
                return "Hello " + " " + userName;
            } else if (language === "IsiXhosa") {
                return "Molo " + " " + userName;
            } else if (language === "isiZulu") {
                return "Sawubona " + " " + userName;
            }
        } else {
            return "already greeted ";
        }
    }

    function errorMessages(userName, language) {
        if (userName === "" && !language) {
            return " Enter name and choose a language";
        }
        if (userName === "") {
            return "Name not entered";
        } else if (!language) {
            return "Language not selected";
        } else if (userName !== Alphabets) {
            return "Invalid name";
        }
    }
    function storedNames() {
        return namesList;
    }
    function count() {
        return namesList.length;
    }
    return {
        storeName,
        greetingMessage,
        errorMessages,
        count,
        storedNames,
        setUsername,
    };
}