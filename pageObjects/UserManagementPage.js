export class UserManagementPage {
    constructor(page) {
        this.page = page;
        this.administrationIcon = page.locator('//a[@class="NavigationLinkWrapperadministration"]');
        this.userManagmentModule = page.locator('//div[contains(text(),"User Management")]');
        this.searchBox_UserManagementDashboard = page.locator('//input[@placeholder="Search User"]');
        this.asccessCardNumber = page.locator('//tr[1]//td[8]//div//span[contains(text(),"A12101140033D")]');
        this.accessCardUserProfile = page.locator('//input[@name="accesscard"]');
    }

    async navigateToUserManagement() {
        await this.administrationIcon.click();
        await this.userManagmentModule.click();
    }

    async checkAccessCardDetailOnDashboardColoum() {
        await this.searchBox_UserManagementDashboard.fill('Ashwini');
    }

    async accessCardOnUserProfile() {
        await this.page.getByRole('cell', { name: 'Ashwini' }).first().click();
    }
}
