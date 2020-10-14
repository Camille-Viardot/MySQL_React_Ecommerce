const con = require('../Database/DB');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

// Routes pour ajouter un utilisateur
router.post('/sign-up', (req, res) => {
    try {
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            let newUser = `INSERT INTO users (name, password, email, avatar) VALUES ('${req.body.name}','${hash}','${req.body.email}','${req.body.avatar}')`;
            con.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) {
                if (result.length) {
                    res.status(203.).json('Cette email existe déjà');
                } else {
                    con.query(newUser, function (error, resultat) {
                        res.status(200).json('Validé')
                    })
                }
            })
        })
    } catch (error) {
        console.log(error);
    }
})

// Route pour afficher les utilisateurs
router.get('/users', function (req, res) {
    con.query('SELECT name, id FROM users', function (err, result) {
        if (err) throw (err)
        res.send(result)
    })
})

// Route pour la connection d'un utilisateur
router.post('/sign-in', function (req, res) {
    try {
        con.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) {
            if (result.length) {
                bcrypt.compare(req.body.password, result[0].password, function (err, resultat) {
                    let token = jwt.sign({ id: result[0].id, name: result[0].name, email: result[0].email, avatar: result[0].avatar }, secret, { expiresIn: 86400 });
                    if (resultat == true) {
                        res.status(200).json({msg: 'Validé', auth: true, token: token });
                    } else {
                        res.status(203).json('Désolé le mot de passe est incorrecte !')
                    }
                })
            } else {
                res.status(203).json('Désolé Utilisateur introuvable !')
            }
        })
    } catch (error) {
        console.log(error);
    }
})

router.post('/products', function (req, res) {
    try {
        let addProduct = `INSERT INTO products (productName, prix, description, photo, categorie, user_affiliate) VALUES ('${req.body.productName}','${req.body.prix}','${req.body.description}','${req.body.photo}','${req.body.categorie}','${req.body.user_affiliate}')`;
        con.query(addProduct, function (err, result) {
            res.status(200).json('Produit ajouté')
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/products', function (req, res) {
    con.query(`SELECT name, prix, photo FROM products`, function (err, result) {
        if (err) throw (err)
        res.json(result)
    })
})

router.get('/products/:id', function (req, res) {
    try {
        con.query(`SELECT productName, prix, photo, description, categorie FROM products INNER JOIN users ON users.id = products.user_affiliate WHERE users.id = '${req.params.id}'`, (err, result) => {
            if (err) throw err
            res.json(result)
        })
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;