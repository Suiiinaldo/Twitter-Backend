class CrudRepository{
    
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async bulkInsert(data){
        try {
            const response = await this.model.bulkInsert(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id){
        try {
            const data = await this.model.findById(id);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll(){
        try {
            const data = await this.model.find({});
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(data){
        try {
            const response = await this.model.deleteOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.model.updateOne(id,data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default CrudRepository;