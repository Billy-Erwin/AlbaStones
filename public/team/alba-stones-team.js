import { getTeamMembers, getPhotoUrl} from "../js/databaseUtilities.js";

class AlbaStonesTeam extends HTMLElement {

    async connectedCallback() {
        this.innerHTML = `
            <section>
                <div class="container">
                    <div id="teamSectionRow" class="row"></div>
                </div>
            </section>`;

        const teamMemberRow = document.getElementById('teamSectionRow');
        let teamMembers = await getTeamMembers();
        for (let teamMember of teamMembers) {
            let photoUrl = await getPhotoUrl(teamMember.photo);
            teamMember.photoUrl = photoUrl;
            let newTeamMember = new TeamMember();
            newTeamMember.setTeamMemberDetail(teamMember);
            teamMemberRow.appendChild(newTeamMember);
        }
    }

}

customElements.define('alba-stones-team', AlbaStonesTeam);
