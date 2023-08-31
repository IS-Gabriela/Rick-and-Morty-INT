import Card from './Card/Card'; 

export default function Cards({characters, onClose}) {
   return (
      <div>
          {
            characters.map(({id, name, status, species, gener, origin, image}) => {
              return(
                <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gener={gener}
                  image={image}
                  origin={origin.name}
                  onClose={onClose}
                />
              )
            })
          }
      </div>
   )
}
