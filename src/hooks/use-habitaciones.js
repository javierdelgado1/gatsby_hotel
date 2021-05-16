import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const useHabitaciones = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)
  return data.allDatoCmsHabitacion.nodes.map((h) =>({
      titulo:h.titulo,
      id:h.id,
      contenido: h.contenido,
      slug: h.slug,
      imagen: h.imagen
  }))
}

export default useHabitaciones
