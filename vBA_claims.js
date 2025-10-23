import { LightningElement, track } from 'lwc';

export default class VBAClaims extends LightningElement {
    @track activeTab = 'all';

    handleTabClick(event) {
        this.activeTab = event.target.dataset.value;
    }

    get allVariant() {
        return this.activeTab === 'all' ? 'brand' : 'neutral';
    }
    get inProgressVariant() {
        return this.activeTab === 'inprogress' ? 'brand' : 'neutral';
    }
    get activeVariant() {
        return this.activeTab === 'active' ? 'brand' : 'neutral';
    }
    get completedVariant() {
        return this.activeTab === 'completed' ? 'brand' : 'neutral';
    }

    @track claimsInProgress = [
        { id: 1, type: 'Compensation', number: 'VA001456', date: 'Feb 18, 2025', status: 'Not Submitted' },
        { id: 2, type: 'Compensation', number: 'VA001457', date: 'Feb 18, 2025', status: 'Not Submitted' },
        { id: 3, type: 'Compensation', number: 'VA001458', date: 'Feb 18, 2025', status: 'Not Submitted' },
        { id: 4, type: 'Compensation', number: 'VA001459', date: 'Feb 18, 2025', status: 'Not Submitted' }
    ];
    
    @track activeClaims = [
        { id: 5, type: 'Compensation', number: 'VA001460', date: 'Feb 18, 2025', status: 'Evidence gathering, review and decision' },
        { id: 6, type: 'Compensation', number: 'VA001461', date: 'Feb 18, 2025', status: 'Not Submitted' },
        { id: 7, type: 'Compensation', number: 'VA001462', date: 'Feb 18, 2025', status: 'Initial Review' },
        { id: 8, type: 'Compensation', number: 'VA001463', date: 'Feb 18, 2025', status: 'Not Submitted' },
        { id: 9, type: 'Compensation', number: 'VA001464', date: 'Feb 18, 2025', status: 'Initial Review' }
    ];
    
    @track completedClaims = [
        { id: 10, type: 'Disability', number: 'VA001465', date: 'Feb 18, 2025', status: 'Completed' },
        { id: 11, type: 'Benefits', number: 'VA001466', date: 'Feb 18, 2025', status: 'Completed' }
    ];

    get showClaimsInProgress() {
        return this.activeTab === 'all' || this.activeTab === 'inprogress';
    }
    get showActiveClaims() {
        return this.activeTab === 'all' || this.activeTab === 'active';
    }
    get showCompletedClaims() {
        return this.activeTab === 'all' || this.activeTab === 'completed';
    }
}
