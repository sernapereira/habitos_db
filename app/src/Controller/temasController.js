const { Tema, Subtemas } = require("../db");

//////////////////////////////////////////////
const createTema = async (titulo, descriccion, imagenPrincipal) => {
  const create = await Tema.create({
    titulo,
    descriccion,
    imagenPrincipal,
  });

  return { message: "Tema creado con exito ✔", status: 201 };
};

/////////////////////////////////////////////

const allTemasController = async () => {
  const data = await Tema.findAll({
    include: {
      model: Subtemas, // Incluye el modelo Subtemas
      through: {
        attributes: [], // No incluir atributos adicionales de la tabla intermedia
      },
    },
    order: [["id", "ASC"]], // Ordena los temas por su campo id en orden ascendente
  });

  return data;
};

/////////////////////////////////////////////

const updateTemaController = async (
  id,
  titulo,
  descriccion,
  subtemas,
  guiasExternas,
  imagenPrincipal
) => {
  await Tema.update(
    {
      titulo,
      descriccion,
      subtemas,
      guiasExternas,
      imagenPrincipal,
    },
    {
      where: {
        id: id,
      },
    }
  );

  const tema = await Tema.findByPk(id);
  return tema;
};

/////////////////////////////////////////////

const deletTemaController = async (id) => {
  const temaBorrado = await Tema.findByPk(id);

  await Tema.destroy({
    where: {
      id: id,
    },
    force: true,
  });

  return { message: "Tema borrado", codigo: 200, temaBorrado };
};

/////////////////////////////////////

const getTemaByIdController = async (id) => {
  const tema = await Tema.findByPk(id, {
    include: {
      model: Subtemas, // Incluye el modelo Subtemas
      through: {
        attributes: [], // No incluir atributos adicionales de la tabla intermedia
      },
      order: [["id", "ASC"]], // Ordena los subtemas por su campo id en orden ascendente
    },
  });

  return tema ? tema : "❌ Tema no encontrado";
};

module.exports = {
  allTemasController,
  createTema,
  updateTemaController,
  deletTemaController,
  getTemaByIdController,
};
