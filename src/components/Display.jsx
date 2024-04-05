import { useEffect, useState } from "react";
import { PutFormulario } from "./PutFormulario";
import { GetFormulario } from "./GetFormulario";
import { PostFormulario } from "./PostFormulario";
import { DeleteFormulario } from "./DeleteFormulario";

export const Display = () => {
  const [formulario, setFormulario] = useState(0);

  useEffect(() => {
    console.log("Usando useEffect");
  }, [formulario]);

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
        <PutFormulario />;
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
        <GetFormulario />;
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
        <PostFormulario />;
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
        <DeleteFormulario />;
      </>
    );
  }
};
