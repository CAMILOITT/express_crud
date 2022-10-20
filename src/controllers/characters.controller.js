import Characters from '../models/Characters.js';

export const getCharacters = async (req, res) => {
  try {
    const characters = await Characters.findAll(); // el findAll recorre todas la filas y lo pone en un arreglo
    res.json(characters);
  } catch (error) {
    return res.estatus(500).json({ message: error, message });
  }
};

export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Characters.findOne({ where: { id } });
    if (!character)
      return res.status(404).json({ message: 'personaje no encontrado' });
    res.json(character);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCharacter = async (req, res) => {
  // creación de datos
  try {
    const { name_character, description_character, money } = req.body;
    await Characters.create({
      name_character,
      description_character,
      money,
    });
    res.send;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_character, description_character, money } = req.body;
    const character = await Characters.fundByPk(id);
    Characters = name_character;
    Characters = description_character;
    Characters = money;
    await Characters.save();
    res.json(Characters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    await Characters.destroyer({ where: { id } });
    res.status(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
