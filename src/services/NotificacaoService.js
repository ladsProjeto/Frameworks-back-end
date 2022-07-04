const notificacaoModel = require("./../models/Notificacao")

module.exports = {
    
    buscarPorID : async (id) => {
        try {
          return await notificacaoModel.findOne({ _id: id });
        } catch (error) {
          throw {  message: error.message, status: 500}
        }
            
    },
    
    buscarPorPerfilID: async (perfilID) => {
       try {
        return await notificacaoModel.find({ 
          $or: [{ remetente : perfilID}, {destinatario : perfilID}] 
        });
       } catch (error) {
        throw { message: error.message , status: 500}
       }
    },

    cadastrar : async (notificacao) => {
       try {
         return await notificacaoModel.create(notificacao);
       } catch (error) {
         throw { message: error.message , status: 500}
       }
    },

    marcarLida: async (id) => {
      try {
        let notificacaoLida = await notificacaoModel.findOne({ _id : id })
        notificacaoLida.lida = true;
        return await notificacaoModel.updateOne({ _id : id }, notificacaoLida)
      } catch (error) {
        throw { message: error.message , status: 500}
      }       
    }

}