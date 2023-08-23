const Products = require('../models/Product')
const fs = require('fs');

class Product {
    create (req, res) {
        const { 
            name,
            branch,
            price,
            quantity,
            nsx,
            series,
            led,
            ketnoi,
            docambien,
            dophangiai,
            tencambien,
            id } = req.body

        const product = new Products({
            name,
            branch,
            price,
            quantity,
            img : req.file.filename,
            category: id,
            attributes: {
                nsx,
                series,
                led,
                ketnoi,
                docambien,
                dophangiai,
                tencambien,
            }
        })
        product.save()
        // const imagePath = req.file;
        // console.log(req.file.filename)
        // console.log(req.body)
        res.json({ message: 'Product created successfully' });
    }

    create2(req, res) {
        const {
            name,
            branch,
            price,
            quantity,
            nsx,
            theheCPU,
            CPU,
            chip,
            hdh,
            manhinh,
            ram,
            id } = req.body
        const product = new Products({
            name,
            branch,
            price,
            quantity,
            img : req.file.filename,
            category: id,
            attributes: {
                nsx,
                theheCPU,
                CPU,
                chip,
                hdh,
                manhinh,
                ram,
            }
        })
        product.save()
        res.json({ message: 'Product created successfully' });
    }

    show(req, res) {
        Products.find({})
            .then(product => {
                res.json(product)
            })
            .catch((error) => {
                console.log(error)
            })
    } 

    showEdit(req, res) {

        Products.findById(req.params.id)
            .then(product => {
                res.json(product)
            })
            .catch(error => {
                console.log(error)
            })
    } 

    edit(req, res) {
        const id = req.params.id
        const {name, branch, price, quantity, imgOld} = req.body
        let newImg
        const pathImg = "uploads/" + imgOld
        if(req.file !== undefined) {
            fs.unlink(pathImg, err => {
                if(err) {
                    console.log("error update img")
                }
                console.log("updated successfully!")
            })
            newImg = req.file.filename
        }

        Products.updateOne({_id : id}, {
            name,
            branch,
            price,
            quantity,
            img : newImg
        })
        .then(() => {
            res.json({message: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    delete(req, res) {
        const {id , img} = req.body
        const pathImg = "uploads/" + img
        if(id != '' && img !='') {
            Products.deleteOne({_id: id})
                .then(() => {
                    res.json({message: true})
                    fs.unlink(pathImg, err => {
                        if(err) {
                            console.log("error delete img")
                        }
                        console.log("deleted successfully!")
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }else{
            res.json({message: false})
        }
    }
}

module.exports = new Product();