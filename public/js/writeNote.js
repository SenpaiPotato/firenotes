let googleUser, userId;
let labels = [];
window.onload = () => {
    firebase.auth()
        .onAuthStateChanged(user => {
            if(user) {
                console.log(`Logged in as: ${user.displayName}`);
                googleUser = user;
                userId = googleUser.uid;

            } else {
                window.location = 'index.html';
            }
        });
}
function addItem(label){
    console.log("adding Item "+ label)
    labels.push(label);
}
function toggleDropDown(){
    console.log("Toggle dropdown");
    document.querySelector('.dropdown').classList.toggle("is-active");
}
const submitNote = () => {
    const note = document.querySelector("#noteText").value;
    const title = document.querySelector("#noteTitle").value;

    firebase.database().ref(`users/${userId}`).push(
        {
            title: title,
            note: note,
            timestamp: Date.now(),
            labels : labels

        }
    )
    .then(() => {
        document.querySelector("#noteText").value = "";
        document.querySelector("#noteTitle").value = "";
    })
    .catch(error => {
        console.log(`Something bad happened ... \n ${error}`)
    })

};