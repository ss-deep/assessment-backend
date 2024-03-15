const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortuneButton")

const baseUrl='http://localhost:4000/api'

const getCompliment = () => {
    axios.get(`${baseUrl}/compliment/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const fortuneTeller = () => {
    axios.get(`${baseUrl}/fortune`)
        .then((res) => {
        alert(res.data)
    })
}

complimentBtn.addEventListener('click',getCompliment)
fortuneButton.addEventListener('click',fortuneTeller)