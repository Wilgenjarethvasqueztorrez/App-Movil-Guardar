import { saveClass, getClass, onSnapshot, collection, db, getClas, updateClas } from './firebase.js'

const classForm = document.getElementById('class-form');
const classContainer = document.getElementById('class-container');

let editStatus = false;
let id = '';

window.addEventListener('DOMContentLoaded', async () => {
    onSnapshot(collection(db, "class"), (querySnapshot) => {
        classContainer.innerHTML = '';

        querySnapshot.forEach(doc => {
            const clas = doc.data();
            classContainer.innerHTML += `
             <div class="card  card-body mt-2 border-primary">
              <h3 class="h5">${clas.name}</h3>
              <h3 class="h5">${clas.time}</h3>
              <h3 class="h5">${clas.section}</h3>
              <div>
               <button class='btn btn-primary btn-edit' data-id="${doc.id}">Edit</button>
              </div>
             </div>
            `;

        });




        const btnsEdit = classContainer.querySelectorAll('.btn-edit')
        btnsEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await getClas(e.target.dataset.id)
                const clas = doc.data()

                classForm['class-name'].value = clas.name
                classForm['class-time'].value = clas.time
                classForm['class-section'].value = clas.section

                editStatus = true;
                id = doc.id

                classForm['btn-class-save'].innerText = 'Update'
            })
        })

    });
});





classForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = classForm['class-name']
    const time = classForm['class-time']
    const section = classForm['class-section']

    if (!editStatus) {
        // saveClass(name.value, time.value, section.value);
    } else {
        updateClas(id,
            {
                name: name.value,
                time: time.value,
                section: section.value,
            });

        editStatus = false;
    }

    classForm.reset();

})
