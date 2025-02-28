import React, { useState } from "react"

import { ResponsableClusterObrasEnergia } from "../data/TelefonosData"
import Model from "../components/Model"

const Prueba = () => {
  const [model, setModel] = useState(false)
  const [tempData, setTempdata] = useState([])

  const getData = (cargo, nombre, mail) => {
    let tempData = [cargo, nombre, mail]
    console.warn(tempData)
    setTempdata(item => [1, ...tempData])
    return setModel(true)
  }
  return (
    <>
      <section>
        <div>
          {ResponsableClusterObrasEnergia.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{item.cargo}</h5>
                  <p className="card-text">{item.nombre}</p>
                  <p className="card-text">{item.mail}</p>
                  <a
                    className="btn btn-primary"
                    onClick={() => getData(item.cargo, item.nombre, item.mail)}
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {model && (
        <Model
          cargo={tempData[1]}
          nombre={tempData[2]}
          mail={tempData[3]}
          model={model}
          hide={() => {
            setModel(false)
          }}
        />
      )}
    </>
  )
}

export default Prueba
