import  {request, response}  from "express";


export const usuariosGet = (req = request, res = response) => {

    const query = req.query
    
    res.status(201).json({
        msg:'get API - Controlador!',
        query
        
    })
  };

export const usuariosPost =  (req, res) => {
    const body = req.body;

    res.json({
        msg:'post API - Desde Controller !',
        body
        
    })
  };


export const usuariosPut = (req, res) => {

    const { id } = req.params;

       return res.status(200).json({
            msg:'put API - desde controller!',
            id
            
        })

    

  };

export const usuariosDelete =  (req, res) => {
    res.json({
        msg:'delete API - controller!',
        
    })
  };
  
export const usuariosPatch = (req, res) => {
    res.json({
        msg:'Patch API - desde Controller!',
        
    })
  }


