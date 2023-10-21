const freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 70, occupation: "Programmer"},
    { name: "Leo", price: 90, occupation: "Teacher"},
    { name: "Bill", price: 110, occupation: "Writer"},
    { name: "Spark", price: 130, occupation: "Programmer"},
    { name: "Morg", price: 150, occupation: "Writer"}
]; 
const freeLancerList = document.getElementById("freelancer-list")
const names = ["Michael", "Shaya", "Manny", "Liz"]
const occupation = ["Writer", "Teacher", "Programmer"]

const maxFreelancers = 10;

const addFreelancersIntervalId = setInterval(addFreelancer, 1000)


function calculateAverage() {

    const sum = freelancers.reduce((accum, freelancer) => {
    return accum + freelancer.price;
    }, 0);

    return sum / freelancers.length;
}
render();

function createFreeLancerView (freelancer) {
    
    const freeLancerContainer = document.createElement("div")
    freeLancerContainer.classList.add("border")
    
    const nameLable = document.createElement("p")
    const priceLable = document.createElement("p")
    const occupationLable = document.createElement("p")

    nameLable.textContent = `Name: ${freelancer.name}`; 
    priceLable.textContent = `Price: ${freelancer.price}`;
    occupationLable.textContent = `Occipation: ${freelancer.occupation}`;

    freeLancerContainer.appendChild(nameLable)
    freeLancerContainer.appendChild(priceLable)
    freeLancerContainer.appendChild(occupationLable)

    return freeLancerContainer;
}





function render(){
    for (let freelancer of freelancers ) {
        const freelancerview = createFreeLancerView(freelancer)

        

    freeLancerList.appendChild(freelancerview)

    
    }
}

render()

function addFreelancer (){
    const nameIndex = Math.floor(Math.random()*names.length)
    const occupationIndex = Math.floor(Math.random()*occupation.legnth)
    const radomPrice = Math.random()*200 + 18 

    const newFreeLancer = {
        name: names[nameIndex], 
        occupation: occupation[occupationIndex],
        price: radomPrice
    }
    freelancers.push(newFreeLancer)

    render()

    if (freelancers.length === maxFreelancers) {
        clearInterval(addFreelancersIntervalId); 
    }

}