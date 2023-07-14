const {
  allTemasController,
  createTema,
  updateTemaController,
  getTemaByIdController,
  deletTemaController,
} = require("../Controller/temasController");

const postTemasHandler = async (req, res) => {
  try {
    const { titulo, descriccion, imagenPrincipal } = req.body;

    const newTema = await createTema(titulo, descriccion, imagenPrincipal);

    res.status(201).json(newTema);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};
////////////////////////////////////////////

const getTemasHandler = async (req, res) => {
  try {
    const data = await allTemasController();
    res.status(200).json(data);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

/////////////////////////////////////////
const putTemaHandler = async (req, res) => {
  try {
    const {
      id,
      titulo,
      descriccion,
      subtemas,
      guiasExternas,
      imagenPrincipal,
    } = req.body;
    const putTema = await updateTemaController(
      id,
      titulo,
      descriccion,
      subtemas,
      guiasExternas,
      imagenPrincipal
    );

    res.status(200).json(putTema);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////////////

const deletTemaHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const temaBorrado = await deletTemaController(id);
    res.status(200).json(temaBorrado);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////////////

const getTemaByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await getTemaByIdController(id);
    res.status(200).json(dog);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTemasHandler,
  postTemasHandler,
  putTemaHandler,
  deletTemaHandler,
  getTemaByIdHandler,
};
