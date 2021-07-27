const signIn = () => {
    console.log("Calling sign in");
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
        .signInWithPopup(provider)
        .then(result => {
            //Do something with the result
            console.log(`result is ${result}`);
            const credential = result.credential;
            const token = credential.accessToken;

            const user = result.user;

            console.log(user.uid);
            window.location = 'writeNote.html'; //change to welcomepage.html
        })
        .catch(error => {
            //Something bad happened :(
            console.log(error);
        });

};