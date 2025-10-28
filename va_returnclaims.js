import { LightningElement } from 'lwc';

export default class VaClaimDashboard extends LightningElement {
    steps = [
        { id: 1, title: "Veteran’s Identification Information", desc: "A short description of the step" },
        { id: 2, title: "Change of Address", desc: "A short description of the step" },
        { id: 3, title: "Homeless Information", desc: "A short description of the step" },
        { id: 4, title: "Exposure Information", desc: "A short description of the step" },
        { id: 5, title: "Claim Information", desc: "A short description of the step" },
        { id: 6, title: "Service Information", desc: "A short description of the step" },
        { id: 7, title: "Service Pay", desc: "A short description of the step" },
        { id: 8, title: "Direct Deposit Information", desc: "A short description of the step" },
        { id: 9, title: "Claim Certificate and Signature", desc: "A short description of the step" },
        { id: 10, title: "Supporting Evidence", desc: "A short description of the step" }
    ];

    handleReturnToClaims() {
        // Placeholder logic for navigation. 
        console.log('Navigating back to Claims List Page...');
    }
}