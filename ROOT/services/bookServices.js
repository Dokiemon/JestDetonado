import {livro as livroModel} from "./bookRegister.js"

export class BookService{
    async  bookAdd(nome,exemplares,autor,ano){
        const livro =new livroModel({nome,exemplares,autor,ano})
        const salvamento= await livro.save();
        return salvamento;
    }

    async bookListing(livro){
        return await console.log(livro);
    }
    async bookSearch(nome){
        return await livro.findOne({nome});
    }
    async bookReturn(){
        const livro=await this.bookSearch(nome);
        if(livro && livro.disponibilidade){
            livro.disponibilidade=true;
            await livro.save()
            return livro
        }
        return null

   }
   async bookReservation(){
    const livro=await this.bookSearch(nome);
    if(livro && livro.disponibilidade){
        livro.disponibilidade=false;
        await livro.save();
        return livro;
    }
    return null;    
   }
}