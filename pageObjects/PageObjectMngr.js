import { LoginLogoutPage } from './LoginLogoutPage';
import { AddArticlePage } from './AddArticlePage';
import { AddSystemUserPage } from './AddSystemUserPage';
import { EditArticlePage } from './EditArticlePage';
import { Maintain } from './MaintainingsystemuserPage';
import { SystemUserDashboradPage } from './SystemUserDashboardPage';
import { UserManagementPage } from './UserManagementPage';
import { ConsumablePage } from './ConsumablePage';

export class PageObjectMngr {
    constructor(page) {
        this.page = page;
        this.loginlogoutPage = new LoginLogoutPage(page);
        this.addArticlePage = new AddArticlePage(page);
        this.adduserpage = new AddSystemUserPage(page);
        this.editArticlePage = new EditArticlePage(page);
        this.maintainingSystemUserPage = new Maintain(page);
        this.systemuserdashboardpage = new SystemUserDashboradPage(page);
        this.userManagementPage = new UserManagementPage(page);
        this.consumablesPage = new ConsumablePage(page);
    }

    getLoginPage() {
        return this.loginlogoutPage;
    }

    getAddArticle() {
        return this.addArticlePage;
    }

    getAddsystemuserPage() {
        return this.CreateSystemUserPage;
    }

    getSystemUserDetails() {
        return this.adduserpage;
    }

    getEditArticle() {
        return this.editArticlePage;
    }

    getMaintain() {
        return this.maintainingSystemUserPage;
    }

    getSystemUserDashbord() {
        return this.systemuserdashboardpage;
    }

    getAccessCardDetail() {
        return this.userManagementPage;
    }
    getConsumanlesDetail() {
        return this.consumablesPage;
    }
}
