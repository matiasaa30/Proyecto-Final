import * as fs from 'fs';

class Productos {
    private file
    constructor (file) {
        this.file = file
    }

    async readFile() {
        try{
            let content = await fs.promises.readFile(this.file, 'utf8')
            let products = JSON.parse(content)
            return products
        }catch (e){
            return e
        }
    }

    async whriteFile(data) {
        try{
            await fs.promises.writeFile(this.file, JSON.stringify(data))
        }catch (e){
            return e
        }
    }

    async getById(id) {
        try{
            let contObj = await this.readFile()
            let result = contObj.find(obj => obj.id == id)
            return result === undefined ? ({error: 'producto no encontrado'}) : result
        }catch (e){
            return e
        }
    }

    async saveProduct(producto){
        try{
            let contObj = await this.readFile()
            let newID = contObj.length > 0 ? contObj.length + 1 : 1
            producto.id = newID
            contObj.push(producto)
            await this.whriteFile(contObj)
        }catch (e){
            return e
        }
    }

    async modifById (id, producto) {
        try{
            producto.id = id
            let content = await this.readFile()
            content.splice(id-1, 1, producto)//revisar
            await this.whriteFile(content)
        }catch (e){
            return e
        }

    }

    async deleteId(id) {
        try{
            let contObj = await this.readFile()
            let newObj = contObj.filter(obj => obj.id !== id)
            await this.whriteFile()
        }catch{

        }
    }
}

export = Productos