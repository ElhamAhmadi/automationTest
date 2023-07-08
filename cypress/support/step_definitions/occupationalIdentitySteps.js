import {Given, When, Then, DataTable, Before, After} from '@badeball/cypress-cucumber-preprocessor'
import {occupationalIdentityPage} from "../../e2e/Pages/occupationalIdentityPage";



let occupationalIdentity = new occupationalIdentityPage()


Given('user create occupational identity', () => {
    occupationalIdentity.createIoccupationalIdentity()
})

Then('user see disable Register button', () => {
    occupationalIdentity.validateRegisterBtn()
})

Then('user cancel form', () => {
    occupationalIdentity.clickOnCancelBtn()
})
Then('user select Confirm Button', () => {
    occupationalIdentity.clickOnConfirmBtn()
})

Then('user should be redirected occupational list', () => {
    occupationalIdentity.visiableGrid()
})



