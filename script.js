const studies = [
    {
        name: "Insulin producing cells",
        category: "healthy",
        gender: "male female",
        minAge: 25,
        maxAge: 60,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/insulin.jpg"
    },

    {
        name: "Is IV beauty therapy efficient?",
        category: "healthy",
        gender: "female",
        minAge: 25,
        maxAge: 65,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/iv.jpg"
    },

    {
        name: "The science of Placebo",
        category: "healthy",
        gender: "male female",
        minAge: 20,
        maxAge: 80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/placebo.jpg"
    },

    {
        name: "Differences between the immune systems of women and men",
        category: "immunity healthy",
        gender: "male female",
        minAge: 18,
        maxAge: 70,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/immune1.jpg"
    },

    {
        name: "Could the immune system be the key to Alzheimer's disease?",
        category: "immunity brain",
        gender: "male female",
        minAge: 40,
        maxAge: 90,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/immune2.jpg"
    },

    {
        name: "Covid-19 and the immune system",
        category: "immunity",
        gender: "male female",
        minAge: 15,
        maxAge: 90,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/immune3.jpg"
    },


    {
        name: "Poor sleep association with increased cardiovascular risk",
        category: "healthy cvs",
        gender: "male female",
        minAge: 12,
        maxAge: 40,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/sleep.jpg"
    },

    {
        name: "How street noise affects heart functions?",
        category: "healthy cvs",
        gender: "male female",
        minAge: 21,
        maxAge: 60,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/streetnoise.jpg"
    },

    {
        name: "Improving cardiometabolic health with diet and physical activity",
        category: "cms exercise",
        gender: "male female",
        minAge: 25,
        maxAge: 60,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/cms_exercise.jpg"
    },
    {
        name: "Sex differences in cardiometabolic disorders",
        category: "cms metabolism",
        gender: "male female",
        minAge: 18,
        maxAge: 65,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/cms_gender.jpg"
    },

    {
        name: "Neurogenesis and exercise: past and future directions",
        category: "exercise brain",
        gender: "male female",
        minAge: 18,
        maxAge: 50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/neurogenesis.jpg"
    },

    {
        name: "Personalized sport and exercise nutrition",
        category: "exercise metabolism",
        gender: "male female",
        minAge: 25,
        maxAge: 50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/nutr_exer.jpg"
    },

    {
        name: "Young children and tablets: A systematic review of effects on learning and development",
        category: "children healthy",
        gender: "male female",
        minAge: 3,
        maxAge: 12,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/tablets.jpg"
    }, 

    {
        name: "All children thrive: integration of nutrition and early childhood development",
        category: "children healthy",
        gender: "male female",
        minAge: 2,
        maxAge: 7,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore sunt expedita harum ad illo repellendus hic explicabo exercitationem asperiores repudiandae magni blanditiis at! Dolore expedita nam modi accusamus pariatur maiores repellat nesciunt eaque ducimus hic, cumque tempora reiciendis, voluptate debitis quibusdam eligendi veritatis laborum quisquam. Quis corporis unde animi.",
        img:"img/ch_nutrition.jpg"
    },
]

function btnSubmit() {
    //getting the input field data from questionaire
    let getAgeInput = document.getElementById("form-age").value;
    let getGenderInput = document.getElementById("form-gender").value;
    let getStatusInput = document.getElementById("form-status").value;
    event.preventDefault();

    //creating an array that will contain all the studies, which passed specific set of conditions
    let filteredStudiesList = studies.filter(study => { return study.maxAge >= getAgeInput && study.minAge <= getAgeInput && study.gender.includes(getGenderInput) && study.category.includes(getStatusInput) });
    //console.log(filteredStudiesList) Yeah! It's working! :) 

    //next - use the filtered study objects to pass to the web page
        //select the HTML element using #show-studies that will contain the filtered studies
        let showStudies = document.getElementById('show-studies');
        let displayStudies=filteredStudiesList.map(
            function(studyItem) {
                return `<a href="#"><h4>${studyItem.name}</h4><img src=${studyItem.img} style="width:250px"><br><br><p>Description: ${studyItem.desc} </p><a><hr>`
            }
        );
        displayStudies=displayStudies.join("");
        showStudies.innerHTML=displayStudies;
}

const hamburger=document.querySelector(".hamburger")
const navMenu=document.querySelector(".nav-menu")
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})
