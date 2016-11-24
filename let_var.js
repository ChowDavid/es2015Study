function loadProfiles(userNames){
    if (userNames.length > 3) {
        var loadingMessage="This might take a while...";
        console.log(loadingMessage);

    } else {
        let flashMessage="Loading Profiles";
        console.log(flashMessage);
    }
    //the following will show code error
    console.log(flashMessage);
    //the follwoing will only show undefine,but not error
    console.log(loadingMessage)
}
