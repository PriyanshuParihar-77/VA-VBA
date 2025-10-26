
import { LightningElement, track } from 'lwc';

// Renamed class to Va_claims, as requested for this component.
export default class Va_claims extends LightningElement {
    @track activeTab = 'all';

    // Define base and active CSS classes for the custom buttons
    PILL_CLASS = 'pill-segment';
    ACTIVE_CLASS = 'active';

    handleTabClick(event) {
        this.activeTab = event.currentTarget.dataset.value; 
        console.log('Active Tab changed to: ' + this.activeTab);
    }

    // --- UPDATED GETTERS for custom button CSS classes ---
    // These return the full CSS class string based on the active tab state.
    
    get allClass() {
        return this.activeTab === 'all' ? `${this.PILL_CLASS} ${this.ACTIVE_CLASS}` : this.PILL_CLASS;
    }
    get inProgressClass() {
        return this.activeTab === 'inprogress' ? `${this.PILL_CLASS} ${this.ACTIVE_CLASS}` : this.PILL_CLASS;
    }
    get activeClass() {
        return this.activeTab === 'active' ? `${this.PILL_CLASS} ${this.ACTIVE_CLASS}` : this.PILL_CLASS;
    }
    get completedClass() {
        return this.activeTab === 'completed' ? `${this.PILL_CLASS} ${this.ACTIVE_CLASS}` : this.PILL_CLASS;
    }
    // --- END UPDATED GETTERS ---


    get showClaimsInProgress() {
        return this.activeTab === 'all' || this.activeTab === 'inprogress';
    }
    get showActiveClaims() {
        return this.activeTab === 'all' || this.activeTab === 'active';
    }
    get showCompletedClaims() {
        return this.activeTab === 'all' || this.activeTab === 'completed';
    }

    @track claimsInProgress = [
        { id: '1', type: 'Compensation', number: 'VA001456', date: 'Feb 18, 2025', status: 'Not Submitted' },
        { id: '2', type: 'Compensation', number: 'VA001457', date: 'Feb 18, 2025', status: 'Not Submitted' },
        { id: '3', type: 'Compensation', number: 'VA001458', date: 'Feb 18, 2025', status: 'Not Submitted' },
        { id: '4', type: 'Compensation', number: 'VA001459', date: 'Feb 18, 2025', status: 'Not Submitted' }
    ];

    @track activeClaims = [
        { id: '5', type: 'Compensation', number: 'VA001460', date: 'Feb 18, 2025', status: 'Evidence gathering, review and decision' },
        { id: '6', type: 'Compensation', number: 'VA001461', date: 'Feb 18, 2025', status: 'Initial Review' },
        { id: '7', type: 'Compensation', number: 'VA001462', date: 'Feb 18, 2025', status: 'Initial Review' },
        { id: '8', type: 'Compensation', number: 'VA001463', date: 'Feb 18, 2025', status: 'Initial Review' },
    ];

    @track completedClaims = [
        { id: '9', type: 'Disability', number: 'VA001464', date: 'Feb 18, 2025', status: 'Completed' },
        { id: '10', type: 'Benefits', number: 'VA001465', date: 'Feb 18, 2025', status: 'Completed' }
    ];

    handleNewClaimClick() {
        console.log('Navigate to New Claim page...');
    }

    handleSearchChange(event) {
        console.log('Search Query: ' + event.target.value);
    }

    handleContinueClaim(event) {
        console.log('Continue Claim ID: ' + event.currentTarget.dataset.claimId);
    }

    handleViewClaimDetails(event) {
        console.log('View Details for Claim ID: ' + event.currentTarget.dataset.claimId);
    }

    handleFileIncrease(event) {
        console.log('File for Claim Increase for ID: ' + event.currentTarget.dataset.claimId);
    }

    handleAppealClaim(event) {
        console.log('Appeal Claim for ID: ' + event.currentTarget.dataset.claimId);
    }

    handleHighLevelReview(event) {
        console.log('High Level Review for ID: ' + event.currentTarget.dataset.claimId);
    }
}
