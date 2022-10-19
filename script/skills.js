// THIS FILE IS CONECTED IN pages.js
// THIS FILE IS CONECTED IN pages.js
// THIS FILE IS CONECTED IN pages.js

function getSkills(place, url) {
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        res.forEach(skill => {
            place.insertAdjacentHTML('beforeend', `
                <li>
                    <p class="skills_in_left_line">${skill.skill}</p>
                    <div class="gray_line"><div class="green_line" style="width: ${skill.level}px;"></div></div>
                </li>
            `);
        });
    });
}

export function addSkills() {
    getSkills(document.querySelector('#tech_skills'), 'script/JSON/skills-TS.json');
    getSkills(document.querySelector('#soft_skills'), 'script/JSON/skills-SS.json');
}