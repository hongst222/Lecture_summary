function getDate() {
    let date = new Date();
    date.setHours(date.getHours() + 9);
    date = date.toISOString().substring(0,16);
    document.querySelector('.date').value = date; 
    console.log(document.querySelector('.date').value);
}


export default getDate;