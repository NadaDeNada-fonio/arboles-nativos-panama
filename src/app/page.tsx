"use client";
import fondo from "./../assets/fondo3.jpeg";
import nanceIMG from "./../assets/arbol/nance.png";
import caimitoIMG from "./../assets/arbol/caimito.png";
import corotuIMG from "./../assets/arbol/corotu.png";
import maranon from "./../assets/arbol/maranon.png";
import cedro_amargo from "./../assets/arbol/cedro_amargo.png";
import guayacan2 from "./../assets/arbol/guayacan2.png";
import caoba from "./../assets/arbol/caoba.png";
import roble from "./../assets/arbol/roble.png";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import dataArbol from "./data";
import caimito_extra from "./../assets/descrip/caimito.png";
import corotu_extra from "./../assets/descrip/corotu.png";
import manaron_extra from "./../assets/descrip/manaron.png";
import cedro_extra from "./../assets/descrip/cedro.png";
import caoba_extra from "./../assets/descrip/caoba.png";
import guayacan_extra from "./../assets/descrip/guayacan.png";
import roble_extra from "./../assets/descrip/roble.png";
import nance_extra from "./../assets/descrip/nance.png";

export default function Home() {
  const [data, setData] = useState<any>(null);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "80px",
          fontWeight: "bold",
          position: "fixed",
          color: "black",
          top: "30px",
          left: "20%",
        }}
      >
        Árboles nativos de Panamá
      </h1>
      <div
        style={{
          backgroundImage: `url(${fondo.src})`,
          minWidth: "165%",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Image
          src={nanceIMG}
          width="450"
          height="350"
          alt="Nance"
          style={{ top: "50px", position: "relative" }}
          onClick={() => {
            setData(dataArbol["nance"]);
          }}
        />
        <Image
          src={caimitoIMG}
          width="300"
          height="450"
          alt="caimito"
          style={{ top: "60px", position: "relative", marginRight: "50px" }}
          onClick={() => {
            setData(dataArbol["Caimito"]);
          }}
        />
        <Image
          src={corotuIMG}
          width="350"
          height="400"
          alt="corotuIMG"
          onClick={() => {
            setData(dataArbol["corotu"]);
          }}
        />
        <Image
          src={maranon}
          width="350"
          height="400"
          alt="maranon"
          style={{ top: "60px", position: "relative" }}
          onClick={() => {
            setData(dataArbol["manaron"]);
          }}
        />
        <Image
          src={cedro_amargo}
          width="350"
          height="400"
          alt="cedro_amargo"
          onClick={() => {
            setData(dataArbol["cedro_amargo"]);
          }}
        />
        <Image
          src={caoba}
          width="350"
          height="400"
          alt="caoba"
          style={{ top: "50px", position: "relative" }}
          onClick={() => {
            setData(dataArbol["caoba"]);
          }}
        />
        <Image
          src={guayacan2}
          width="350"
          height="400"
          alt="guayacan2"
          style={{ top: "50px", position: "relative" }}
          onClick={() => {
            setData(dataArbol["guayacan"]);
          }}
        />
        <Image
          src={roble}
          width="350"
          height="400"
          alt="roble"
          onClick={() => {
            setData(dataArbol["roble"]);
          }}
        />
      </div>

      <h5
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          position: "fixed",
          color: "white",
          bottom: "30px",
          left: "27%",
        }}
      >
        {"<< Desliza horizontalmente para ver más árboles >>"}
      </h5>

      <Modal
        size="lg"
        show={data !== null}
        onHide={() => {
          setData(null);
        }}
      >
        {data !== null && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                Nombre cientifico: {data["nombreCientifico"]}
              </Modal.Title>
            </Modal.Header>
            <img
              src={data["imagenURL"]}
              alt="img"
              style={{
                width: "auto",
                height: "400px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Modal.Body>
              <h5>Familia: </h5>
              <p>{data["familia"]}</p>
              <h5>Nombre común: </h5>
              <p>{data["nombreComun"]}</p>
              <h5>Descripción: </h5>
              <p>{data["descripcion"]}</p>
              <h5>Recomendación: </h5>
              <p>{data["recomendacion"]}</p>
              {data["espaciado"] && (
                <>
                  <h5>Espaciado: </h5>
                  <p>{data["espaciado"]}</p>
                </>
              )}
              <h5>Usos: </h5>
              <p>{data["uso"]}</p>

              {data["extra"] && (
                <Image
                  src={
                    data["extra"] === "Caimito"
                      ? caimito_extra
                      : data["extra"] === "corotu"
                      ? corotu_extra
                      : data["extra"] === "manaron"
                      ? manaron_extra
                      : data["extra"] === "cedro"
                      ? cedro_extra
                      : data["extra"] === "caoba"
                      ? caoba_extra
                      : data["extra"] === "guayacan"
                      ? guayacan_extra
                      : data["extra"] === "roble"
                      ? roble_extra
                      : nance_extra
                  }
                  alt="img"
                  width={400}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              )}
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
}
