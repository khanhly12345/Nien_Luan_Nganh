const { match } = require('assert');
const Products = require('../models/Product')
const fs = require('fs');
const { error } = require('console');

class Product {
    // create phu kien
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
        res.json({ message: true });
    }
    // create laptop
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
        res.json({ message: true });
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

    async showLaptop(req, res) {
        const id = req.params.category
        const products = await Products.find()
            .populate({path: 'category', match: {name: `${id}`}}) // 'author' ở đây là tên trường chứa tham chiếu
            .exec();
         const filterProduct = products.filter(product => (
            product.category !== null
         ))
         res.json(filterProduct)
    }

    // detail
    async detail(req, res) {
        console.log(req.params.id)
        const products = await Products.findOne({ _id: req.params.id})
            .populate('category')
            .exec()
        res.json(products)
    }
    // carts
    carts (req, res) {
        const idCart = req.body
        const findRecords = () => {
            return Products.find({ _id: { $in: idCart }}).exec();
        };
        
        findRecords()
            .then(records => {
                res.json(records)
            })  
    }

    async paginate (req, res) {
        const { page, limit } = req.query;
        console.log(page, limit)
        const currentPage = parseInt(page) + 1 || 0;
        const itemsPerPage = parseInt(limit) || 5;

        try {
            const items = await Products.find()
            .skip((currentPage - 1) * itemsPerPage)
            .limit(itemsPerPage);
            res.json(items);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Lỗi khi truy vấn dữ liệu.' });
        }
    }   

    async countProduct (req, res) {
        const count = await Products.count({})
        res.json({count})
    }

    async filter(req, res) {
        const {category, ram, price, branch} = req.body
        let newPrice

        const filterConditions = [];

        if (ram !== '') {
            filterConditions.push({ 'attributes.ram': ram });
        }

        if (branch !== '') {
            filterConditions.push({ branch: branch });
        }

        if(price !== undefined) {
            if(price == 20000000) {
                newPrice = {$lt : price}
                filterConditions.push({ price: newPrice });
            }else{
                newPrice = {$gt : price}
                filterConditions.push({ price: newPrice });
            }
        }
        
        // if(newPrice !== '') {
        //     filterConditions.push({ price: newPrice });
        // }

        console.log(filterConditions)
        try {
            const products = await Products.find({ $and: filterConditions })
                .populate({ path: 'category', match: {name: `${category}`}})
                .exec()
            const filterProduct = products.filter(product => (
                product.category !== null
            ))
            res.json(filterProduct)
        } catch (error) {
            
        }
        

        // try {
        //     // Bước 1: Tìm sản phẩm theo giá
        //     const products = await Products.find({ price: { $lt: newPrice } }).exec();
        
        //     // Bước 2: Lọc danh sách sản phẩm dựa trên danh mục
        //     const filteredProducts = products.filter(product => {
        //       return product.category && product.category.name === category;
        //     });
        
        //     res.json(filteredProducts);
        //   } catch (error) {
        //     console.error(error);
        //     res.status(500).json({ error: 'Lỗi khi lọc sản phẩm' });
        //   }
        
    }
}

module.exports = new Product(); 