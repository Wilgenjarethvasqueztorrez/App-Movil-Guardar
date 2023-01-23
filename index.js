import { saveClass, getClass, onSnapshot, collection, db } from './firebase.js'

const classForm = document.getElementById('class-form')
const classContainer = document.getElementById('class-container')

window.addEventListener('DOMContentLoaded', async () => {
    onSnapshot(collection(db, "class"), (querySnapshot) => {
        let html = "";

        querySnapshot.forEach(doc => {
            const clas = doc.data();
            html += `
             <div>
              <h3>${clas.name}</h3>
              <h3>${clas.time}</h3>
              <h3>${clas.section}</h3>
             </div>
            `;

        });

        classContainer.innerHTML = html;


        const btnsEdit = classContainer.querySelectorAll('.btn-edit')
        btnsEdit.forEach(btn => {
            btn.addEventListener('click', e => {
                console.log(e.target.dataset.id)
            })
        })

    });
});





classForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = classForm['class-name']
    const time = classForm['class-time']
    const section = classForm['class-section']

    saveClass(name.value, time.value, section.value)

    classForm.reset()

})
