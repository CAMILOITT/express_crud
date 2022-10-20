import ClassCharacter from './../models/ClassCharacters.js';

export const getClassCharacters = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getClassCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const classCharacter = await ClassCharacter.findOne({ where: { id } });
    res.json(classCharacter);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateClassCharacters = async (req, res) => {
  const { id } = req.params;
  try {
    const classCharacter = await ClassCharacter.finOne({
      where: { id },
    });
    ClassCharacter.set(req.body);
    await ClassCharacter.save();
    return res.ClassCharacter.json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteClassCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ClassCharacter.destroyer({ where: { id } });
    console.log(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createClassCharacters = async (req, res) => {
  try {
    const { name_class_character, description_class_character, power, life } =
      req.body;
    const newClassCharacter = await ClassCharacter.create(
      name_class_character,
      description_class_character,
      power,
      life
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
