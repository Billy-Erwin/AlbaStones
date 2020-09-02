import { getTeamMembers } from "../js/databaseUtilities.js";

class AlbaStonesTeam extends HTMLElement {

    async connectedCallback() {
        this.innerHTML = `
            <section>
                <div class="container">
                    <div id="teamSectionRow" class="row"></div>
                </div>
            </section>`;

        const aRow = document.getElementById('teamSectionRow');
        let teamMembers = await getTeamMembers();
        for (let teamMember of teamMembers) {
            let aNewOne = new TeamMember();
            aNewOne.setIt(teamMember);
            aRow.appendChild(aNewOne);
        }
    }

}

customElements.define('alba-stones-team', AlbaStonesTeam);
