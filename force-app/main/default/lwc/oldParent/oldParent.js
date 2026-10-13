import { LightningElement, api } from 'lwc';

export default class OldParent extends LightningElement {
    @api parentValue = 0;
    controllerAActive = false;


    // Must catch the event and update local state
    handleIncrement(event) {
        this.parentValue = event.detail.newValue;
    }

    handleComponentToggle(event) {
        this.controllerAActive = !this.controllerAActive;
        console.log('Controller active:', this.controllerAActive);
    }
}