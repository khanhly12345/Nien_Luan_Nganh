const Products = require('../models/Product')

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
}

module.exports = new Product();