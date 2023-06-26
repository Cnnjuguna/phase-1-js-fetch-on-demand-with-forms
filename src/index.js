const init = () => {

  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputField = document.querySelector('input#searchByID');
    const id = inputField.value;
    console.log(id);


            const response = await fetch(`http://localhost:3000/movies/${id}`);

            const data = await response.json()
          

        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.textContent = data.title;
        summary.textContent = data.summary;

        
    });
        


}
  


document.addEventListener('DOMContentLoaded', init);