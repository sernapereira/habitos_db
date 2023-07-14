const {
  createSubTema,
  getSubTemaController,
  putSubTemaControll,
  deletSubtTemaController,
} = require("../Controller/subTemaController");

const postSubTemasHandler = async (req, res) => {
  try {
    const { id, subTitulo, subdescripcion, codigo } = req.body;

    const newSubTema = await createSubTema(
      id,
      subTitulo,
      subdescripcion,
      codigo
    );

    res.status(201).json(newSubTema);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

const getSubTemaHandler = async (req, res) => {
  try {
    const data = await getSubTemaController();
    res.status(200).json(data);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

const putSubTemaHandler = async (req, res) => {
  const { id, subTitulo, subdescripcion, codigo } = req.body;
  try {
    const data = await putSubTemaControll(
      id,
      subTitulo,
      subdescripcion,
      codigo
    );
    res.status(200).json(data);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

const deletSubtTemaHandler = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const subtemaBorrado = await deletSubtTemaController(id);
    res.status(200).json(subtemaBorrado);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postSubTemasHandler,
  getSubTemaHandler,
  putSubTemaHandler,
  deletSubtTemaHandler,
};
