const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortuneButton")
const inspireButton = document.getElementById("inspireButton")
const options = document.querySelector("#options")

const writeButton = document.getElementById("write-button")
const form = document.getElementById("myForm")
const submitButton = document.querySelector('.submit')
const closeButton = document.querySelector('.close')
const displayMessages = document.getElementById("displayMessages")

let id = 1
let updateId=0

const baseUrl='http://localhost:4000/api'

const getCompliment = () => {
    axios.get(`${baseUrl}/compliment/`)
        .then(res => {
            displayMessages.innerHTML=res.data
    });
};

const fortuneTeller = () => {
    axios.get(`${baseUrl}/fortune`)
        .then((res) => {
            displayMessages.innerHTML=res.data
    })
}

const optionsFunc = (e) => {
    axios.get(`${baseUrl}/options/${e.target.value}`)
        .then((res) => {
            displayMessages.innerHTML=res.data
        })
}

const createMessageFunc = (e) => {
    e.preventDefault()
    closeForm()

    if (updateId === 0) {
        let message = document.querySelector('input')
        let msgObj = {
            id:id++,
            message:message.value
        }
        axios.post(`${baseUrl}/create_post`, msgObj)
            .then((res) => {
                displayMessagesFunc(res.data)
            })
    } else {
        let msgObj = {
            id:updateId,
            message:document.querySelector('input').value
        }
        axios.put(`${baseUrl}/edit-message`,msgObj)
            .then((res) => {
                displayMessagesFunc(res.data)
            })
        updateId=0
    }
    
    document.querySelector('input').value = ''
}

const displayMessagesFunc = (newMsgArr) => {
    displayMessages.innerHTML =""

    for (let i = 0; i < newMsgArr.length; i++){
        const messageDiv = document.createElement("div")
        messageDiv.classList.add("new-message");
        messageDiv.innerHTML = `<li >${newMsgArr[i].message}</li>`

        const deleteButton = document.createElement("button")
        deleteButton.id = `${newMsgArr[i].id}` 
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', deleteMessageFunc)

        const updateButton = document.createElement("button")
        updateButton.id = `${newMsgArr[i].id}` 
        updateButton.textContent = 'Change'
        updateButton.addEventListener('click',updateMessageFunc)

        displayMessages.appendChild(messageDiv).appendChild(updateButton)
        displayMessages.appendChild(messageDiv).appendChild(deleteButton)
    
    }
}
const deleteMessageFunc = (e) => {
    axios.delete(`${baseUrl}/delete-message/${e.target.id}`)
    .then((res) => {
        displayMessagesFunc(res.data)
    })

}
const updateMessageFunc = (e) => {
    updateId= e.target.id
    openForm()
}

const openForm = ()  => {
    form.style.display = "block";
}
  
const closeForm = () => {
    form.style.display = "none";
}

complimentBtn.addEventListener('click',getCompliment)
fortuneButton.addEventListener('click',fortuneTeller)
options.addEventListener('change', optionsFunc)
writeButton.addEventListener('click', openForm)
closeButton.addEventListener('click', closeForm)
submitButton.addEventListener('click', createMessageFunc)
