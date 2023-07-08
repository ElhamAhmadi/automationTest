import {occupationalIdentityElements} from "../elements/occupationalIdentityElements";
import {sharedElements} from "../elements/sharedElement";

let occupationalIdentityElemnts = new occupationalIdentityElements()
let sharedElemnts = new sharedElements()

export class occupationalIdentityPage {


    clickOnCancelBtn(){
        return cy.get(sharedElemnts.SPAN).contains(' لغو و بازگشت ').click()
    }
    clickOnRegisterBtn(){

        return cy.get(sharedElemnts.SPAN).contains(' ثبت  ').click()
    }
    openRiskManagementLink(){
        return cy.get(sharedElemnts.SPAN).contains('مدیریت ریسک').click({force: true})
        // ('مدیریت ریسک', {timeout: 2000})
    }
    openIoccupationalIdentityLink(){
        return cy.get(sharedElemnts.SPAN).contains(' شناسنامه شغلی').click({force: true})
    }
    createIoccupationalIdentity(){
        return cy.get(sharedElemnts.SPAN,{timeout:2000}).contains('ثبت شناسنامه شغلی').click()
    }

     validateRegisterBtn(){

        return cy.get(occupationalIdentityElemnts.REGISTER_BTN).should('have.attr','ng-reflect-disabled', 'true')
     }

    clickOnConfirmBtn(){
        return cy.get(sharedElemnts.SPAN).contains(' بلی ').click({force: true})
    }

    visiableGrid(){

    return cy.get(sharedElemnts.GRID).should('be.visible')
    }
}

