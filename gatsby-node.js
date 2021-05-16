/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const res = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `);
    console.info("resultado: ")

    if(res. error){
        reporter.panic('No hubo resultados'. res.errors)
    }
    const habitaciones = res.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(habitacion =>{
        actions.createPage({
            path:habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug:habitacion.slug,
            }
        })
    })
  console.info(res)
}
