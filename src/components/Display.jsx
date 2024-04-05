import { useEffect, useState } from "react";
import { PutFormulario } from "./PutFormulario";
import { GetFormulario } from "./GetFormulario";
import { PostFormulario } from "./PostFormulario";
import { DeleteFormulario } from "./DeleteFormulario";

const urlBase = "http://localhost:9000/api/"

export const Display = () => {
  const [formulario, setFormulario] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const [recibo, setRecibo] = useState(null);
  const [envio, setEnvio] = useState(null);

  useEffect(() => {

  }, [formulario]);
  useEffect(() => {
    
  }, [mensaje]);
  useEffect(() => {

  }, [recibo]);
  useEffect(() => {

  }, [envio]);


async function onHandleDisplay ({enviado}) {
    console.log(`Entre a handle con este valor ${enviado}`)
    
    if (formulario == 0) {//PUT--------------------------
        setEnvio({enviado})
        let requestOptions = {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({envio})//falta stringlify
        }
       await fetch(`${urlBase}put:${envio.id}`,requestOptions)
        .then((response)=> response.json())
        .then((response) => {
              setMensaje(response) 
        })
    }
    if (formulario == 1) {//GET--------------------------
        //////////////Puede ir un if para rectificar
        let requestOptions = {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        }
        
        await fetch(`${urlBase}get`,requestOptions)
        .then((response)=> response.json())
        .then((response) => {
              setRecibo(response) 
        })
    }
    if (formulario == 2) {//POST--------------------------
        setEnvio({enviado})
        let requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({envio})
        }
        
        
        
        await fetch(`${urlBase}post`,requestOptions)
        .then((response)=> response.json())
        .then((response) => {
              setMensaje(response) 
        })
    }
    if (formulario == 3) {//DELETE--------------------------
        setEnvio({enviado})
        let requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({envio})
        }
        
        
        await fetch(`${urlBase}delete:${envio.id}`,requestOptions)
        .then((response)=> response.json())
        .then((response) => {
              setEnvio(response) 
        })
    }
  }

  

  if (formulario == 0) {
    return (
      <>
        <button
          onClick={() => {
            setFormulario(0);
          }}
        >
          PUT
        </button>
        <button
          onClick={() => {
            setFormulario(1);
          }}
        >
          GET
        </button>
        <button
          onClick={() => {
            setFormulario(2);
          }}
        >
          POST
        </button>
        <button
          onClick={() => {
            setFormulario(3);
          }}
        >
          DELETE
        </button>
        <PutFormulario handleDisplay={onHandleDisplay} />;
        <h3>{mensaje}</h3>
      </>
    );
  }
  if (formulario == 1) {
    return (
      <>
        <button
          onClick={() => {
            setFormulario(0);
          }}
        >
          PUT
        </button>
        <button
          onClick={() => {
            setFormulario(1);
          }}
        >
          GET
        </button>
        <button
          onClick={() => {
            setFormulario(2);
          }}
        >
          POST
        </button>
        <button
          onClick={() => {
            setFormulario(3);
          }}
        >
          DELETE
        </button>
        <GetFormulario handleDisplay={onHandleDisplay}/>;
        <p>{recibo}</p>
        {console.log({recibo})}
      </>
    );
  }
  if (formulario == 2) {
    return (
      <>
        <button
          onClick={() => {
            setFormulario(0);
          }}
        >
          PUT
        </button>
        <button
          onClick={() => {
            setFormulario(1);
          }}
        >
          GET
        </button>
        <button
          onClick={() => {
            setFormulario(2);
          }}
        >
          POST
        </button>
        <button
          onClick={() => {
            setFormulario(3);
          }}
        >
          DELETE
        </button>
        <PostFormulario handleDisplay={onHandleDisplay}/>;
        <h3>{mensaje}</h3>
      </>
    );
  }
  if (formulario == 3) {
    return (
      <>
        <button
          onClick={() => {
            setFormulario(0);
          }}
        >
          PUT
        </button>
        <button
          onClick={() => {
            setFormulario(1);
          }}
        >
          GET
        </button>
        <button
          onClick={() => {
            setFormulario(2);
          }}
        >
          POST
        </button>
        <button
          onClick={() => {
            setFormulario(3);
          }}
        >
          DELETE
        </button>
        <DeleteFormulario handleDisplay={onHandleDisplay}/>;
      </>
    );
  }
};
