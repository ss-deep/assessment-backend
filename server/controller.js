module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    fortuneTeller: (req, res) => {
        const fortunes = ['A fresh start will put you on your way!',
            'A pleasant surprise is waiting for you!',
            'Adventure can be real happiness!',
            'Don’t let your limitations overshadow your talents!',
            'Now is the time to try something new!']
        
            let randomIndex = Math.floor(Math.random() * fortunes.length);
            let randomFortune = fortunes[randomIndex];
            res.status(200).send(randomFortune);
    }
}