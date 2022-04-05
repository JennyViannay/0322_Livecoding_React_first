const CardCharacter = ({ character }) => {
  console.log(character);
  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt="" />
    </div>
  );
};

export default CardCharacter;
