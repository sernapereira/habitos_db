const { Subtemas, Tema } = require("../db");

const createSubTema = async (id, subTitulo, subdescripcion, codigo) => {
  const tema = await Tema.findByPk(id);
  let subtema = await Subtemas.create({
    subTitulo,
    subdescripcion,
    codigo,
  });

  await tema.addSubtemas(subtema);

  return { message: "SubTema creado con exito ✔", status: 201 };
};

const getSubTemaController = async () => {
  let data = await Subtemas.findAll();
  return data;
};

const putSubTemaControll = async (id, subTitulo, subdescripcion, codigo) => {
  await Subtemas.update(
    {
      subTitulo,
      subdescripcion,
      codigo,
    },
    {
      where: {
        id: id,
      },
    }
  );
  const subtema = await Subtemas.findByPk(id);
  return { message: "SubTema Actualizado con exito ✔", status: 201, subtema };
};

const deletSubtTemaController = async (id) => {
  const temaBorrado = await Subtemas.findByPk(id);

  await Subtemas.destroy({
    where: {
      id: id,
    },
    force: true,
  });

  return { message: "SubTema borrado", codigo: 200, temaBorrado };
};

module.exports = {
  createSubTema,
  getSubTemaController,
  putSubTemaControll,
  deletSubtTemaController,
};
