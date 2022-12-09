const { db } = require("../util/admin");
const functions = require('firebase-functions');

exports.voitures = async (req, res) => {
    const voitureRef = db.collection('voitures');
    try {
        voitureRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
            .status(500)
            .json({ general: "Something went wrong, please try again" });
    }
};

exports.addvoitures = (req, res) => {
    const date = req.body.date;
  
    db.collection('voiture').add({
        date
      });
      
  
    res.send('Date enregistrée avec succès !');
  };

  