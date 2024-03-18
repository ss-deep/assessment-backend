let msgsArr = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        // choose random compliment
        res.status(200).send(randomNumberGenrator(compliments));
    },
    fortuneTeller: (req, res) => {
        const fortunes = ['A fresh start will put you on your way!',
            'A pleasant surprise is waiting for you!',
            'Adventure can be real happiness!',
            'Soon life will become more interesting.!',
            'Now is the time to try something new!']
        
            res.status(200).send(randomNumberGenrator(fortunes));
    },
    optionsFunc: (req, res) => {
        let arrObj = {
            inspire : [`"It always seems impossible until it's done." — Nelson Mandela`,
            `"Don’t count the days, make the days count." — Muhammad Ali`,
            `"If you risk nothing, then you risk everything." — Geena Davis`],
            encourage : [`“Sending major good vibes your way.”`,
            `“Keep on keeping on!”`,
            `"This is tough, but you’re tougher.”`],
            goals : [`"Don't limit yourself."`,
            `“Believe you can and you’re halfway there.”`,
            `“Do not let what you cannot do interfere with what you can do.”`]
        }
        const {value} = req.params
        res.status(200).send(randomNumberGenrator(arrObj[value]));
    },
    createMessage: (req, res) => {
        msgsArr.push(req.body)
        const { message }=req.body
        res.status(200).send(msgsArr);
    },
    getPosts: (req,res) => {
        
        res.status(200).send(msgsArr);
    },
    deleteMessageFunc: (req,res) => {
        const {id} = req.params
        if (id) {
            for (let i = 0; i < msgsArr.length; i++){
                if (msgsArr[i].id === +id) {
                    msgsArr.splice(i, 1)
                    res.status(200).send(msgsArr)
                    return
                }
            }
            res.status(400).send('Message not found in the list!')
        } else {
            res.status(400).send('Write new a message!')
        }
    },
    updateMessageFunc: (req, res) => {
        const { id, message } = req.body
        if (id) {
            for (let i = 0; i < msgsArr.length; i++) {
                if (msgsArr[i].id === +id) {
                    msgsArr[i].message=message
                    res.status(200).send(msgsArr)
                    return
                }
            }
            res.status(400).send('Message not found in the list!')
        }
    }
}

function randomNumberGenrator(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}